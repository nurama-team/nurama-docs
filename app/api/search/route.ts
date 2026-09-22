import { createSearchAPI } from 'fumadocs-core/search/server';
import { sectionList } from '@/lib/source';

export const revalidate = false;

// One document per page. Guides are indexed in full; generated reference pages (full
// schemas, every operation) are indexed by title, summary and their opening text only,
// which keeps the static index small enough to download on first search.
export const { staticGET: GET } = createSearchAPI('simple', {
  language: 'english',
  indexes: async () =>
    Promise.all(
      sectionList.flatMap((section) =>
        section.source.getPages().map(async (page) => {
          let content: string;
          if (section.generated) {
            const first = page.data.structuredData?.contents[0]?.content ?? '';
            content = `${page.data.description ?? ''}\n${first}`.slice(0, 500);
          } else {
            content = page.data.getText ? await page.data.getText('processed') : (page.data.description ?? '');
          }
          return {
            title: page.data.title,
            description: section.generated ? page.data.description?.slice(0, 300) : page.data.description,
            breadcrumbs: [section.title],
            content,
            url: page.url,
          };
        }),
      ),
    ),
});
