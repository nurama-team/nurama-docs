import type { Metadata } from 'next';
import type { FC } from 'react';
import type { MDXComponents } from 'mdx/types';
import type { TOCItemType } from 'fumadocs-core/toc';
import { notFound } from 'next/navigation';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, MarkdownCopyButton, ViewOptionsPopover } from 'fumadocs-ui/layouts/docs/page';
import { getMDXComponents } from '@/components/mdx';
import { OpenAPIPage } from '@/components/api-page';
import { gitConfig } from '@/lib/shared';
import { markdownUrlFor, type Section, type SectionPage } from '@/lib/source';
import type { OpenAPIPageProps } from 'fumadocs-openapi/ui';

type RouteProps = { params: Promise<{ slug?: string[] }> };

type RenderablePage = Omit<SectionPage, 'data'> & {
  data: Omit<SectionPage['data'], 'getOpenAPIPageProps'> & {
    toc: TOCItemType[];
    full?: boolean;
    body?: FC<{ components?: MDXComponents }>;
    getOpenAPIPageProps?: () => OpenAPIPageProps;
  };
};

/**
 * Page, generateStaticParams and generateMetadata for one documentation section. Every
 * section route file is three lines that call this.
 */
export function createSectionRoute(section: Section) {
  async function Page(props: RouteProps) {
    const { slug } = await props.params;
    const page = section.source.getPage(slug) as RenderablePage | undefined;
    if (!page) notFound();

    const markdownUrl = markdownUrlFor(section, page);
    const githubUrl = section.generated
      ? undefined
      : `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`;
    const header = (
      <>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
        <div className="flex flex-row gap-2 items-center border-b pb-6">
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover markdownUrl={markdownUrl} githubUrl={githubUrl} />
        </div>
      </>
    );

    if (page.data.getOpenAPIPageProps) {
      return (
        <DocsPage toc={page.data.toc} full>
          {header}
          <DocsBody>
            <OpenAPIPage {...page.data.getOpenAPIPageProps()} />
          </DocsBody>
        </DocsPage>
      );
    }

    const MDX = page.data.body;
    return (
      <DocsPage toc={page.data.toc} full={page.data.full}>
        {header}
        <DocsBody>{MDX ? <MDX components={getMDXComponents()} /> : null}</DocsBody>
      </DocsPage>
    );
  }

  async function generateStaticParams() {
    return section.source.generateParams();
  }

  async function generateMetadata(props: RouteProps): Promise<Metadata> {
    const { slug } = await props.params;
    const page = section.source.getPage(slug);
    if (!page) notFound();
    return { title: page.data.title, description: page.data.description };
  }

  return { Page, generateStaticParams, generateMetadata };
}
