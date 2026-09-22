[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/public

# routes/public

## Interfaces

### DownloadPublicAssetsData

Request body for downloading public assets

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="assetids"></a> `assetIds` | `string`[] |

***

### PaginationParams

Base pagination parameters

#### Extended by

- [`PublicPaginationParams`](#publicpaginationparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="cursor"></a> `cursor?` | `string` |
| <a id="includecounts"></a> `includeCounts?` | `boolean` |
| <a id="includecursorrecord"></a> `includeCursorRecord?` | `boolean` |
| <a id="includestartatrecord"></a> `includeStartAtRecord?` | `boolean` |
| <a id="limit"></a> `limit?` | `number` |
| <a id="page"></a> `page?` | `number` |
| <a id="paginate"></a> `paginate?` | `"cursor"` \| `"index"` |
| <a id="paginatereverse"></a> `paginateReverse?` | `boolean` |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |
| <a id="startat"></a> `startAt?` | `string` |

***

### PublicFileSystemDetailsResponse

Response type for a single public file system

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="allowanonymouscomments"></a> `allowAnonymousComments?` | `boolean` | Whether unauthenticated visitors may comment on this release by supplying a display name (no account). Drives the anonymous compose flow in the UI. |
| <a id="createdat"></a> `createdAt` | `string` | - |
| <a id="description"></a> `description?` | `string` | - |
| <a id="expiresat"></a> `expiresAt` | `string` | - |
| <a id="id"></a> `id` | `string` | - |
| <a id="itempaths"></a> `itemPaths` | `string`[] | - |
| <a id="projectid"></a> `projectId` | `string` | - |
| <a id="title"></a> `title` | `string` | - |
| <a id="token"></a> `token` | `string` | - |
| <a id="updatedat"></a> `updatedAt` | `string` | - |

***

### PublicPaginationParams

Pagination parameters specific to public routes

#### Extends

- [`PaginationParams`](#paginationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="creatorid"></a> `creatorId?` | `string` | - |
| <a id="cursor-1"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor) |
| <a id="includecounts-1"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts) |
| <a id="includecursorrecord-1"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord) |
| <a id="includestartatrecord-1"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord) |
| <a id="limit-1"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit) |
| <a id="mediatypes"></a> `mediaTypes?` | (`"folder"` \| `"image"` \| `"video"` \| `"audio"` \| `"file"`)[] | - |
| <a id="namesearch"></a> `nameSearch?` | `string` | - |
| <a id="page-1"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page) |
| <a id="paginate-1"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate) |
| <a id="paginatereverse-1"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse) |
| <a id="recursivesearch"></a> `recursiveSearch?` | `boolean` | - |
| <a id="resourceids"></a> `resourceIds?` | `string`[] | - |
| <a id="resourceslugs"></a> `resourceSlugs?` | `string`[] | - |
| <a id="resourcestatus"></a> `resourceStatus?` | `"active"` \| `"pendingDelete"` | - |
| <a id="resourcetags"></a> `resourceTags?` | `string`[] | - |
| <a id="resourcetype"></a> `resourceType?` | `"asset"` \| `"folder"` | - |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`PaginationParams`](#paginationparams).[`sort`](#sort) |
| <a id="startat-1"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat) |

## Type Aliases

### PublicFileSystemResponse

```ts
type PublicFileSystemResponse = CursorPaginatedResult & {
  results?: FileSystem[];
};
```

Response type for paginated public file system items

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `results?` | `FileSystem`[] |

## Functions

### default()

```ts
function default(client): {
  createPublicAssetChatMessage: Promise<CreatePublicAssetChatMessageResponse>;
  createPublicChatMessage: Promise<ChatMessage>;
  createPublicTopicChatMessage: Promise<CreatePublicAssetChatMessageResponse>;
  downloadAssets: Promise<DownloadSignedUrlData[]>;
  getPublicAsset: Promise<PublicAssetResponse>;
  getPublicChat: Promise<Chat | null>;
  getPublicChatMessages: Promise<PublicChatMessagesResponse>;
  getPublicDownloadUrl: Promise<PublicDownloadUrlResponse>;
  getPublicEmbedFiles: Promise<PublicEmbedFilesResponse>;
  getPublicFileSystem: Promise<PublicFileSystemDetailsResponse>;
  getPublicItems: Promise<PublicFileSystemResponse>;
  getPublicItemsAtPath: Promise<PublicFileSystemResponse>;
  recordAccessActivity: Promise<void>;
  resolvePublicDownload: Promise<ResolvePublicDownloadResponse>;
};
```

