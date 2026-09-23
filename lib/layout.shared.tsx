import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { NuramaMark } from '@/components/brand';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <NuramaMark className="h-4 w-auto" />
          <span className="font-semibold">{appName}</span>
        </span>
      ),
    },
    links: [
      { text: 'Guides', url: '/docs' },
      { text: 'REST API', url: '/docs/reference/api' },
      { text: 'WebSocket', url: '/docs/reference/websocket' },
      { text: 'SDK', url: '/docs/reference/sdk' },
      { text: 'MCP', url: '/docs/reference/mcp' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
