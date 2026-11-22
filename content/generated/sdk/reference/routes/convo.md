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
  getConvoArtifactPlayback: Promise<ConvoArtifactPlaybackResponse>;
  getConvoMentions: Promise<ConvoMentionsResponse>;
  getConvoTasks: Promise<ConvoTasksResponse>;
  getMyConvos: Promise<GetMyConvosResponse>;
  getProjectConvos: Promise<Convo[]>;
  getScopeConvos: Promise<GetScopeConvosResponse>;
  joinConvo: Promise<JoinConvoResponse>;
  leaveConvo: Promise<LeaveConvoResponse>;
  promoteConvoArtifact: Promise<PromoteConvoArtifactResponse>;
  rejoinConvo: Promise<JoinConvoResponse>;
  removeConvoMention: Promise<ConvoMentionsResponse>;
  sendConvoMentions: Promise<SendConvoMentionsResponse>;
  startConvo: Promise<StartConvoResponse>;
  updateConvo: Promise<UpdateConvoResponse>;
  updateConvoMentions: Promise<ConvoMentionsResponse>;
  updateConvoSummary: Promise<UpdateConvoSummaryResponse>;
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
| `getConvoArtifactPlayback()` | ( `convoId`, `kind`, `dailyId` ) => `Promise`\<`ConvoArtifactPlaybackResponse`\> | Get what is needed to play a convo recording or show a transcript. A recording answers with a short-lived signed `url`; a transcript answers with its `content` inline, cue timings included. Open to anyone who can see the convo. Nothing is created — to keep an artifact as an asset, use `promoteConvoArtifact`. **Example** `const { url } = await client.convo.getConvoArtifactPlayback(convoId, 'recording', rec.dailyId);` |
| `getConvoMentions()` | (`convoId`) => `Promise`\<`ConvoMentionsResponse`\> | The mentions kept on a convo: the people and assets Nu picked out of its transcript, and any added by hand. Only an admin of the convo's project who was on the call may read them. |
| `getConvoTasks()` | (`convoId`) => `Promise`\<`ConvoTasksResponse`\> | List the tasks made from a convo, oldest first. |
| `getMyConvos()` | () => `Promise`\<`GetMyConvosResponse`\> | List the convos the caller can see across all their projects and Team Chats: the ones running now, and the ones that ended within the last hour. Running convos come first. Each carries its `project` and `workspace`. **Example** `const { results } = await client.convo.getMyConvos();` |
| `getProjectConvos()` | (`projectId`, `params?`) => `Promise`\<`Convo`[]\> | List every convo across all chats in a project (the "Convos drawer"), newest first. Requires `canGetProject` on the project. |
| `getScopeConvos()` | (`scopeId`, `params`) => `Promise`\<`GetScopeConvosResponse`\> | - |
| `joinConvo()` | (`convoId`) => `Promise`\<`JoinConvoResponse`\> | Join an active conversation. Returns the conversation details and a Daily.co meeting token for the user. Requires authentication and permission to join the conversation. **Example** `const result = await client.convo.joinConvo('507f1f77bcf86cd799439011'); // Use result.token to join the Daily.co call // Use result.convo.dailyRoomUrl as the room URL` |
| `leaveConvo()` | (`convoId`) => `Promise`\<`LeaveConvoResponse`\> | Leave an active conversation. Removes the user from the active participants list. Requires authentication. **Example** `const result = await client.convo.leaveConvo('507f1f77bcf86cd799439011');` |
| `promoteConvoArtifact()` | ( `convoId`, `kind`, `dailyId`, `data?` ) => `Promise`\<`PromoteConvoArtifactResponse`\> | Promote a convo's recording or transcript to a standalone asset. Additive: the artifact stays bundled with the convo as well, so calling this twice returns the first asset with `alreadyPromoted: true` rather than making a second copy. Only the convo's starter may promote. A transcript is promoted as a text document built from the transcript text, not the raw .vtt. **Example** `const { asset } = await client.convo.promoteConvoArtifact(convoId, 'recording', rec.dailyId);` |
| `rejoinConvo()` | (`convoId`) => `Promise`\<`JoinConvoResponse`\> | Rejoin an active conversation (page refresh / reconnect). Only returns a new meeting token if the user is already an active participant. No notifications are sent. |
| `removeConvoMention()` | ( `convoId`, `kind`, `targetId` ) => `Promise`\<`ConvoMentionsResponse`\> | Take a sent mention off the convo's message. A person's mention task is deleted with it. |
| `sendConvoMentions()` | (`convoId`) => `Promise`\<`SendConvoMentionsResponse`\> | Send a convo's pending mentions: they are added to the convo's own message in its chat, and each person newly mentioned is told. |
| `startConvo()` | (`data`) => `Promise`\<`StartConvoResponse`\> | Start a new conversation (video or audio). Requires authentication. **Example** `const result = await client.convo.startConvo({ chatId: '507f1f77bcf86cd799439011', chatType: 'chat', convoType: 'video' });` |
| `updateConvo()` | (`convoId`, `data`) => `Promise`\<`UpdateConvoResponse`\> | Update a conversation's subject and/or description. Only the conversation starter can update these fields. Requires authentication. **Example** `const result = await client.convo.updateConvo('507f1f77bcf86cd799439011', { subject: 'Weekly Team Sync', description: 'Discussing project updates and roadmap' });` |
| `updateConvoMentions()` | (`convoId`, `data`) => `Promise`\<`ConvoMentionsResponse`\> | Replace a convo's pending mentions with the given list — suggestions kept, plus anyone or anything added by hand. Sent mentions are untouched. |
| `updateConvoSummary()` | (`convoId`, `summary`) => `Promise`\<`UpdateConvoSummaryResponse`\> | Write or edit a convo's summary by hand. For whoever started the convo and anyone who was on the call; works with AI summaries off. |
