import Link from 'next/link';
import { Cards, Card } from 'fumadocs-ui/components/card';

const sections = [
  { title: 'Getting started', href: '/docs/getting-started', description: 'Base URLs, authentication, your first request.' },
  { title: 'REST API', href: '/docs/reference/api', description: 'Every endpoint, generated from the OpenAPI document, with a live playground.' },
  { title: 'WebSocket events', href: '/docs/reference/websocket', description: 'Socket.IO channels, event payloads and all notification types.' },
  { title: 'SDK', href: '/docs/guides/sdk', description: '@nurama/sdk for Node and the browser, plus the bot client.' },
  { title: 'MCP server', href: '/docs/guides/mcp', description: 'Give an AI assistant scoped access to Nurama through Model Context Protocol.' },
  { title: 'Bots', href: '/docs/guides/bots', description: 'Build a bot that reads chats, replies and reacts to events.' },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 items-center px-4 py-16">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">Build on Nurama</h1>
        <p className="text-fd-muted-foreground text-lg mb-8">
          Reference and guides for the Nurama platform: a REST API, real-time Socket.IO events, a TypeScript SDK and an MCP
          server. Everything here is generated from the same sources the product runs on.
        </p>
        <Cards>
          {sections.map((s) => (
            <Card key={s.href} title={s.title} href={s.href} description={s.description} />
          ))}
        </Cards>
        <p className="text-sm text-fd-muted-foreground mt-10">
          For AI agents: <Link className="underline" href="/llms.txt">/llms.txt</Link>, <Link className="underline" href="/openapi.json">/openapi.json</Link>,{' '}
          <Link className="underline" href="/asyncapi.json">/asyncapi.json</Link> and <Link className="underline" href="/mcp-tools.json">/mcp-tools.json</Link>.
        </p>
      </div>
    </main>
  );
}