Defines public route methods for unauthenticated access to public file systems.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createPublicAssetChatMessage()` | ( `token`, `assetId`, `data` ) => `Promise`\<`CreatePublicAssetChatMessageResponse`\> | Creates a message on an asset's public chat. If no public chat exists for this asset in this public file system, one is created (lazy creation). Requires authentication. **Example** `// This creates the chat if it doesn't exist and posts the first message const { chat, message } = await nuramaClient.public.createPublicAssetChatMessage('abc123def4', 'asset-id', { content: 'First comment on this asset!', });` |
| `createPublicChatMessage()` | ( `token`, `chatId`, `data` ) => `Promise`\<`ChatMessage`\> | Creates a message in an existing public chat. Requires authentication. **Example** `const message = await nuramaClient.public.createPublicChatMessage('abc123def4', 'chat-id', { content: 'Hello world!', });` |
| `createPublicTopicChatMessage()` | (`token`, `data`) => `Promise`\<`CreatePublicAssetChatMessageResponse`\> | Creates a message on the main public topic chat. If no main chat exists for this public file system, one is created (lazy creation). Requires authentication. **Example** `// This creates the main chat if it doesn't exist and posts the first message const { chat, message } = await nuramaClient.public.createPublicTopicChatMessage('abc123def4', { content: 'First comment on this public file system!', });` |
| `downloadAssets()` | (`token`, `downloadData`) => `Promise`\<`DownloadSignedUrlData`[]\> | Downloads public assets by generating signed URLs for the original files. This endpoint does not require authentication - access is controlled by the token. **Example** `const downloadUrls = await nuramaClient.public.downloadAssets('abc123def4', { assetIds: ['507f1f77bcf86cd799439011', '507f191e810c19729de860ea'] });` |
| `getPublicAsset()` | (`token`, `assetId`) => `Promise`\<`PublicAssetResponse`\> | Gets an asset with its public chat in the context of a public file system. This endpoint does not require authentication for read access. **Example** `const asset = await nuramaClient.public.getPublicAsset('abc123def4', 'asset-id'); if (asset.chats.public) { console.log('Asset has public chat:', asset.chats.public.id); }` |
| `getPublicChat()` | (`token`, `chatId?`) => `Promise`\<`Chat` \| `null`\> | Gets the main public file system chat or a specific chat by ID. This endpoint does not require authentication for read access. **Example** `// Get main public file system chat const mainChat = await nuramaClient.public.getPublicChat('abc123def4'); // Get specific chat by ID const chat = await nuramaClient.public.getPublicChat('abc123def4', 'chat-id-here');` |
| `getPublicChatMessages()` | ( `token`, `chatId`, `params?` ) => `Promise`\<`PublicChatMessagesResponse`\> | Gets paginated messages for a public chat. This endpoint does not require authentication for read access. **Example** `const messages = await nuramaClient.public.getPublicChatMessages('abc123def4', 'chat-id', { limit: 20, paginateReverse: false, });` |
| `getPublicDownloadUrl()` | (`token`) => `Promise`\<[`PublicDownloadUrlResponse`](shortlink.md#publicdownloadurlresponse)\> | Get a short-lived signed download URL for a public asset-link token. Public endpoint; fails with 403 for embed-only links. **Throws** 'token is required.' when `token` is falsy. |
| `getPublicEmbedFiles()` | (`token`) => `Promise`\<[`PublicEmbedFilesResponse`](shortlink.md#publicembedfilesresponse)\> | Get the HLS stream and fallback media key paths for the embeddable player. Public endpoint; fails with 403 for download-only links. **Throws** 'token is required.' when `token` is falsy. |
| `getPublicFileSystem()` | (`token`) => `Promise`\<[`PublicFileSystemDetailsResponse`](#publicfilesystemdetailsresponse)\> | Gets public file system details by token. This endpoint does not require authentication - access is controlled by the token. **Example** `const publicFileSystem = await nuramaClient.public.getPublicFileSystem('abc123def4');` |
| `getPublicItems()` | (`token`, `params?`) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Gets public items at the root level of a public file system. This endpoint does not require authentication - access is controlled by the token. **Example** `const publicItems = await nuramaClient.public.getPublicItems('abc123def4');` |
| `getPublicItemsAtPath()` | ( `token`, `path`, `params?` ) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Gets public items at a specific path within a public file system. This endpoint does not require authentication - access is controlled by the token. **Example** `const items = await nuramaClient.public.getPublicItemsAtPath('abc123def4', 'folder1/subfolder');` |
| `recordAccessActivity()` | (`token`, `body`) => `Promise`\<`void`\> | Record a play event from the embed player for a public asset link. Public endpoint; no authentication. The API responds 204. **Throws** 'token is required.' when `token` is falsy. |
| `resolvePublicDownload()` | (`token`) => `Promise`\<[`ResolvePublicDownloadResponse`](shortlink.md#resolvepublicdownloadresponse)\> | Resolve a public asset-link token to the minimal file info the download page shows. Public endpoint; no authentication. **Throws** 'token is required.' when `token` is falsy. |
