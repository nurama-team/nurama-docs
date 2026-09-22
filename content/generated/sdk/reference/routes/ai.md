[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/ai

# routes/ai

## Interfaces

### ComposeWithNuRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="chatid"></a> `chatId` | `string` | Chat being composed into. Read server-side for context and tone. |
| <a id="messages"></a> `messages` | [`ComposeWithNuTurn`](#composewithnuturn)[] | - |
| <a id="projectid"></a> `projectId?` | `string` | - |
| <a id="workspaceid"></a> `workspaceId` | `string` | - |

***

### ComposeWithNuResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="balanceafter"></a> `balanceAfter` | `number` \| `null` | - |
| <a id="billedcredits"></a> `billedCredits` | `number` | - |
| <a id="eventid"></a> `eventId` | `string` \| `null` | - |
| <a id="proposal"></a> `proposal` | `string` \| `null` | Wording the user may put in their composer, or null for a pure question. |
| <a id="text"></a> `text` | `string` | What Nu said to the user. Never posted anywhere. |

***

### ComposeWithNuTurn

One turn of the drafting conversation, as sent back on each request.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="proposal-1"></a> `proposal?` | `string` \| `null` | Wording this turn offered. Held per turn so an earlier draft stays takeable after the conversation has moved on — the user may prefer the version from three turns ago. |
| <a id="role"></a> `role` | `"user"` \| `"assistant"` | - |
| <a id="text-1"></a> `text` | `string` | - |

***

### CreateRevisionSourceUploadRequest

Source-upload mint request. Returns a multipart upload bundle that
the caller drives like any other scratch / asset upload (PUT each
`urls[i]` with the corresponding part, collect the ETags, then call
`nuramaClient.scratch.completeUpload`). The server always records
the upload as `image/jpeg` — the only supported source is a captured
video frame, which is always JPEG. Size cap: 25 MB (the image
provider's per-image limit).

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assetid"></a> `assetId?` | `string` | Audit-only lineage — the originating asset id. |
| <a id="projectid-1"></a> `projectId?` | `string` | - |
| <a id="sizeinmb"></a> `sizeInMB` | `number` | - |
| <a id="workspaceid-1"></a> `workspaceId` | `string` | - |

***

### CreateRevisionSourceUploadResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="expires"></a> `expires` | `string` | ISO timestamp. The scratch upload expires and is removed after this. |
| <a id="key"></a> `key` | `string` | Storage key for the upload. Pass to `nuramaClient.asset.multipartUpload`, which echoes it in its progress and result shapes. |
| <a id="scratchid"></a> `scratchId` | `string` | Use as `source.scratchId` on the subsequent `generateRevision` call. |
| <a id="uploadid"></a> `uploadId` | `string` | Pass to `nuramaClient.scratch.completeUpload` along with the parts. |
| <a id="urls"></a> `urls` | `string`[] | One signed PUT URL per multipart part. Single-element array for sub-chunk-size payloads (1080p JPEG frames are well under). |

***

### GeneratedTask

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="description"></a> `description` | `string` |
| <a id="subject"></a> `subject` | `string` |

***

### GenerateImageRevisionRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assetid-1"></a> `assetId?` | `string` | Audit-only — the caller has already resolved the asset's media URL. |
| <a id="jobid"></a> `jobId?` | `string` | Groups all revisions from one modal session. |
| <a id="mask"></a> `mask?` | \{ `dataUrl`: `string`; \} | Optional alpha-channel mask PNG (data URL) matching the source image's dimensions. Transparent pixels mark the edit region; opaque pixels are preserved. When supplied, the server forwards it as OpenAI's top-level `mask` field — NOT as another `references[]` entry — and auto-augments the prompt with a region directive. |
| `mask.dataUrl` | `string` | - |
| <a id="projectid-2"></a> `projectId?` | `string` | - |
| <a id="prompt"></a> `prompt` | `string` | - |
| <a id="references"></a> `references?` | `string`[] | Prior revisions to condition on (public URLs or data URLs). |
| <a id="source"></a> `source` | [`ImageRevisionSource`](#imagerevisionsource) | - |
| <a id="sourceaspect"></a> `sourceAspect?` | `number` | Source image's aspect ratio (width / height). Two effects when set: 1. The server picks the closest OpenAI-supported generation size — landscape, portrait, or square — instead of always generating 1024×1024. Reduces the gap between the model's output aspect and the source aspect before any padding. 2. After generation, the server pads the result with black bars (letterbox/pillarbox) so the final bytes exactly match this aspect. The user gets an output image whose framing matches the input they started from, with the generated content centred and the unfilled edges padded. Omit (or pass `1.0`) for legacy square output. |
| <a id="workspaceid-2"></a> `workspaceId` | `string` | - |

***

### GenerateImageRevisionResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="balanceafter-1"></a> `balanceAfter` | `number` \| `null` | - |
| <a id="billedcredits-1"></a> `billedCredits` | `number` | - |
| <a id="eventid-1"></a> `eventId` | `string` \| `null` | - |
| <a id="model"></a> `model` | `string` | - |
| <a id="quality"></a> `quality` | `string` | - |
| <a id="revisionid"></a> `revisionId` | `string` | Scratch id of the generated revision. Use it in one of two ways: - "Upload to project" → call `nuramaClient.scratch.promote(id)` to materialise it as a project-scoped Asset. - "Attach to chat" → pass `{ scratchId }` as a chat-message attachment item; the chat-send endpoint promotes it to a chat-scoped Asset at send time. |
| <a id="revisionurl"></a> `revisionUrl` | `string` \| `null` | Public URL of the revision, ready to render directly. |

***

### GenerateTasksRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="contextmessages"></a> `contextMessages?` | [`TaskGenerationContextMessage`](#taskgenerationcontextmessage)[] | Preceding chat messages (oldest first) to give the model conversational lead-in. Server caps at 10 messages and trims long content per-message; the focal `messageText` is the actual instruction. |
| <a id="messageid"></a> `messageId?` | `string` | Optional source chat message id — reserved for future audit linking. |
| <a id="messagetext"></a> `messageText` | `string` | - |
| <a id="projectid-3"></a> `projectId` | `string` | - |
| <a id="workspaceid-3"></a> `workspaceId` | `string` | - |

***

### GenerateTasksResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="balanceafter-2"></a> `balanceAfter` | `number` |
| <a id="billedcredits-2"></a> `billedCredits` | `number` |
| <a id="eventid-2"></a> `eventId` | `string` \| `null` |
| <a id="tasks"></a> `tasks` | [`GeneratedTask`](#generatedtask)[] |

***

### ListTonesResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tones"></a> `tones` | [`ToneEntry`](#toneentry)[] |

***

### PolishRequest

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="projectid-4"></a> `projectId?` | `string` |
| <a id="text-2"></a> `text` | `string` |
| <a id="toneid"></a> `toneId` | `string` |
| <a id="workspaceid-4"></a> `workspaceId` | `string` |

***

### PolishResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="balanceafter-3"></a> `balanceAfter` | `number` |
| <a id="billedcredits-3"></a> `billedCredits` | `number` |
| <a id="eventid-3"></a> `eventId` | `string` \| `null` |
| <a id="polishedtext"></a> `polishedText` | `string` |

***

### SubmitAiFeedbackRequest

One Nu Feedback submission.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="chatid-1"></a> `chatId` | `string` | - |
| <a id="contextitems"></a> `contextItems?` | `Record`\<`string`, `unknown`\>[] | - |
| <a id="messageid-1"></a> `messageId?` | `string` | - |
| <a id="notes"></a> `notes?` | `string` | The user's own words on what worked or didn't. Optional. |
| <a id="pagecontext"></a> `pageContext?` | `Record`\<`string`, `unknown`\> | Extras the client already holds, folded into the stored snapshot. |
| <a id="projectid-5"></a> `projectId?` | `string` | - |
| <a id="rating"></a> `rating` | `"positive"` \| `"negative"` | - |
| <a id="surface"></a> `surface` | `"chat"` \| `"assist"` | Which AI surface produced the reply — the two are tuned separately. |
| <a id="workspaceid-5"></a> `workspaceId?` | `string` | - |

***

### TaskGenerationContextMessage

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="authorname"></a> `authorName?` | `string` | Display name of the message author. Optional but improves the prompt. |
| <a id="content"></a> `content` | `string` | - |

***

### ToneEntry

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="id"></a> `id` | `string` |
| <a id="label"></a> `label` | `string` |

## Type Aliases

### ImageRevisionSource

```ts
type ImageRevisionSource = 
  | {
  url: string;
}
  | {
  scratchId: string;
}
  | {
  dataUrl: string;
};
```

Source for an image revision call. Exactly one of:
  - `url`       — public media URL (typical for image assets).
  - `scratchId` — id of a scratch upload created via
                  `createRevisionSourceUpload`. Preferred for
                  captured video frames: the bytes go straight to
                  storage instead of through the request body.
  - `dataUrl`   — DEPRECATED: a captured video frame serialised as
                  a base64 data URL inline in the request body. Kept
                  for backward compatibility only; new code should
                  always use the `scratchId` flow.

## Functions

### default()

```ts
function default(client): {
  composeWithNu: Promise<ComposeWithNuResponse>;
  createRevisionSourceUpload: Promise<CreateRevisionSourceUploadResponse>;
  generateRevision: Promise<GenerateImageRevisionResponse>;
  generateTasks: Promise<GenerateTasksResponse>;
  listTones: Promise<ListTonesResponse>;
  polish: Promise<PolishResponse>;
  submitFeedback: Promise<{
     id: string;
  }>;
};
```

Methods for the Nu AI assistant integration points.

Nu is the platform-native AI feature set. Each integration point is gated
by workspace settings (`allowAiFeatures` master switch + per-feature toggle
+ role allowlist) and metered against the workspace's credit balance.

MVP exposes a single integration point — Polish — used by the chat
composer to rewrite a draft message in a selected tone.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `composeWithNu()` | (`data`) => `Promise`\<[`ComposeWithNuResponse`](#composewithnuresponse)\> | One turn of a Compose-with-Nu drafting conversation. Send only the drafting thread — the chat being written into is read server-side from `chatId`, under the caller's own permissions. The result is Nu's commentary plus, when it has one, a proposed message. Nothing is posted: the proposal is the user's to take or discard. |
| `createRevisionSourceUpload()` | (`data`) => `Promise`\<[`CreateRevisionSourceUploadResponse`](#createrevisionsourceuploadresponse)\> | Mint a signed-URL bundle for uploading a source image (typically a captured video frame) into Scratch BEFORE calling `generateRevision`. Use the resulting `scratchId` as the `source.scratchId` on the generate call. Why this exists: video frames are captured client-side and need to reach OpenAI as a public media URL. Posting the bytes inline (as `dataUrl`) makes the API node a pass-through for multi-MB payloads; staging on Scratch first keeps the node out of the byte path entirely. |
| `generateRevision()` | (`data`) => `Promise`\<[`GenerateImageRevisionResponse`](#generateimagerevisionresponse)\> | Generate one image revision (prompt-driven variant of a source image or video frame). The result is staged as a scratch upload — the caller then chooses one of two outcomes: - "Add to project" → call `nuramaClient.scratch.promote(id)` to create a project-scoped Asset immediately. - "Attach to chat" → pass `{ scratchId, name? }` as an item in the chat message's `attachments[]`; the server promotes each one to a chat-scoped Asset at send time. |
| `generateTasks()` | (`data`) => `Promise`\<[`GenerateTasksResponse`](#generatetasksresponse)\> | Convert a chat message into one or more board-task drafts. The response's `tasks` array holds the drafts for the user to review and edit before creating them (for example with `nuramaClient.task.bulkCreate`). Requires both the AI add-on AND the Boards add-on on the workspace; the server returns `productNotActive` if either is missing. |
| `listTones()` | () => `Promise`\<[`ListTonesResponse`](#listtonesresponse)\> | Returns the catalogue of polish tones the platform supports. Use it to populate a tone picker instead of hard-coding the ids. |
| `polish()` | (`data`) => `Promise`\<[`PolishResponse`](#polishresponse)\> | - |
| `submitFeedback()` | (`data`) => `Promise`\<\{ `id`: `string`; \}\> | Record a thumbs-up / thumbs-down on one assistant reply. `chatId` is required because it is what the server authorises against — a user can only rate a reply in a chat they can already read — and it is what the stored transcript snapshot is built from. |
