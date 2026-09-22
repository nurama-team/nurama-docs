[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/scratch

# routes/scratch

## Interfaces

### CompleteUploadBody

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="parts"></a> `parts` | \{ `ETag`: `string`; `PartNumber`: `number`; \}[] |
| <a id="uploadid"></a> `uploadId` | `string` |

***

### CompleteUploadResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="id"></a> `id` | `string` |
| <a id="url"></a> `url` | `string` \| `null` |

***

### PromoteBody

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="filename"></a> `fileName?` | `string` | Optional rename — lands on `Asset.name`. Defaults to a row-id-derived name. |

***

### PromoteResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alreadypromoted"></a> `alreadyPromoted` | `boolean` | `true` when the scratch upload was already promoted on a prior call (e.g. the same revision was attached to a chat message earlier, which promoted it at send time). The returned `asset` is the existing one. Callers should treat this as a no-op for "newly added" UX (toast copy, list-refresh side effects) while still surfacing the asset. |
| <a id="asset"></a> `asset` | `unknown` | - |

## Functions

### default()

```ts
function default(client): {
  completeUpload: Promise<CompleteUploadResponse>;
  promote: Promise<PromoteResponse>;
};
```

Scratch — platform-wide temporary storage with an explicit lifecycle.

There is NO public surface for creating scratch uploads or minting
upload URLs. Parent features (e.g. AI Revision) initiate the
multipart upload server-side and return the
`{ scratchId, uploadId, key, urls[] }` bundle in their own response
payload. The caller uploads each part directly against its signed URL
(same pattern as asset uploads), then calls `completeUpload` here to
finalise.

`completeUpload` mirrors `nuramaClient.asset.completeUpload`: the
body is the same `{ uploadId, parts }` shape. For scratch uploads the
server additionally counts the finished object's size against
workspace storage usage and records the upload in the audit log.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `completeUpload()` | (`scratchId`, `data`) => `Promise`\<[`CompleteUploadResponse`](#completeuploadresponse)\> | Finish a multipart upload for a scratch upload. Same `{ uploadId, parts }` body the asset complete-upload route accepts. The server finalises the object in storage, counts its size against workspace storage usage, records the audit entry, and moves the scratch status from pendingUpload to active. Creator-only. |
| `promote()` | (`scratchId`, `data?`) => `Promise`\<[`PromoteResponse`](#promoteresponse)\> | Promote a scratch upload to a real Asset. Creator-only — only the user who created the scratch upload can call this. Destination is derived server-side from the scratch upload itself: - it has a `projectId` → asset created in that project - it has only a workspace → asset created at the workspace The destination cannot be overridden in the body: a scratch upload always lands in the workspace / project it was created for. The only optional input is `fileName` to override the asset's user-facing name. |
