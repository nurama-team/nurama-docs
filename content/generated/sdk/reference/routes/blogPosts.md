[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/blogPosts

# routes/blogPosts

## Functions

### default()

```ts
function default(client): {
  listBlogPosts: Promise<BlogPostListResponse>;
};
```

Read-only blog feed (Nurama News on the /news page) sourced via the
backend's Ghost Content API proxy. Auth: any signed-in user. No
workspace coupling — the feed is platform-level, identical for every
user.

The proxy normalises Ghost's payload and sanitises post HTML
server-side, so the returned `bodyHtml` is safe to render via the
FE's controlled HTML primitive inside a modal.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `listBlogPosts()` | (`params?`) => `Promise`\<`BlogPostListResponse`\> | List the most recent Nurama News posts. |
