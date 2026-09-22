import { llms, loader } from 'fumadocs-core/source';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import type { StructuredData } from 'fumadocs-core/mdx-plugins/remark-structure';
import type * as PageTree from 'fumadocs-core/page-tree';
import { openapi } from './openapi';
import { siteUrl } from './shared';

// One collection and one loader per section. Each section is its own route with its own
// DocsLayout, so a page only ships the navigation tree of its section (the REST reference
// alone has ~430 nodes; the full site would otherwise add half a megabyte to every page).

const guidesDocs = defineDocs({
  dir: 'content/docs',
  docs: { schema: pageSchema, postprocess: { includeProcessedMarkdown: true } },
  meta: { schema: metaSchema },
});
const apiDocs = defineDocs({
  dir: 'content/api',
  docs: { schema: pageSchema, postprocess: { includeProcessedMarkdown: true } },
  meta: { schema: metaSchema },
});
const websocketDocs = defineDocs({
  dir: 'content/websocket',
  docs: { schema: pageSchema, postprocess: { includeProcessedMarkdown: true } },
  meta: { schema: metaSchema },
});
const sdkDocs = defineDocs({
  dir: 'content/sdk',
  docs: { schema: pageSchema, postprocess: { includeProcessedMarkdown: true } },
  meta: { schema: metaSchema },
});
const mcpDocs = defineDocs({
  dir: 'content/mcp',
  docs: { schema: pageSchema, postprocess: { includeProcessedMarkdown: true } },
  meta: { schema: metaSchema },
});

// The sidebar only needs names and URLs; descriptions (operation docs can be paragraphs)
// and file references would otherwise be serialised into every page.
const slim = {
  file: (node: PageTree.Item): PageTree.Item => ({ ...node, description: undefined }),
};
const pageTree = { noRef: true, transformers: [slim] };

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const guides = loader({ baseUrl: '/docs', source: guidesDocs.toFumadocsSource(), pageTree });

export const api = loader(
  {
    docs: apiDocs.toFumadocsSource(),
    openapi: await openapi.staticSource({
      per: 'operation',
      groupBy: 'tag',
      // Flat, readable file names: the operationId when the API defines one, otherwise
      // `<method>-<path>` (the default nests a folder per path segment).
      name(output) {
        if (output.type === 'operation') {
          const paths = (this.document as { paths?: Record<string, Record<string, { operationId?: string }>> }).paths;
          const op = paths?.[output.item.path]?.[output.item.method];
          return op?.operationId ?? slug(`${output.item.method}-${output.item.path}`);
        }
        if (output.type === 'webhook') return slug(output.item.name);
        return 'index';
      },
    }),
  },
  { baseUrl: '/docs/reference/api', plugins: [openapi.loaderPlugin()], pageTree },
);

export const websocket = loader({ baseUrl: '/docs/reference/websocket', source: websocketDocs.toFumadocsSource(), pageTree });
export const sdk = loader({ baseUrl: '/docs/reference/sdk', source: sdkDocs.toFumadocsSource(), pageTree });
export const mcp = loader({ baseUrl: '/docs/reference/mcp', source: mcpDocs.toFumadocsSource(), pageTree });

// ---------------------------------------------------------------- section registry

type OperationLike = { summary?: string; description?: string; deprecated?: boolean };
type DocumentLike = { paths?: Record<string, Record<string, OperationLike>> };

/** The subset of a loader page that the shared route, search and llms code rely on. */
export interface SectionPage {
  url: string;
  slugs: string[];
  path: string;
  data: {
    title: string;
    description?: string;
    structuredData?: StructuredData;
    getText?: (type: 'processed' | 'raw') => Promise<string>;
    getOpenAPIPageProps?: () => { operations?: { path: string; method: string }[] };
    getSchema?: () => { bundled: unknown };
  };
}

export interface SectionSource {
  getPage: (slugs?: string[]) => SectionPage | undefined;
  getPages: () => SectionPage[];
  getPageTree: () => PageTree.Root;
  generateParams: () => { slug?: string[] }[];
}

export interface Section {
  id: 'guides' | 'api' | 'websocket' | 'sdk' | 'mcp';
  title: string;
  description: string;
  url: string;
  /** URL segments between /docs and the section's own slugs */
  prefix: string[];
  source: SectionSource;
  /** Pages are regenerated from content/generated; there is no file to edit on GitHub. */
  generated: boolean;
}

const asSection = (s: unknown) => s as SectionSource;

export const sections: Record<Section['id'], Section> = {
  guides: { id: 'guides', title: 'Guides', description: 'Getting started, concepts and how-tos', url: '/docs', prefix: [], source: asSection(guides), generated: false },
  api: { id: 'api', title: 'REST API', description: 'Every endpoint, from the OpenAPI document', url: '/docs/reference/api', prefix: ['reference', 'api'], source: asSection(api), generated: true },
  websocket: { id: 'websocket', title: 'WebSocket events', description: 'Channels, events and notification types', url: '/docs/reference/websocket', prefix: ['reference', 'websocket'], source: asSection(websocket), generated: true },
  sdk: { id: 'sdk', title: 'SDK reference', description: '@nurama/sdk clients and namespaces', url: '/docs/reference/sdk', prefix: ['reference', 'sdk'], source: asSection(sdk), generated: true },
  mcp: { id: 'mcp', title: 'MCP tools', description: 'The MCP server tool catalogue', url: '/docs/reference/mcp', prefix: ['reference', 'mcp'], source: asSection(mcp), generated: true },
};

export const sectionList = Object.values(sections);

export const sectionTabs = sectionList.map((s) => ({ title: s.title, description: s.description, url: s.url }));

/** Resolve `/docs/<slugs>` to a section and its page, longest prefix first. */
export function findPage(slugs: string[] = []): { section: Section; page: SectionPage } | undefined {
  const candidates = [...sectionList].sort((a, b) => b.prefix.length - a.prefix.length);
  for (const section of candidates) {
    const matches = section.prefix.every((seg, i) => slugs[i] === seg);
    if (!matches) continue;
    const page = section.source.getPage(slugs.slice(section.prefix.length));
    if (page) return { section, page };
  }
  return undefined;
}

export const markdownUrlFor = (section: Section, page: SectionPage) =>
  `/llms.mdx/docs/${[...section.prefix, ...page.slugs, 'content.md'].join('/')}`;

// ---------------------------------------------------------------- llms.txt

const renderPage = async (page: SectionPage) => {
  if (page.data.getOpenAPIPageProps && page.data.getSchema) {
    const { operations = [] } = page.data.getOpenAPIPageProps();
    const doc = page.data.getSchema().bundled as DocumentLike;
    const body = operations.map(({ path, method }) => {
      const op = doc.paths?.[path]?.[method] ?? {};
      return [`## ${method.toUpperCase()} ${path}${op.deprecated ? ' (deprecated)' : ''}`, op.summary, op.description].filter(Boolean).join('\n\n');
    });
    return [`# ${page.data.title} (${page.url})`, page.data.description, `Machine-readable definition: ${siteUrl}/openapi.json`, ...body].filter(Boolean).join('\n\n');
  }
  const text = page.data.getText ? await page.data.getText('processed') : '';
  return `# ${page.data.title} (${page.url})\n\n${text}`;
};

export const llmsFor = (section: Section) => {
  const output = llms(section.source as unknown as Parameters<typeof llms>[0], { renderPage: renderPage as never });
  return {
    index: () => output.index(),
    full: () => output.full(),
    page: (page: SectionPage) => output.page(page as never),
  };
};
