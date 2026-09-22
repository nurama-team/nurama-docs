import { SectionLayout } from '@/components/section-layout';
import { sections } from '@/lib/source';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SectionLayout section={sections.mcp}>{children}</SectionLayout>;
}
