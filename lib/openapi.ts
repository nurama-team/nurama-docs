import { createOpenAPI } from 'fumadocs-openapi/server';
import fs from 'node:fs';
import path from 'node:path';

// scripts/generate.mjs splits the public OpenAPI document into one file per tag so an
// API page only carries the components its tag uses. The index lists the files.
const dir = path.join(process.cwd(), '.generated/openapi');
const index = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8')) as { files: string[] };

export const openapi = createOpenAPI({
  input: Object.fromEntries(index.files.map((file) => [file.replace(/\.json$/, ''), path.join(dir, file)])),
});
