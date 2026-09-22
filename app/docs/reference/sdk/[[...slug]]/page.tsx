import { createSectionRoute } from '@/lib/section-route';
import { sections } from '@/lib/source';

const route = createSectionRoute(sections.sdk);

export default route.Page;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
