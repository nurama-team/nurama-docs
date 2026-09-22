import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
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
