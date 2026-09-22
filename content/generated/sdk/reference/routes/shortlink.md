[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/shortlink

# routes/shortlink

## Interfaces

### PublicDownloadUrlResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="expires"></a> `expires` | `number` |
| <a id="filename"></a> `fileName` | `string` |
| <a id="mimetype"></a> `mimeType` | `string` |
| <a id="url"></a> `url` | `string` |

***

### PublicEmbedFilesResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="filename-1"></a> `fileName` | `string` | - |
| <a id="mediakeypath"></a> `mediaKeyPath` | `string` \| `null` | Original media keyPath used as fallback when no HLS manifest is available. |
| <a id="mediatype"></a> `mediaType` | `string` | - |
| <a id="mode"></a> `mode?` | `"embed"` \| `"embed-download"` | Mode of the underlying public link: 'embed' (no download) or 'embed-download' (download allowed alongside embed). 'download' never appears — that mode blocks the embed-files endpoint entirely. Optional for backward compatibility with older API versions; treat absence as 'embed-download'. |
| <a id="posterkeypath"></a> `posterKeyPath` | `string` \| `null` | Poster image keyPath for video assets (explicit poster, falling back to largest thumbnail). Null when none exists. |
| <a id="streamkeypath"></a> `streamKeyPath` | `string` \| `null` | HLS manifest keyPath (e.g. "workspaces/.../stream/index.m3u8"), null if not yet processed. |
| <a id="waveformkeypath"></a> `waveformKeyPath?` | `string` \| `null` | Pre-computed waveform peaks JSON keyPath for audio assets. Null for video / when no peaks file exists. |

***

### ResolvePublicDownloadResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="filename-2"></a> `fileName` | `string` | - |
| <a id="mediatype-1"></a> `mediaType` | `string` | - |
| <a id="mimetype-1"></a> `mimeType?` | `string` \| `null` | Mime type of the original media file, when known. |
| <a id="mode-1"></a> `mode?` | `"download"` \| `"embed"` \| `"embed-download"` | Capability mode of the link. The download page uses this to decide whether to render the inline preview (`embed-download`), the embed-only message (`embed`), or auto-download (`download`). Optional for backward compatibility with older API versions; treat absence as `embed-download`. |
| <a id="previewkeypath"></a> `previewKeyPath?` | `string` \| `null` | For image assets: the keyPath of the image file, used to render an inline preview on the download page. Null for non-image assets (video / audio previews are iframed from the embed page; files render an icon). |
| <a id="status"></a> `status` | `string` | - |
| <a id="token"></a> `token` | `string` | - |

***

### ResolveShortLinkResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="deeplink"></a> `deepLink` | `string` |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | `"asset"` \| `"project"` \| `"workspace"` \| `"chatMessage"` \| `"chatSubmission"` |
| <a id="visibility"></a> `visibility` | `"creator"` \| `"reviewer"` \| `null` |

## Functions

### default()

```ts
function default(client): {
  resolveShortLink: Promise<ResolveShortLinkResponse>;
};
```

Defines short link related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the short link related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `resolveShortLink()` | (`code`) => `Promise`\<[`ResolveShortLinkResponse`](#resolveshortlinkresponse)\> | Resolves a short link code to its full deep link path. This endpoint is publicly accessible and does not require authentication. |
