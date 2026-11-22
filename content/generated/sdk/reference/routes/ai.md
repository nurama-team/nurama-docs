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

### ConvoAiRequest

Which convo, and the workspace (and project) it is in — who pays, and whose AI settings apply.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="convoid"></a> `convoId` | `string` | - |
| <a id="projectid-1"></a> `projectId?` | `string` | Required for task suggestions; when given it must be the convo's own project. |
| <a id="regenerate"></a> `regenerate?` | `boolean` | Make a new one even though one is already kept on the convo. Billed again. |
| <a id="workspaceid-1"></a> `workspaceId` | `string` | - |

***

### CreateRevisionSourceUploadRequest

Source-upload mint request. Returns a multipart upload bundle the
FE drives like any other scratch / asset upload (PUT each `urls[i]`
with the corresponding part, collect the ETags, call complete-
upload). Server hardcodes mime to `image/jpeg` — the only producer
is the captured video frame, which is always JPEG. Size cap
(matches OpenAI's images/edits per-image limit): 25 MB.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assetid"></a> `assetId?` | `string` | Audit-only lineage — the originating asset id. |
| <a id="projectid-2"></a> `projectId?` | `string` | - |
| <a id="sizeinmb"></a> `sizeInMB` | `number` | - |
| <a id="workspaceid-2"></a> `workspaceId` | `string` | - |

***

### CreateRevisionSourceUploadResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="expires"></a> `expires` | `string` | ISO-string TTL — the row is reaped after this. |
| <a id="key"></a> `key` | `string` | Bucket-side keyPath. Pass to `nuramaClient.asset.multipartUpload` which threads it through into its session-progress + result shape. |
| <a id="scratchid"></a> `scratchId` | `string` | Use as `source.scratchId` on the subsequent `generateRevision` call. |
| <a id="uploadid"></a> `uploadId` | `string` | Pass back to `POST /v1/scratch/:id/complete-upload` along with parts. |
| <a id="urls"></a> `urls` | `string`[] | One signed PUT URL per multipart part. Single-element array for sub-chunk-size payloads (1080p JPEG frames are well under). |

***

### GeneratedTask

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assignedtoid"></a> `assignedToId?` | `string` | The project member the message says the task is for, when it names one unambiguously. |
| <a id="boardid"></a> `boardId?` | `string` | The board this kind of work belongs on, judged from the project's boards. |
| <a id="columnid"></a> `columnId?` | `string` | A column on that board, when one clearly fits. |
| <a id="description"></a> `description` | `string` | - |
| <a id="subject"></a> `subject` | `string` | - |

***

### GenerateImageRevisionRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assetid-1"></a> `assetId?` | `string` | Audit-only — the caller has already resolved the asset's media URL. |
| <a id="jobid"></a> `jobId?` | `string` | Groups all revisions from one modal session. |
| <a id="mask"></a> `mask?` | \{ `dataUrl`: `string`; \} | Optional alpha-channel mask PNG (data URL) matching the source image's dimensions. Transparent pixels mark the edit region; opaque pixels are preserved. When supplied, the server forwards it as OpenAI's top-level `mask` field — NOT as another `references[]` entry — and auto-augments the prompt with a region directive. |
| `mask.dataUrl` | `string` | - |
| <a id="projectid-3"></a> `projectId?` | `string` | - |
| <a id="prompt"></a> `prompt` | `string` | - |
| <a id="references"></a> `references?` | `string`[] | Prior revisions to condition on (public URLs or data URLs). |
| <a id="source"></a> `source` | [`ImageRevisionSource`](#imagerevisionsource) | - |
| <a id="sourceaspect"></a> `sourceAspect?` | `number` | Source image's aspect ratio (width / height). Two effects when set: 1. The server picks the closest OpenAI-supported generation size — landscape, portrait, or square — instead of always generating 1024×1024. Reduces the gap between the model's output aspect and the source aspect before any padding. 2. After generation, the server pads the result with black bars (letterbox/pillarbox) so the final bytes exactly match this aspect. The user gets an output image whose framing matches the input they started from, with the generated content centred and the unfilled edges padded. Omit (or pass `1.0`) for legacy square output. |
| <a id="workspaceid-3"></a> `workspaceId` | `string` | - |

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
| <a id="revisionid"></a> `revisionId` | `string` | Scratch id. The FE forwards this in one of two outcomes: - "Upload to project" → call `promoteRevision` (this SDK module) to materialise as a project-scoped Asset. - "Attach to chat" → pass `{ scratchId }` as a chat-message attachment item; the chat-send endpoint promotes it to a chat-scoped Asset at send time. |
| <a id="revisionurl"></a> `revisionUrl` | `string` \| `null` | Public URL the FE can render directly. |

***

### GenerateTasksRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="contextmessages"></a> `contextMessages?` | [`TaskGenerationContextMessage`](#taskgenerationcontextmessage)[] | Preceding chat messages (oldest first) to give the model conversational lead-in. Server caps at 10 messages and trims long content per-message; the focal `messageText` is the actual instruction. |
| <a id="messageid"></a> `messageId?` | `string` | Optional source chat message id — reserved for future audit linking. |
| <a id="messagetext"></a> `messageText` | `string` | - |
| <a id="projectid-4"></a> `projectId` | `string` | - |
| <a id="visibility"></a> `visibility?` | `"creator"` \| `"reviewer"` | The side of the project the caller is working on: whose members a task may come back assigned to. Defaults to `creator`. |
| <a id="workspaceid-4"></a> `workspaceId` | `string` | - |

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
| <a id="projectid-5"></a> `projectId?` | `string` |
| <a id="text-2"></a> `text` | `string` |
| <a id="toneid"></a> `toneId` | `string` |
| <a id="workspaceid-5"></a> `workspaceId` | `string` |

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
| <a id="projectid-6"></a> `projectId?` | `string` | - |
| <a id="rating"></a> `rating` | `"positive"` \| `"negative"` | - |
| <a id="surface"></a> `surface` | `"chat"` \| `"assist"` | Which AI surface produced the reply — the two are tuned separately. |
| <a id="workspaceid-6"></a> `workspaceId?` | `string` | - |

***

### SuggestConvoTasksResponse

#### Extends

- `ConvoAiBilling`

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="balanceafter-4"></a> `balanceAfter` | `number` \| `null` | - | `ConvoAiBilling.balanceAfter` |
| <a id="billedcredits-4"></a> `billedCredits` | `number` | - | `ConvoAiBilling.billedCredits` |
| <a id="generated"></a> `generated` | `boolean` | False when a result already kept on the convo was returned; nothing was billed. | `ConvoAiBilling.generated` |
| <a id="suggestedtasksgeneratedat"></a> `suggestedTasksGeneratedAt` | `number` | Epoch ms. | - |
| <a id="tasks-1"></a> `tasks` | [`GeneratedTask`](#generatedtask)[] | - | - |

***

### SummarizeConvoResponse

#### Extends

- `ConvoAiBilling`

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="balanceafter-5"></a> `balanceAfter` | `number` \| `null` | - | `ConvoAiBilling.balanceAfter` |
| <a id="billedcredits-5"></a> `billedCredits` | `number` | - | `ConvoAiBilling.billedCredits` |
| <a id="generated-1"></a> `generated` | `boolean` | False when a result already kept on the convo was returned; nothing was billed. | `ConvoAiBilling.generated` |
| <a id="summary"></a> `summary` | `string` | - | - |
| <a id="summarygeneratedat"></a> `summaryGeneratedAt` | `number` | Epoch ms. | - |

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
  - `scratchId` — id of a Scratch row the FE uploaded via
                  `createRevisionSourceUpload`. Preferred for
                  captured video frames so bytes never transit the
                  API node.
  - `dataUrl`   — DEPRECATED legacy path: FE-captured video frame
                  serialised as a base64 data URL inline in the
                  request body. Kept here for back-compat during
                  FE rollout; new code should always use the
                  `scratchId` flow.

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
  suggestConvoTasks: Promise<SuggestConvoTasksResponse>;
  summarizeConvo: Promise<SummarizeConvoResponse>;
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
| `generateRevision()` | (`data`) => `Promise`\<[`GenerateImageRevisionResponse`](#generateimagerevisionresponse)\> | Generate one image revision (prompt-driven variant of a source image or video frame). The result is staged on Scratch — the FE then chooses one of two outcomes: - "Add to project" → call `nuramaClient.scratch.promote(id)` to create a project-scoped Asset immediately. - "Attach to chat" → leave the scratch id in the chat composer's pending attachments; the chat-send endpoint accepts `{ scratchId, name? }` items in `attachments[]` and promotes each to a chat-scoped Asset at send time. |
| `generateTasks()` | (`data`) => `Promise`\<[`GenerateTasksResponse`](#generatetasksresponse)\> | Convert a chat message into one or more board-task drafts. The frontend opens the EnhancedTaskCreatorModal in a loading state, calls this method, and seeds the modal's draft list from the response's `tasks` array. Requires both the AI add-on AND the Boards add-on on the workspace; the server returns `productNotActive` if either is missing. |
| `listTones()` | () => `Promise`\<[`ListTonesResponse`](#listtonesresponse)\> | Returns the catalogue of polish tones the platform supports. The FE uses this to populate the tone dropdown without hard-coding the IDs. |
| `polish()` | (`data`) => `Promise`\<[`PolishResponse`](#polishresponse)\> | - |
| `submitFeedback()` | (`data`) => `Promise`\<\{ `id`: `string`; \}\> | Record a thumbs-up / thumbs-down on one assistant reply. `chatId` is required because it is what the server authorises against — a user can only rate a reply in a chat they can already read — and it is what the stored transcript snapshot is built from. |
| `suggestConvoTasks()` | (`data`) => `Promise`\<[`SuggestConvoTasksResponse`](#suggestconvotasksresponse)\> | Suggest board tasks from a convo's transcript. Proposals only — create the ones wanted with `task.bulkCreate`. Kept on the convo, so a second call returns them without billing; pass `regenerate` for new ones. Requires the Boards add-on as well as AI, and a convo in a project. |
| `summarizeConvo()` | (`data`) => `Promise`\<[`SummarizeConvoResponse`](#summarizeconvoresponse)\> | Summarise a convo from its transcript. The summary is kept on the convo, so a second call returns it without billing; pass `regenerate` for a new one. The convo must be in `workspaceId`, and the caller able to see it. |
