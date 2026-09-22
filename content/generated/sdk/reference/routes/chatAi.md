[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/chatAi

# routes/chatAi

## Functions

### default()

```ts
function default(client): {
  createTopic: Promise<AiChatCreateTopicResponse>;
  deleteTopic: Promise<AiChatGetTopicResponse>;
  getTopic: Promise<AiChatGetTopicResponse>;
  listTopics: Promise<AiChatListTopicsResponse>;
  updateTopic: Promise<AiChatGetTopicResponse>;
};
```

Topic-CRUD methods for AI chat. Message send + list happens through
the regular chat endpoints on `nuramaClient.chat`:

  - send:  `nuramaClient.chat.createMessage(topic.chatId, …)`
  - list:  `nuramaClient.chat.getMessages(topic.chatId, …)`

When a message is sent to a chat whose `chatType` is `'ai'`, the server
generates the AI reply after storing the message, so attachments,
mentions, link previews and notifications behave exactly as in every
other chat.

Each topic is private to its creator. Topic scope is one of:
  - 'workspace' → cross-project chat in the workspace
  - 'project'   → bound to a single project
  - 'social'    → personal chat with no resource backing

All endpoints below require:
  - workspace AI add-on subscription
  - `aiChatEnabled` resolved true (workspace setting + project override)
  - caller has project / workspace read access for scoped topics

Credit-balance gating happens server-side on the regular chat
`createMessage` path when the target chat is an AI chat.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createTopic()` | (`data`) => `Promise`\<`AiChatCreateTopicResponse`\> | Create a new (empty) topic. After this resolves, send the first message through `nuramaClient.chat.createMessage(topic.chatId, …)`. |
| `deleteTopic()` | (`topicId`, `params`) => `Promise`\<`AiChatGetTopicResponse`\> | Soft-delete a topic. The topic, its chat and every attachment asset in that chat are marked `pendingDelete` and cleaned up by background processing. The caller can drop the topic from their local list immediately — there is no "undo" for this. |
| `getTopic()` | (`topicId`, `params`) => `Promise`\<`AiChatGetTopicResponse`\> | - |
| `listTopics()` | (`params`) => `Promise`\<`AiChatListTopicsResponse`\> | List the caller's topics for a scope (workspace, project, or social). |
| `updateTopic()` | (`topicId`, `data`) => `Promise`\<`AiChatGetTopicResponse`\> | - |
