[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/convo

# routes/convo

## Functions

### default()

```ts
function default(client): {
  completeConvo: Promise<CompleteConvoResponse>;
  deleteConvo: Promise<void>;
  getChatConvos: Promise<Convo[]>;
  getConvo: Promise<GetConvoResponse>;
  getProjectConvos: Promise<Convo[]>;
  getScopeConvos: Promise<GetScopeConvosResponse>;
  joinConvo: Promise<JoinConvoResponse>;
  leaveConvo: Promise<LeaveConvoResponse>;
  rejoinConvo: Promise<JoinConvoResponse>;
  startConvo: Promise<StartConvoResponse>;
  updateConvo: Promise<UpdateConvoResponse>;
};
```

Defines convo (video/audio chat) related methods for the NuramaClient.
Handles starting, joining, and managing real-time conversations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the convo-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `completeConvo()` | (`convoId`) => `Promise`\<`CompleteConvoResponse`\> | Mark a conversation as complete. Ends the conversation and triggers recording/transcript processing if enabled. Requires authentication and permission to complete the conversation. **Example** `const result = await client.convo.completeConvo('507f1f77bcf86cd799439011');` |
| `deleteConvo()` | (`convoId`) => `Promise`\<`void`\> | Delete/cancel a conversation. Only the creator can delete a conversation. Requires authentication and permission to delete the conversation. **Example** `await client.convo.deleteConvo('507f1f77bcf86cd799439011');` |
| `getChatConvos()` | (`chatId`, `params?`) => `Promise`\<`Convo`[]\> | List the convos that have taken place in a chat, newest first. Requires read access to the chat. |
| `getConvo()` | (`convoId`) => `Promise`\<`GetConvoResponse`\> | Get a specific conversation by ID. Requires authentication and permission to view the conversation. **Example** `const result = await client.convo.getConvo('507f1f77bcf86cd799439011');` |
| `getProjectConvos()` | (`projectId`, `params?`) => `Promise`\<`Convo`[]\> | List every convo across all chats in a project (the "Convos drawer"), newest first. Requires `canGetProject` on the project. |
| `getScopeConvos()` | (`scopeId`, `params`) => `Promise`\<`GetScopeConvosResponse`\> | Get conversations for a scope (project). Returns paginated list of conversations with cursor-based pagination. Active conversations are returned first. Requires authentication and permission to view conversations. **Example** `const result = await client.convo.getScopeConvos('507f1f77bcf86cd799439011', { visibility: ['creator', 'reviewer'], status: 'active', limit: 20 });` |
| `joinConvo()` | (`convoId`) => `Promise`\<`JoinConvoResponse`\> | Join an active conversation. Returns the conversation details and a Daily.co meeting token for the user. Requires authentication and permission to join the conversation. **Example** `const result = await client.convo.joinConvo('507f1f77bcf86cd799439011'); // Use result.token to join the Daily.co call // Use result.convo.dailyRoomUrl as the room URL` |
| `leaveConvo()` | (`convoId`) => `Promise`\<`LeaveConvoResponse`\> | Leave an active conversation. Removes the user from the active participants list. Requires authentication. **Example** `const result = await client.convo.leaveConvo('507f1f77bcf86cd799439011');` |
| `rejoinConvo()` | (`convoId`) => `Promise`\<`JoinConvoResponse`\> | Rejoin an active conversation (page refresh / reconnect). Only returns a new meeting token if the user is already an active participant. No notifications are sent. |
| `startConvo()` | (`data`) => `Promise`\<`StartConvoResponse`\> | Start a new conversation (video or audio). Requires authentication. **Example** `const result = await client.convo.startConvo({ chatId: '507f1f77bcf86cd799439011', chatType: 'chat', convoType: 'video' });` |
| `updateConvo()` | (`convoId`, `data`) => `Promise`\<`UpdateConvoResponse`\> | Update a conversation's subject and/or description. Only the conversation starter can update these fields. Requires authentication. **Example** `const result = await client.convo.updateConvo('507f1f77bcf86cd799439011', { subject: 'Weekly Team Sync', description: 'Discussing project updates and roadmap' });` |
