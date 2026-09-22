import { llmsFor, sectionList } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const parts = await Promise.all(sectionList.map((section) => llmsFor(section).full()));
  return new Response(parts.join('\n\n'));
}
