[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/supportChat

# routes/supportChat

## Functions

### default()

```ts
function default(client): {
  createAttachment: Promise<SupportChatCreateAttachmentResponse>;
  getTopic: Promise<SupportChatGetTopicResponse>;
};
```

Nurama Support chat — one topic per user on the `/news` page.

The surface is intentionally tiny: one endpoint that lazily creates
the user's support topic on first call and returns the existing row
on every subsequent call. There is no list / archive / delete — each
user has exactly one support conversation that persists across visits.

Messages flow through the regular chat endpoints on
`nuramaClient.chat`:

  - send: `nuramaClient.chat.createMessage(topic.chatId, { content })`
  - list: `nuramaClient.chat.getMessages(topic.chatId, …)`

Backend gates: `auth → requireGlobalSupportChatEnabled → supportChatLimiter`.
Unmetered (no credit deduction) — abuse is bounded by the per-user
per-day rate limiter, not a credit balance check.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createAttachment()` | (`data`) => `Promise`\<`SupportChatCreateAttachmentResponse`\> | Mint a Scratch upload bundle for one image attachment. The bytes land in a Scratch row with a 72-hour TTL and are read by the orchestrator's vision pass on the next user message — never promoted to a permanent Asset. Same upload protocol as every other multipart upload on the platform: call this, multipart-upload the bytes to `urls`, then call `nuramaClient.scratch.completeUpload(scratchId, { uploadId, parts })`. Send the message with `attachments: [{ scratchId, name }]`. |
| `getTopic()` | () => `Promise`\<`SupportChatGetTopicResponse`\> | Get-or-create the caller's Support topic. Idempotent: re-calling returns the same row, so this is safe to invoke on every page mount. |
