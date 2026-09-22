import { findPage, llmsFor, sectionList } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/docs/[[...slug]]'>) {
  const { slug } = await params;
  // remove the appended "content.md"
  const found = findPage(slug?.slice(0, -1));
  if (!found) notFound();

  return new Response(await llmsFor(found.section).page(found.page), {
    headers: { 'Content-Type': 'text/markdown' },
  });
}

export function generateStaticParams() {
  return sectionList.flatMap((section) =>
    section.source.getPages().map((page) => ({ slug: [...section.prefix, ...page.slugs, 'content.md'] })),
  );
}
