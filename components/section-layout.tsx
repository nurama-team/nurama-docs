import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { sectionTabs, type Section } from '@/lib/source';

export function SectionLayout({ section, children }: { section: Section; children: ReactNode }) {
  return (
    <DocsLayout tree={section.source.getPageTree()} tabs={sectionTabs} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
