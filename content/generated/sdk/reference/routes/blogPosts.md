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

Read-only blog feed (Nurama News, shown on the web app's /news page).
Auth: any signed-in user. No workspace coupling — the feed is
platform-level, identical for every user.

The server normalises the post payload and sanitises post HTML, so
the returned `bodyHtml` is safe to render directly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `listBlogPosts()` | (`params?`) => `Promise`\<`BlogPostListResponse`\> | List the most recent Nurama News posts. |
