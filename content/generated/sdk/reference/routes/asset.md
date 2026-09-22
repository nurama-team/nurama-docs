[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/asset

# routes/asset

## Interfaces

### AssetWithChats

#### Extends

- `Omit`\<`Asset`, `"chats"`\>

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="aigenerated"></a> `aiGenerated?` | `boolean` | True when the bytes were produced by a platform AI process (e.g. promoted from an `aiRevision` scratch row). Drives the "AI Generated" system chip in the asset view; also queryable for admin filtering. Distinct from user tags — set at create/promote time, not editable. | `Omit.aiGenerated` |
| <a id="chats"></a> `chats?` | \{ `creator?`: [`Chat`](#chat); `reviewer?`: [`Chat`](#chat); \} | - | - |
| `chats.creator?` | [`Chat`](#chat) | - | - |
| `chats.reviewer?` | [`Chat`](#chat) | - | - |
| <a id="checksum"></a> `checksum` | `string` | MD5 checksum of original file. **Format** md5 | `Omit.checksum` |
| <a id="checksumalgorithm"></a> `checksumAlgorithm?` | `"md5"` | The algorithm used for computing the checksum. | `Omit.checksumAlgorithm` |
| <a id="createdat"></a> `createdAt?` | `number` | The timestamp when the asset was created. **Format** int64 | `Omit.createdAt` |
| <a id="creator"></a> `creator?` | `PublicUser` | Public user information of the creator. | `Omit.creator` |
| <a id="creatorid"></a> `creatorId` | `string` | The ID of the user who created the asset. **Format** objectId | `Omit.creatorId` |
| <a id="everpublic"></a> `everPublic?` | `boolean` | One-way flag set true once the asset has been publicly exposed (link or file system) at any point. | `Omit.everPublic` |
| <a id="expecteduploadsizeinmb"></a> `expectedUploadSizeInMB` | `number` | Expected upload size of the asset in megabytes, used to determine signed link generation. | `Omit.expectedUploadSizeInMB` |
| <a id="files"></a> `files?` | `File`[] | The files associated with the asset. | `Omit.files` |
| <a id="filesystempaths"></a> `fileSystemPaths?` | `string`[] | Array of file system entry IDs associated with this asset. **Format** objectId | `Omit.fileSystemPaths` |
| <a id="folder"></a> `folder?` | `string` \| `Folder` \| `null` | Populated folder data. | `Omit.folder` |
| <a id="folderid"></a> `folderId?` | `string` \| `null` | If the asset is in a folder the folder ID goes here. If not this is null. **Format** objectId **Default** `null` | `Omit.folderId` |
| <a id="functiontype"></a> `functionType` | `"avatar"` \| `"attachment"` \| `"media"` \| `"logo"` \| `"icon"` | The function of the asset on the platform. | `Omit.functionType` |
| <a id="hasactivepublicfilesystem"></a> `hasActivePublicFileSystem?` | `boolean` | True when the asset is a member of at least one active, non-expired public file system. | `Omit.hasActivePublicFileSystem` |
| <a id="hasactivepubliclink"></a> `hasActivePublicLink?` | `boolean` | True when the asset has at least one active public download link. | `Omit.hasActivePublicLink` |
| <a id="id"></a> `id` | `string` | The id of the asset. **Format** objectId | `Omit.id` |
| <a id="inheritance"></a> `inheritance?` | `any` | Populated inheritance data. | `Omit.inheritance` |
| <a id="inheritanceid"></a> `inheritanceId?` | `string` \| `null` | ID of the inheritance object associated with this asset. **Format** objectId | `Omit.inheritanceId` |
| <a id="keypath"></a> `keyPath` | `string` | Storage path of the asset's original file, relative to the storage root. | `Omit.keyPath` |
| <a id="mediatype"></a> `mediaType` | `"image"` \| `"video"` \| `"audio"` \| `"file"` \| `"3d"` \| `"document"` | The media type of the asset. | `Omit.mediaType` |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `any`\> | Additional metadata for the asset. **Default** `{}` | `Omit.meta` |
| <a id="name"></a> `name` | `string` | The name of the asset used on the platform. | `Omit.name` |
| <a id="ownerresourceid"></a> `ownerResourceId` | `string` | The id of the resource that the asset is attached to. **Format** objectId | `Omit.ownerResourceId` |
| <a id="ownerresourcetype"></a> `ownerResourceType` | `"project"` \| `"chatMessage"` \| `"user"` | The type of the owner resource. | `Omit.ownerResourceType` |
| <a id="publishedon"></a> `publishedOn?` | `string` \| `null` | The date when the asset was published. If not published, this will be null. **Format** date-time **Default** `null` | `Omit.publishedOn` |
| <a id="publisher"></a> `publisher?` | `PublicUser` | Public user information of the publisher (if published). | `Omit.publisher` |
| <a id="publisherid"></a> `publisherId?` | `string` \| `null` | The ID of the user who published the asset (if published). **Format** objectId **Default** `null` | `Omit.publisherId` |
| <a id="sizeinbytes"></a> `sizeInBytes` | `number` | The total size of the asset in bytes. | `Omit.sizeInBytes` |
| <a id="slug"></a> `slug?` | `string` | The URL-friendly slug of the asset name. | `Omit.slug` |
| <a id="status"></a> `status` | `"active"` \| `"pendingDelete"` \| `"inactive"` | The status of the asset. **Default** `active` | `Omit.status` |
| <a id="submissionfilesystemids"></a> `submissionFileSystemIds?` | `string`[] | Submission file system IDs the asset currently belongs to. Empty when not in any submission. | `Omit.submissionFileSystemIds` |
| <a id="tags"></a> `tags?` | `string`[] | Tags associated with the asset. **Format** objectId | `Omit.tags` |
| <a id="updatedat"></a> `updatedAt?` | `number` | The timestamp when the asset was last updated. **Format** int64 | `Omit.updatedAt` |
| <a id="visibility"></a> `visibility?` | (`"creator"` \| `"reviewer"` \| `"member"` \| `"public"`)[] | The visibility settings for the asset. **Default** `['creator']` | `Omit.visibility` |

***

### Chat

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="_id"></a> `_id?` | `string` |
| <a id="id-1"></a> `id?` | `string` |
| <a id="recentmessages"></a> `recentMessages?` | `any`[] |
| <a id="totalmessages"></a> `totalMessages?` | `number` |

***

### CompleteMultipartUploadData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="assetid"></a> `assetId` | `string` |
| <a id="key"></a> `key` | `string` |
| <a id="parts"></a> `parts` | \{ `ETag`: `string`; `PartNumber`: `number`; \}[] |
| <a id="uploadid"></a> `uploadId` | `string` |

***

### CreateAssetShortLinkData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="visibility-1"></a> `visibility?` | `"creator"` \| `"reviewer"` |

***

### CreateAssetShortLinkResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="shortlink"></a> `shortLink` | [`ShortLink`](#shortlink-1) |
| <a id="shorturl"></a> `shortUrl` | `string` |

***

### DocumentViewUrlResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="expires"></a> `expires` | `number` | Unix seconds. Refetch rather than reusing a URL past this. |
| <a id="originalpagecount"></a> `originalPageCount` | `number` | Pages in the source document. Equals `pageCount` unless truncated. |
| <a id="pagecount"></a> `pageCount` | `number` | From `meta.document.pageCount`; 0 when processing has not reported it. |
| <a id="pagestruncated"></a> `pagesTruncated` | `boolean` | True when the `media` PDF holds only the first `pageCount` pages of a longer document, because post-processing hit its `maxPages` cap. The PDF itself is internally consistent, so this flag is the only way to know. |
| <a id="truncatedfrom"></a> `truncatedFrom` | `"start"` \| `"end"` | Which end of the document the `media` PDF kept. `'start'` for everything read front-to-back; `'end'` for logs, whose newest lines are at the bottom. Only meaningful when `pagesTruncated` is true. |
| <a id="url"></a> `url` | `string` | Signed URL for the document's `media` PDF, served inline. |

***

### GetAssetPageParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="infolder"></a> `inFolder?` | `boolean` |
| <a id="limit"></a> `limit?` | `number` |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |
| <a id="visibility-2"></a> `visibility?` | `string` |

***

### GetAssetParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="chatmessagelimit"></a> `chatMessageLimit?` | `number` |
| <a id="chatmessagesort"></a> `chatMessageSort?` | \{ `id?`: `1` \| `-1`; \} |
| `chatMessageSort.id?` | `1` \| `-1` |
| <a id="chatreplylimit"></a> `chatReplyLimit?` | `number` |
| <a id="chatreplysort"></a> `chatReplySort?` | \{ `id?`: `1` \| `-1`; \} |
| `chatReplySort.id?` | `1` \| `-1` |
| <a id="chatvisibility"></a> `chatVisibility?` | `"creator"` \| `"reviewer"` |

***

### MultipartUploadOptions

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="abortsignal"></a> `abortSignal?` | `AbortSignal` |
| <a id="assetid-1"></a> `assetId?` | `string` |
| <a id="enableprogresspersistence"></a> `enableProgressPersistence?` | `boolean` |
| <a id="filename"></a> `fileName?` | `string` |
| <a id="filesize"></a> `fileSize?` | `number` |
| <a id="maxretries"></a> `maxRetries?` | `number` |
| <a id="onprogress"></a> `onProgress?` | (`progress`) => `void` |
| <a id="projectid"></a> `projectId?` | `string` |
| <a id="sessionid"></a> `sessionId?` | `string` |

***

### MultipartUploadResult

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="key-1"></a> `key` | `string` |
| <a id="parts-1"></a> `parts` | \{ `ETag`: `string`; `PartNumber`: `number`; \}[] |
| <a id="uploadid-1"></a> `uploadId` | `string` |

***

### PartUploadOptions

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="abortsignal-1"></a> `abortSignal?` | `AbortSignal` |
| <a id="maxretries-1"></a> `maxRetries?` | `number` |
| <a id="onpartprogress"></a> `onPartProgress?` | (`progress`) => `void` |

***

### PublicAssetLink

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assetid-2"></a> `assetId` | `string` | - |
| <a id="createdat-1"></a> `createdAt` | `string` | - |
| <a id="creatorid-1"></a> `creatorId` | `string` | - |
| <a id="expires-1"></a> `expires` | `string` \| `null` | - |
| <a id="id-2"></a> `id` | `string` | - |
| <a id="isexpired"></a> `isExpired?` | `boolean` | - |
| <a id="mode"></a> `mode?` | [`PublicAssetLinkMode`](#publicassetlinkmode-1) | Capability mode for this link. - 'download' — direct-download link only; embed iframe blocked. - 'embed' — embeddable iframe only; direct download blocked. - 'embed-download' — both endpoints allowed (default; backward-compatible). Enforced server-side at /v1/public-download/{token}/download and /embed-files. |
| <a id="projectid-1"></a> `projectId` | `string` | - |
| <a id="publicurl"></a> `publicUrl` | `string` | - |
| <a id="status-1"></a> `status` | `"active"` \| `"expired"` \| `"disabled"` | - |
| <a id="token"></a> `token` | `string` | - |
| <a id="updatedat-1"></a> `updatedAt` | `string` | - |

***

### ShortLink

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="code"></a> `code` | `string` |
| <a id="createdat-2"></a> `createdAt` | `string` |
| <a id="creatorid-2"></a> `creatorId` | `string` |
| <a id="id-3"></a> `id` | `string` |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | `"asset"` \| `"project"` \| `"workspace"` \| `"chatMessage"` \| `"chatSubmission"` |
| <a id="updatedat-2"></a> `updatedAt?` | `string` |
| <a id="visibility-3"></a> `visibility` | `"creator"` \| `"reviewer"` \| `null` |

***

### TagAssetData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tagid"></a> `tagId` | `string` |

***

### UntagAssetData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tagid-1"></a> `tagId` | `string` |

***

### UpdateAssetData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="folderid-1"></a> `folderId?` | `string` \| `null` |
| <a id="meta-1"></a> `meta?` | `Record`\<`string`, `any`\> |
| <a id="name-1"></a> `name?` | `string` |
| <a id="tags-1"></a> `tags?` | `string`[] |

## Type Aliases

### AssetPageResponse

```ts
type AssetPageResponse = {
  page: number;
};
```

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="page"></a> `page` | `number` |

***

### AssetResponse

```ts
type AssetResponse = AssetWithChats;
```

***

### DownloadAssetsResponse

```ts
type DownloadAssetsResponse = any[];
```

***

### FileResponse

```ts
type FileResponse = File;
```

***

### PublicAssetLinkMode

```ts
type PublicAssetLinkMode = "download" | "embed" | "embed-download";
```

***

### RepairAssetsResponse

```ts
type RepairAssetsResponse = any[];
```

## Functions

### default()

```ts
function default(client): {
  cleanupUploadSessions: void;
  completeCustomThumbnailUpload: Promise<{
     key: string;
     status: string;
  }>;
  completeUpload: Promise<any>;
  completeUploadSession: void;
  createPublicLink: Promise<PublicAssetLink>;
  createShortLink: Promise<CreateAssetShortLinkResponse>;
  deleteAsset: Promise<AssetWithChats>;
  disablePublicLink: Promise<PublicAssetLink>;
  downloadAssets: Promise<DownloadAssetsResponse>;
  getAsset: Promise<AssetWithChats>;
  getAssetAccessActivity: Promise<{
     breakdown: {
        count: number;
        label: string;
        value: string;
     }[];
     eventType: string | null;
     from: string;
     groupBy: string;
     range: string;
     series: {
        count: number;
        date: string;
        eventType: string;
     }[];
     to: string;
     totals: {
        count: number;
        eventType: string;
     }[];
  }>;
  getAssetPage: Promise<AssetPageResponse>;
  getAssetReferences: Promise<AssetReferences>;
  getCustomThumbnailUploadUrl: Promise<{
     assetId: string;
     expires: number;
     fileName: string;
     key: string;
     mimeType: string;
     status: string;
     uploadId: string;
     urls: string[];
  }>;
  getDocumentViewUrl: Promise<DocumentViewUrlResponse>;
  getFile: Promise<File>;
  getFilesByFunctionType: Promise<File[]>;
  getPublicLinks: Promise<{
     results: PublicAssetLink[];
  }>;
  getUploadSession: UploadSessionData | null;
  getUploadSessions: UploadSessionData[];
  hasActiveUploads: boolean;
  multipartUpload: Promise<MultipartUploadResult>;
  offUploadSessionMessage: void;
  onUploadSessionMessage: void;
  promoteAttachmentToProject: Promise<{
     asset: Asset;
     deduped: boolean;
  }>;
  reactivatePublicLink: Promise<PublicAssetLink>;
  recordAccessActivity: Promise<void>;
  removeCustomThumbnail: Promise<Asset>;
  removeUploadSession: void;
  repairAssets: Promise<RepairAssetsResponse>;
  tagAsset: Promise<AssetWithChats>;
  untagAsset: Promise<AssetWithChats>;
  updateAsset: Promise<AssetWithChats>;
  updatePublicLink: Promise<PublicAssetLink>;
};
```

Defines asset-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the asset-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `cleanupUploadSessions()` | (`projectId`, `olderThanMs?`) => `void` | Clean up old upload sessions for a project |
| `completeCustomThumbnailUpload()` | (`assetId`, `data`) => `Promise`\<\{ `key`: `string`; `status`: `string`; \}\> | Finalize the multipart upload for a custom thumbnail. Committing the upload starts the background processing that generates the thumbnail outputs. |
| `completeUpload()` | (`uploadData`) => `Promise`\<`any`\> | Complete a multipart upload initiated by `createAssets`. Takes the same `{ uploadId, parts }` shape as `nuramaClient.scratch.completeUpload`, plus the `key` and `assetId`. |
| `completeUploadSession()` | (`projectId`, `sessionId`) => `void` | Mark an upload session as completed |
| `createPublicLink()` | (`assetId`, `data`) => `Promise`\<[`PublicAssetLink`](#publicassetlink)\> | Create a public download link for an asset. |
| `createShortLink()` | (`assetId`, `data?`) => `Promise`\<[`CreateAssetShortLinkResponse`](#createassetshortlinkresponse)\> | Creates a short link for an asset. If a short link already exists for the asset with the same visibility, returns the existing one. |
| `deleteAsset()` | (`assetId`) => `Promise`\<[`AssetWithChats`](#assetwithchats)\> | Deletes an asset (marks for deletion). |
| `disablePublicLink()` | (`assetId`, `linkId`) => `Promise`\<[`PublicAssetLink`](#publicassetlink)\> | Disable a public download link. |
| `downloadAssets()` | (`assetIds`) => `Promise`\<[`DownloadAssetsResponse`](#downloadassetsresponse)\> | Generates signed download URLs for the original files of specified assets. |
| `getAsset()` | (`assetId`, `params?`) => `Promise`\<[`AssetWithChats`](#assetwithchats)\> | Retrieves a specific asset by its ID with optional chat data. |
| `getAssetAccessActivity()` | (`assetId`, `params?`) => `Promise`\<\{ `breakdown`: \{ `count`: `number`; `label`: `string`; `value`: `string`; \}[]; `eventType`: `string` \| `null`; `from`: `string`; `groupBy`: `string`; `range`: `string`; `series`: \{ `count`: `number`; `date`: `string`; `eventType`: `string`; \}[]; `to`: `string`; `totals`: \{ `count`: `number`; `eventType`: `string`; \}[]; \}\> | Get aggregated access-activity for a single asset. Returns totals per eventType, a breakdown for the requested dimension, and a zero-filled daily series. |
| `getAssetPage()` | (`assetId`, `params?`) => `Promise`\<[`AssetPageResponse`](#assetpageresponse)\> | Gets the page number an asset appears on based on specified filters and sorting. |
| `getAssetReferences()` | (`assetId`) => `Promise`\<`AssetReferences`\> | Lists every location an asset is referenced — its primary file system and each secondary reference (reviewer, submission, public), grouped and counted. Renaming an asset retitles it at every one of these locations, and deleting its last primary reference removes them all — so this is what the rename and delete confirmations show the user before either happens. |
| `getCustomThumbnailUploadUrl()` | (`assetId`, `data`) => `Promise`\<\{ `assetId`: `string`; `expires`: `number`; `fileName`: `string`; `key`: `string`; `mimeType`: `string`; `status`: `string`; `uploadId`: `string`; `urls`: `string`[]; \}\> | Mint signed multipart upload URLs for a user-supplied custom thumbnail image. Once the upload is completed, background processing generates the custom-thumbnail outputs and attaches them to the asset; the `assetFileUpdate` websocket event fires when they are ready. Caller flow: 1. multipartUpload(file, response.urls, response.key, response.uploadId) 2. completeCustomThumbnailUpload({ assetId, key, uploadId, parts }) 3. wait for the assetFileUpdate websocket event |
| `getDocumentViewUrl()` | (`assetId`) => `Promise`\<[`DocumentViewUrlResponse`](#documentviewurlresponse)\> | Mints a short-lived signed URL for rendering a document inline. A document's `media` PDF is kept in private storage, so unlike images and video it cannot be addressed by keyPath through the public file URL. Fetch this each time a document is opened; do not cache it past `expires`. |
| `getFile()` | (`assetId`, `fileId`) => `Promise`\<`File`\> | Retrieves a specific file from an asset. |
| `getFilesByFunctionType()` | (`assetId`, `functionType`) => `Promise`\<`File`[]\> | Retrieves files of a specific function type from an asset. |
| `getPublicLinks()` | (`assetId`, `options?`) => `Promise`\<\{ `results`: [`PublicAssetLink`](#publicassetlink)[]; \}\> | Get all public download links for an asset. |
| `getUploadSession()` | (`projectId`, `sessionId`) => `UploadSessionData` \| `null` | Get a specific upload session |
| `getUploadSessions()` | (`projectId`) => `UploadSessionData`[] | Get all active upload sessions for a project |
| `hasActiveUploads()` | (`staleMs?`) => `boolean` | True when any upload is genuinely in flight anywhere in the app (across all projects and tabs). Intended for app-level guards — e.g. suppressing an automatic version-update page refresh while bytes are still uploading. Stale (crashed-tab) sessions are ignored via the freshness window. |
| `multipartUpload()` | ( `file`, `signedUrls`, `key`, `uploadId`, `options?` ) => `Promise`\<[`MultipartUploadResult`](#multipartuploadresult)\> | Uploads a file using multipart upload with the provided signed URLs |
| `offUploadSessionMessage()` | (`listenerId`) => `void` | Unregister a cross-tab upload session message listener |
| `onUploadSessionMessage()` | (`listenerId`, `callback`) => `void` | Register a listener for cross-tab upload session messages |
| `promoteAttachmentToProject()` | (`assetId`, `payload`) => `Promise`\<\{ `asset`: `Asset`; `deduped`: `boolean`; \}\> | Promote a chat-message attachment into a project as a fresh, independent project asset. The source attachment is left untouched; the new project asset has its own lifecycle, post-processing pipeline, and storage footprint. Idempotent: a second promote of the same source into the same project returns the existing promoted asset with `deduped: true`. Requires `canCreateAsset` on the destination project — reviewers are blocked. The server additionally rejects when the source attachment's workspace doesn't match the destination project's. |
| `reactivatePublicLink()` | ( `assetId`, `linkId`, `data?` ) => `Promise`\<[`PublicAssetLink`](#publicassetlink)\> | Reactivate a disabled/expired public download link. |
| `recordAccessActivity()` | (`assetId`, `body`) => `Promise`\<`void`\> | Record an authenticated play event from the in-app player. Fire-and-forget; server returns 204. Throw-on-failure is fine because the caller already de-dupes per session. |
| `removeCustomThumbnail()` | (`assetId`) => `Promise`\<`Asset`\> | Remove the custom thumbnail from an asset. Soft-deletes all custom thumb files; the asset falls back to the auto-generated thumbnail. |
| `removeUploadSession()` | (`projectId`, `sessionId`) => `void` | Remove an upload session |
| `repairAssets()` | (`assetIds`) => `Promise`\<[`RepairAssetsResponse`](#repairassetsresponse)\> | Attempts to repair assets (e.g., regenerate signed URLs for pending uploads). |
| `tagAsset()` | (`assetId`, `tagData`) => `Promise`\<[`AssetWithChats`](#assetwithchats)\> | Tags an asset with a specific tag. |
| `untagAsset()` | (`assetId`, `untagData`) => `Promise`\<[`AssetWithChats`](#assetwithchats)\> | Untags an asset by removing a specific tag. |
| `updateAsset()` | (`assetId`, `updateData`) => `Promise`\<[`AssetWithChats`](#assetwithchats)\> | Updates an asset. |
| `updatePublicLink()` | ( `assetId`, `linkId`, `data` ) => `Promise`\<[`PublicAssetLink`](#publicassetlink)\> | Update a public download link (extend expiration or change status). |
