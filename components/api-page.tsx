'use client';
import { createOpenAPIPage } from 'fumadocs-openapi/ui';

// Renders the REST reference pages (operations, schemas, code samples, playground).
// The playground calls the API directly from the browser; api.nurama.com must allow
// this site's origin in CORS for it to work.
export const OpenAPIPage = createOpenAPIPage();
