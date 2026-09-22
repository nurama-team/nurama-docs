[**@nurama/sdk**](index.md)

***

[@nurama/sdk](index.md) / NuramaClient

# NuramaClient

## Classes

### default

Client interface for interacting with the Nurama REST API.

#### Constructors

##### Constructor

```ts
new default(baseURL, options?): default;
```

Creates an instance of NuramaClient.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseURL` | `string` | The base URL for the Nurama API. |
| `options` | [`NuramaClientOptions`](#nuramaclientoptions) | Configuration options. |

###### Returns

[`default`](#default)

#### Properties

| Property | Modifier | Type | Default value | Description |
| ------ | ------ | ------ | ------ | ------ |
| <a id="ai"></a> `ai` | `public` | \{ `composeWithNu`: `Promise`\<[`ComposeWithNuResponse`](routes/ai.md#composewithnuresponse)\>; `createRevisionSourceUpload`: `Promise`\<[`CreateRevisionSourceUploadResponse`](routes/ai.md#createrevisionsourceuploadresponse)\>; `generateRevision`: `Promise`\<[`GenerateImageRevisionResponse`](routes/ai.md#generateimagerevisionresponse)\>; `generateTasks`: `Promise`\<[`GenerateTasksResponse`](routes/ai.md#generatetasksresponse)\>; `listTones`: `Promise`\<[`ListTonesResponse`](routes/ai.md#listtonesresponse)\>; `polish`: `Promise`\<[`PolishResponse`](routes/ai.md#polishresponse)\>; `submitFeedback`: `Promise`\<\{ `id`: `string`; \}\>; \} | `undefined` | - |
| `ai.composeWithNu` | `public` | `Promise`\<[`ComposeWithNuResponse`](routes/ai.md#composewithnuresponse)\> | `undefined` | - |
| `ai.createRevisionSourceUpload` | `public` | `Promise`\<[`CreateRevisionSourceUploadResponse`](routes/ai.md#createrevisionsourceuploadresponse)\> | `undefined` | - |
| `ai.generateRevision` | `public` | `Promise`\<[`GenerateImageRevisionResponse`](routes/ai.md#generateimagerevisionresponse)\> | `undefined` | - |
| `ai.generateTasks` | `public` | `Promise`\<[`GenerateTasksResponse`](routes/ai.md#generatetasksresponse)\> | `undefined` | - |
| `ai.listTones` | `public` | `Promise`\<[`ListTonesResponse`](routes/ai.md#listtonesresponse)\> | `undefined` | - |
| `ai.polish` | `public` | `Promise`\<[`PolishResponse`](routes/ai.md#polishresponse)\> | `undefined` | - |
| `ai.submitFeedback` | `public` | `Promise`\<\{ `id`: `string`; \}\> | `undefined` | - |
| <a id="aichat"></a> `aiChat` | `public` | \{ `createTopic`: `Promise`\<`AiChatCreateTopicResponse`\>; `deleteTopic`: `Promise`\<`AiChatGetTopicResponse`\>; `getTopic`: `Promise`\<`AiChatGetTopicResponse`\>; `listTopics`: `Promise`\<`AiChatListTopicsResponse`\>; `updateTopic`: `Promise`\<`AiChatGetTopicResponse`\>; \} | `undefined` | - |
| `aiChat.createTopic` | `public` | `Promise`\<`AiChatCreateTopicResponse`\> | `undefined` | - |
| `aiChat.deleteTopic` | `public` | `Promise`\<`AiChatGetTopicResponse`\> | `undefined` | - |
| `aiChat.getTopic` | `public` | `Promise`\<`AiChatGetTopicResponse`\> | `undefined` | - |
| `aiChat.listTopics` | `public` | `Promise`\<`AiChatListTopicsResponse`\> | `undefined` | - |
| `aiChat.updateTopic` | `public` | `Promise`\<`AiChatGetTopicResponse`\> | `undefined` | - |
| <a id="asset"></a> `asset` | `readonly` | [`AssetMethods`](#assetmethods) | `undefined` | - |
| <a id="auth"></a> `auth` | `readonly` | [`AuthMethods`](#authmethods) | `undefined` | - |
| <a id="baseurl"></a> `baseURL` | `readonly` | `string` | `undefined` | - |
| <a id="blogposts"></a> `blogPosts` | `public` | \{ `listBlogPosts`: `Promise`\<`BlogPostListResponse`\>; \} | `undefined` | - |
| `blogPosts.listBlogPosts` | `public` | `Promise`\<`BlogPostListResponse`\> | `undefined` | - |
| <a id="board"></a> `board` | `public` | \{ `addColumn`: `Promise`\<`BoardColumn`\>; `addExistingTaskToBoard`: `Promise`\<`Task`\>; `createBoard`: `Promise`\<`Board`\>; `createBoardTask`: `Promise`\<`Task`\>; `deleteBoard`: `Promise`\<\{ `deletedTaskIds`: `string`[]; `disposition`: `string`; `message`: `string`; `reassignedTaskIds`: `string`[]; \}\>; `deleteColumn`: `Promise`\<`void`\>; `followBoard`: `Promise`\<`Board`\>; `getBoard`: `Promise`\<`BoardWithTasks`\>; `getBoardTasks`: `Promise`\<`Task`[]\>; `getProjectBoards`: `Promise`\<`Board`[]\>; `getProjectTasks`: `Promise`\<`any`\>; `moveTask`: `Promise`\<`Task`\>; `removeTaskFromBoard`: `Promise`\<`Task`\>; `reorderColumns`: `Promise`\<`BoardColumn`[]\>; `tagBoard`: `Promise`\<`Board`\>; `unfollowBoard`: `Promise`\<`Board`\>; `untagBoard`: `Promise`\<`Board`\>; `updateBoard`: `Promise`\<`Board`\>; `updateColumn`: `Promise`\<`BoardColumn`\>; \} | `undefined` | - |
| `board.addColumn` | `public` | `Promise`\<`BoardColumn`\> | `undefined` | - |
| `board.addExistingTaskToBoard` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `board.createBoard` | `public` | `Promise`\<`Board`\> | `undefined` | - |
| `board.createBoardTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `board.deleteBoard` | `public` | `Promise`\<\{ `deletedTaskIds`: `string`[]; `disposition`: `string`; `message`: `string`; `reassignedTaskIds`: `string`[]; \}\> | `undefined` | - |
| `board.deleteColumn` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `board.followBoard` | `public` | `Promise`\<`Board`\> | `undefined` | - |
| `board.getBoard` | `public` | `Promise`\<`BoardWithTasks`\> | `undefined` | - |
| `board.getBoardTasks` | `public` | `Promise`\<`Task`[]\> | `undefined` | - |
| `board.getProjectBoards` | `public` | `Promise`\<`Board`[]\> | `undefined` | - |
| `board.getProjectTasks` | `public` | `Promise`\<`any`\> | `undefined` | - |
| `board.moveTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `board.removeTaskFromBoard` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `board.reorderColumns` | `public` | `Promise`\<`BoardColumn`[]\> | `undefined` | - |
| `board.tagBoard` | `public` | `Promise`\<`Board`\> | `undefined` | - |
| `board.unfollowBoard` | `public` | `Promise`\<`Board`\> | `undefined` | - |
| `board.untagBoard` | `public` | `Promise`\<`Board`\> | `undefined` | - |
| `board.updateBoard` | `public` | `Promise`\<`Board`\> | `undefined` | - |
| `board.updateColumn` | `public` | `Promise`\<`BoardColumn`\> | `undefined` | - |
| <a id="bot"></a> `bot` | `public` | \{ `createBot`: `Promise`\<[`CreateBotResponse`](routes/bot.md#createbotresponse)\>; `deleteBot`: `Promise`\<`void`\>; `getBot`: `Promise`\<[`Bot`](routes/bot.md#bot)\>; `listBots`: `Promise`\<[`Bot`](routes/bot.md#bot)[]\>; `listProjectMemberships`: `Promise`\<[`BotProjectMembership`](routes/bot.md#botprojectmembership)[]\>; `removeProjectMembership`: `Promise`\<`void`\>; `rotateBotKey`: `Promise`\<[`RotateBotKeyResponse`](routes/bot.md#rotatebotkeyresponse)\>; `setProjectMembership`: `Promise`\<[`BotProjectMembership`](routes/bot.md#botprojectmembership)\>; `updateBot`: `Promise`\<[`Bot`](routes/bot.md#bot)\>; `updateBotAvatar`: `Promise`\<[`UpdateBotAvatarResponse`](routes/bot.md#updatebotavatarresponse)\>; \} | `undefined` | - |
| `bot.createBot` | `public` | `Promise`\<[`CreateBotResponse`](routes/bot.md#createbotresponse)\> | `undefined` | - |
| `bot.deleteBot` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `bot.getBot` | `public` | `Promise`\<[`Bot`](routes/bot.md#bot)\> | `undefined` | - |
| `bot.listBots` | `public` | `Promise`\<[`Bot`](routes/bot.md#bot)[]\> | `undefined` | - |
| `bot.listProjectMemberships` | `public` | `Promise`\<[`BotProjectMembership`](routes/bot.md#botprojectmembership)[]\> | `undefined` | - |
| `bot.removeProjectMembership` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `bot.rotateBotKey` | `public` | `Promise`\<[`RotateBotKeyResponse`](routes/bot.md#rotatebotkeyresponse)\> | `undefined` | - |
| `bot.setProjectMembership` | `public` | `Promise`\<[`BotProjectMembership`](routes/bot.md#botprojectmembership)\> | `undefined` | - |
| `bot.updateBot` | `public` | `Promise`\<[`Bot`](routes/bot.md#bot)\> | `undefined` | - |
| `bot.updateBotAvatar` | `public` | `Promise`\<[`UpdateBotAvatarResponse`](routes/bot.md#updatebotavatarresponse)\> | `undefined` | - |
| <a id="browsermode"></a> `browserMode` | `readonly` | `boolean` | `false` | - |
| <a id="cachedurationseconds"></a> `cacheDurationSeconds` | `readonly` | `number` | `undefined` | - |
| <a id="chat"></a> `chat` | `public` | \{ `addAttachments`: `Promise`\<[`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)[]\>; `addMembers`: `Promise`\<`ChatMember`\>; `archiveMemberChat`: `Promise`\<`ChatMember`\>; `createAssetChatAndMessage`: `Promise`\<`any`\>; `createMemberChat`: `Promise`\<`ChatMember`\>; `createMessage`: `Promise`\<`ChatMessage`\>; `createMessageShortLink`: `Promise`\<\{ `code`: `string`; `shortUrl`: `string`; \}\>; `createReaction`: `Promise`\<`ChatMessage`\>; `createTopicChat`: `Promise`\<`Chat`\>; `deleteChat`: `Promise`\<`void`\>; `deleteMemberChat`: `Promise`\<`void`\>; `deleteMessage`: `Promise`\<`ChatMessage`\>; `fetchLinkPreviews`: `Promise`\<[`LinkPreviewResponse`](routes/chat.md#linkpreviewresponse)\>; `followChat`: `Promise`\<`void`\>; `getAddableMembers`: `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\>; `getChat`: `Promise`\<`Chat`\>; `getChatByTopicId`: `Promise`\<`Chat`\>; `getMemberChat`: `Promise`\<`ChatMember`\>; `getMentionableAssets`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Asset`\>\>; `getMentionableFolders`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Folder`\>\>; `getMentionablePublics`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionablePublic`](routes/chat.md#mentionablepublic)\>\>; `getMentionableSubmissions`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionableSubmission`](routes/chat.md#mentionablesubmission)\>\>; `getMentionableTasks`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`any`\>\>; `getMentions`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\>; `getMessage`: `Promise`\<`ChatMessage`\>; `getMessages`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\>; `getReplies`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\>; `getScopeAddableMembers`: `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\>; `getUsersMemberChats`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMember`\>\>; `getWorkspaceProjectChats`: `Promise`\<`any`[]\>; `highlightMessage`: `Promise`\<`ChatMessage`\>; `removeAttachment`: `Promise`\<`ChatMessage`\>; `removeMembers`: `Promise`\<`ChatMember`\>; `removeReaction`: `Promise`\<`ChatMessage`\>; `reviseMessage`: `Promise`\<`ChatMessage`\>; `unarchiveMemberChat`: `Promise`\<`ChatMember`\>; `unfollowChat`: `Promise`\<`void`\>; `unhighlightMessage`: `Promise`\<`ChatMessage`\>; `updateChatSubject`: `Promise`\<`Chat`\>; `updateMemberChat`: `Promise`\<`ChatMember`\>; `updateMemberChatIcon`: `Promise`\<\{ `chat`: `ChatMember`; \} & [`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)\>; \} | `undefined` | - |
| `chat.addAttachments` | `public` | `Promise`\<[`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)[]\> | `undefined` | - |
| `chat.addMembers` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.archiveMemberChat` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.createAssetChatAndMessage` | `public` | `Promise`\<`any`\> | `undefined` | - |
| `chat.createMemberChat` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.createMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.createMessageShortLink` | `public` | `Promise`\<\{ `code`: `string`; `shortUrl`: `string`; \}\> | `undefined` | - |
| `chat.createReaction` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.createTopicChat` | `public` | `Promise`\<`Chat`\> | `undefined` | - |
| `chat.deleteChat` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `chat.deleteMemberChat` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `chat.deleteMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.fetchLinkPreviews` | `public` | `Promise`\<[`LinkPreviewResponse`](routes/chat.md#linkpreviewresponse)\> | `undefined` | - |
| `chat.followChat` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `chat.getAddableMembers` | `public` | `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\> | `undefined` | - |
| `chat.getChat` | `public` | `Promise`\<`Chat`\> | `undefined` | - |
| `chat.getChatByTopicId` | `public` | `Promise`\<`Chat`\> | `undefined` | - |
| `chat.getMemberChat` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.getMentionableAssets` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Asset`\>\> | `undefined` | - |
| `chat.getMentionableFolders` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Folder`\>\> | `undefined` | - |
| `chat.getMentionablePublics` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionablePublic`](routes/chat.md#mentionablepublic)\>\> | `undefined` | - |
| `chat.getMentionableSubmissions` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionableSubmission`](routes/chat.md#mentionablesubmission)\>\> | `undefined` | - |
| `chat.getMentionableTasks` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`any`\>\> | `undefined` | - |
| `chat.getMentions` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\> | `undefined` | - |
| `chat.getMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.getMessages` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\> | `undefined` | - |
| `chat.getReplies` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\> | `undefined` | - |
| `chat.getScopeAddableMembers` | `public` | `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\> | `undefined` | - |
| `chat.getUsersMemberChats` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMember`\>\> | `undefined` | - |
| `chat.getWorkspaceProjectChats` | `public` | `Promise`\<`any`[]\> | `undefined` | - |
| `chat.highlightMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.removeAttachment` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.removeMembers` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.removeReaction` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.reviseMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.unarchiveMemberChat` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.unfollowChat` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `chat.unhighlightMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `chat.updateChatSubject` | `public` | `Promise`\<`Chat`\> | `undefined` | - |
| `chat.updateMemberChat` | `public` | `Promise`\<`ChatMember`\> | `undefined` | - |
| `chat.updateMemberChatIcon` | `public` | `Promise`\<\{ `chat`: `ChatMember`; \} & [`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)\> | `undefined` | - |
| <a id="config"></a> `config` | `readonly` | [`ConfigMethods`](routes/config.md#configmethods) | `undefined` | - |
| <a id="convo"></a> `convo` | `public` | \{ `completeConvo`: `Promise`\<`CompleteConvoResponse`\>; `deleteConvo`: `Promise`\<`void`\>; `getChatConvos`: `Promise`\<`Convo`[]\>; `getConvo`: `Promise`\<`GetConvoResponse`\>; `getProjectConvos`: `Promise`\<`Convo`[]\>; `getScopeConvos`: `Promise`\<`GetScopeConvosResponse`\>; `joinConvo`: `Promise`\<`JoinConvoResponse`\>; `leaveConvo`: `Promise`\<`LeaveConvoResponse`\>; `rejoinConvo`: `Promise`\<`JoinConvoResponse`\>; `startConvo`: `Promise`\<`StartConvoResponse`\>; `updateConvo`: `Promise`\<`UpdateConvoResponse`\>; \} | `undefined` | - |
| `convo.completeConvo` | `public` | `Promise`\<`CompleteConvoResponse`\> | `undefined` | - |
| `convo.deleteConvo` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `convo.getChatConvos` | `public` | `Promise`\<`Convo`[]\> | `undefined` | - |
| `convo.getConvo` | `public` | `Promise`\<`GetConvoResponse`\> | `undefined` | - |
| `convo.getProjectConvos` | `public` | `Promise`\<`Convo`[]\> | `undefined` | - |
| `convo.getScopeConvos` | `public` | `Promise`\<`GetScopeConvosResponse`\> | `undefined` | - |
| `convo.joinConvo` | `public` | `Promise`\<`JoinConvoResponse`\> | `undefined` | - |
| `convo.leaveConvo` | `public` | `Promise`\<`LeaveConvoResponse`\> | `undefined` | - |
| `convo.rejoinConvo` | `public` | `Promise`\<`JoinConvoResponse`\> | `undefined` | - |
| `convo.startConvo` | `public` | `Promise`\<`StartConvoResponse`\> | `undefined` | - |
| `convo.updateConvo` | `public` | `Promise`\<`UpdateConvoResponse`\> | `undefined` | - |
| <a id="credits"></a> `credits` | `public` | \{ `getBalance`: `Promise`\<[`GetBalanceResponse`](routes/credits.md#getbalanceresponse)\>; `getUsageReport`: `Promise`\<[`UsageReportResponse`](routes/credits.md#usagereportresponse)\>; \} | `undefined` | - |
| `credits.getBalance` | `public` | `Promise`\<[`GetBalanceResponse`](routes/credits.md#getbalanceresponse)\> | `undefined` | - |
| `credits.getUsageReport` | `public` | `Promise`\<[`UsageReportResponse`](routes/credits.md#usagereportresponse)\> | `undefined` | - |
| <a id="debug"></a> `debug` | `readonly` | `boolean` | `undefined` | - |
| <a id="device"></a> `device` | `public` | \{ `deleteDevice`: `Promise`\<`void`\>; `getDevice`: `Promise`\<`Device`\>; `getUserDevices`: `Promise`\<`Device`[]\>; `registerDevice`: `Promise`\<`Device`\>; `updateDevice`: `Promise`\<`Device`\>; \} | `undefined` | - |
| `device.deleteDevice` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `device.getDevice` | `public` | `Promise`\<`Device`\> | `undefined` | - |
| `device.getUserDevices` | `public` | `Promise`\<`Device`[]\> | `undefined` | - |
| `device.registerDevice` | `public` | `Promise`\<`Device`\> | `undefined` | - |
| `device.updateDevice` | `public` | `Promise`\<`Device`\> | `undefined` | - |
| <a id="enablecache"></a> `enableCache` | `readonly` | `boolean` | `undefined` | - |
| <a id="fetch"></a> `fetch` | `readonly` | (`input`, `init?`) => `Promise`\<`Response`\> | `undefined` | - |
| <a id="folder"></a> `folder` | `public` | \{ `getFolder`: `Promise`\<`Folder`\>; `getFoldersAssets`: `Promise`\<[`PaginatedResponse`](routes/folder.md#paginatedresponse)\<`Asset`\>\>; `tagFolder`: `Promise`\<`Folder`\>; `untagFolder`: `Promise`\<`Folder`\>; `updateFolder`: `Promise`\<`Folder`\>; `updateFolderIcon`: `Promise`\<`any`\>; \} | `undefined` | - |
| `folder.getFolder` | `public` | `Promise`\<`Folder`\> | `undefined` | - |
| `folder.getFoldersAssets` | `public` | `Promise`\<[`PaginatedResponse`](routes/folder.md#paginatedresponse)\<`Asset`\>\> | `undefined` | - |
| `folder.tagFolder` | `public` | `Promise`\<`Folder`\> | `undefined` | - |
| `folder.untagFolder` | `public` | `Promise`\<`Folder`\> | `undefined` | - |
| `folder.updateFolder` | `public` | `Promise`\<`Folder`\> | `undefined` | - |
| `folder.updateFolderIcon` | `public` | `Promise`\<`any`\> | `undefined` | - |
| <a id="invalidatecacheonmutation"></a> `invalidateCacheOnMutation` | `readonly` | `boolean` | `undefined` | - |
| <a id="invite"></a> `invite` | `public` | \{ `acceptInvite`: `Promise`\<[`AcceptInviteResponse`](routes/invite.md#acceptinviteresponse)\>; `cancelInvite`: `Promise`\<`Invite`\>; `getInviteById`: `Promise`\<`Invite`\>; `getInvites`: `Promise`\<[`PaginatedInvitesResponse`](routes/invite.md#paginatedinvitesresponse)\>; `getInvitesForResource`: `Promise`\<`Invite`[]\>; `inviteUser`: `Promise`\<`Invite`\>; `resendInvite`: `Promise`\<`Invite`\>; \} | `undefined` | - |
| `invite.acceptInvite` | `public` | `Promise`\<[`AcceptInviteResponse`](routes/invite.md#acceptinviteresponse)\> | `undefined` | - |
| `invite.cancelInvite` | `public` | `Promise`\<`Invite`\> | `undefined` | - |
| `invite.getInviteById` | `public` | `Promise`\<`Invite`\> | `undefined` | - |
| `invite.getInvites` | `public` | `Promise`\<[`PaginatedInvitesResponse`](routes/invite.md#paginatedinvitesresponse)\> | `undefined` | - |
| `invite.getInvitesForResource` | `public` | `Promise`\<`Invite`[]\> | `undefined` | - |
| `invite.inviteUser` | `public` | `Promise`\<`Invite`\> | `undefined` | - |
| `invite.resendInvite` | `public` | `Promise`\<`Invite`\> | `undefined` | - |
| <a id="membership"></a> `membership` | `public` | \{ `addRole`: `Promise`\<`Membership`\>; `deleteMembership`: `Promise`\<`void`\>; `getMyMemberships`: `Promise`\<`Membership`[]\>; `getProjectLastSeen`: `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\>; `getProjectMemberships`: `Promise`\<`MembershipReport`\>; `getProjectMentionableUsers`: `Promise`\<`Mentionable`[]\>; `getWorkspaceLastSeen`: `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\>; `getWorkspaceMemberships`: `Promise`\<`MembershipReport`\>; `leaveResource`: `Promise`\<`void`\>; `removeRole`: `Promise`\<`Membership`\>; \} | `undefined` | - |
| `membership.addRole` | `public` | `Promise`\<`Membership`\> | `undefined` | - |
| `membership.deleteMembership` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `membership.getMyMemberships` | `public` | `Promise`\<`Membership`[]\> | `undefined` | - |
| `membership.getProjectLastSeen` | `public` | `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\> | `undefined` | - |
| `membership.getProjectMemberships` | `public` | `Promise`\<`MembershipReport`\> | `undefined` | - |
| `membership.getProjectMentionableUsers` | `public` | `Promise`\<`Mentionable`[]\> | `undefined` | - |
| `membership.getWorkspaceLastSeen` | `public` | `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\> | `undefined` | - |
| `membership.getWorkspaceMemberships` | `public` | `Promise`\<`MembershipReport`\> | `undefined` | - |
| `membership.leaveResource` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `membership.removeRole` | `public` | `Promise`\<`Membership`\> | `undefined` | - |
| <a id="notification"></a> `notification` | `public` | \{ `getNewNotificationCount`: `Promise`\<[`NotificationCountResponse`](routes/notification.md#notificationcountresponse)\>; `getNewNotificationCountBulk`: `Promise`\<[`NotificationCountBulkResponse`](routes/notification.md#notificationcountbulkresponse)\>; `getNewNotifications`: `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\>; `getNotifications`: `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\>; `getUsersLastNotificationsSeen`: `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\>; `updateUsersLastSeen`: `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\>; \} | `undefined` | - |
| `notification.getNewNotificationCount` | `public` | `Promise`\<[`NotificationCountResponse`](routes/notification.md#notificationcountresponse)\> | `undefined` | - |
| `notification.getNewNotificationCountBulk` | `public` | `Promise`\<[`NotificationCountBulkResponse`](routes/notification.md#notificationcountbulkresponse)\> | `undefined` | - |
| `notification.getNewNotifications` | `public` | `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\> | `undefined` | - |
| `notification.getNotifications` | `public` | `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\> | `undefined` | - |
| `notification.getUsersLastNotificationsSeen` | `public` | `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\> | `undefined` | - |
| `notification.updateUsersLastSeen` | `public` | `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\> | `undefined` | - |
| <a id="payment"></a> `payment` | `public` | \{ `createManualCheckout`: `Promise`\<`any`\>; `createStripeCheckout`: `Promise`\<[`StripeCheckoutResponse`](routes/payment.md#stripecheckoutresponse)\>; `createStripeCustomer`: `Promise`\<[`StripeCustomerResponse`](routes/payment.md#stripecustomerresponse)\>; `getStripePortalUrl`: `Promise`\<[`StripePortalResponse`](routes/payment.md#stripeportalresponse)\>; \} | `undefined` | - |
| `payment.createManualCheckout` | `public` | `Promise`\<`any`\> | `undefined` | - |
| `payment.createStripeCheckout` | `public` | `Promise`\<[`StripeCheckoutResponse`](routes/payment.md#stripecheckoutresponse)\> | `undefined` | - |
| `payment.createStripeCustomer` | `public` | `Promise`\<[`StripeCustomerResponse`](routes/payment.md#stripecustomerresponse)\> | `undefined` | - |
| `payment.getStripePortalUrl` | `public` | `Promise`\<[`StripePortalResponse`](routes/payment.md#stripeportalresponse)\> | `undefined` | - |
| <a id="product"></a> `product` | `public` | \{ `getSuggestedCurrency`: `Promise`\<\{ `country`: `string` \| `null`; `currency`: [`SupportedCurrency`](routes/product.md#supportedcurrency); `locked?`: `boolean`; `supported`: [`SupportedCurrency`](routes/product.md#supportedcurrency)[]; \}\>; `getWorkspaceProducts`: `Promise`\<`Product`[]\>; `listPlans`: `Promise`\<`Product`[]\>; \} | `undefined` | - |
| `product.getSuggestedCurrency` | `public` | `Promise`\<\{ `country`: `string` \| `null`; `currency`: [`SupportedCurrency`](routes/product.md#supportedcurrency); `locked?`: `boolean`; `supported`: [`SupportedCurrency`](routes/product.md#supportedcurrency)[]; \}\> | `undefined` | - |
| `product.getWorkspaceProducts` | `public` | `Promise`\<`Product`[]\> | `undefined` | - |
| `product.listPlans` | `public` | `Promise`\<`Product`[]\> | `undefined` | - |
| <a id="project"></a> `project` | `readonly` | [`ProjectMethods`](#projectmethods) | `undefined` | - |
| <a id="public"></a> `public` | `public` | \{ `createPublicAssetChatMessage`: `Promise`\<`CreatePublicAssetChatMessageResponse`\>; `createPublicChatMessage`: `Promise`\<`ChatMessage`\>; `createPublicTopicChatMessage`: `Promise`\<`CreatePublicAssetChatMessageResponse`\>; `downloadAssets`: `Promise`\<`DownloadSignedUrlData`[]\>; `getPublicAsset`: `Promise`\<`PublicAssetResponse`\>; `getPublicChat`: `Promise`\<`Chat` \| `null`\>; `getPublicChatMessages`: `Promise`\<`PublicChatMessagesResponse`\>; `getPublicDownloadUrl`: `Promise`\<[`PublicDownloadUrlResponse`](routes/shortlink.md#publicdownloadurlresponse)\>; `getPublicEmbedFiles`: `Promise`\<[`PublicEmbedFilesResponse`](routes/shortlink.md#publicembedfilesresponse)\>; `getPublicFileSystem`: `Promise`\<[`PublicFileSystemDetailsResponse`](routes/public.md#publicfilesystemdetailsresponse)\>; `getPublicItems`: `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\>; `getPublicItemsAtPath`: `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\>; `recordAccessActivity`: `Promise`\<`void`\>; `resolvePublicDownload`: `Promise`\<[`ResolvePublicDownloadResponse`](routes/shortlink.md#resolvepublicdownloadresponse)\>; \} | `undefined` | - |
| `public.createPublicAssetChatMessage` | `public` | `Promise`\<`CreatePublicAssetChatMessageResponse`\> | `undefined` | - |
| `public.createPublicChatMessage` | `public` | `Promise`\<`ChatMessage`\> | `undefined` | - |
| `public.createPublicTopicChatMessage` | `public` | `Promise`\<`CreatePublicAssetChatMessageResponse`\> | `undefined` | - |
| `public.downloadAssets` | `public` | `Promise`\<`DownloadSignedUrlData`[]\> | `undefined` | - |
| `public.getPublicAsset` | `public` | `Promise`\<`PublicAssetResponse`\> | `undefined` | - |
| `public.getPublicChat` | `public` | `Promise`\<`Chat` \| `null`\> | `undefined` | - |
| `public.getPublicChatMessages` | `public` | `Promise`\<`PublicChatMessagesResponse`\> | `undefined` | - |
| `public.getPublicDownloadUrl` | `public` | `Promise`\<[`PublicDownloadUrlResponse`](routes/shortlink.md#publicdownloadurlresponse)\> | `undefined` | - |
| `public.getPublicEmbedFiles` | `public` | `Promise`\<[`PublicEmbedFilesResponse`](routes/shortlink.md#publicembedfilesresponse)\> | `undefined` | - |
| `public.getPublicFileSystem` | `public` | `Promise`\<[`PublicFileSystemDetailsResponse`](routes/public.md#publicfilesystemdetailsresponse)\> | `undefined` | - |
| `public.getPublicItems` | `public` | `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\> | `undefined` | - |
| `public.getPublicItemsAtPath` | `public` | `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\> | `undefined` | - |
| `public.recordAccessActivity` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `public.resolvePublicDownload` | `public` | `Promise`\<[`ResolvePublicDownloadResponse`](routes/shortlink.md#resolvepublicdownloadresponse)\> | `undefined` | - |
| <a id="refreshlocktimeoutms"></a> `refreshLockTimeoutMs` | `readonly` | `number` | `undefined` | - |
| <a id="refreshtokenstoragekey"></a> `refreshTokenStorageKey` | `readonly` | `string` | `undefined` | - |
| <a id="scratch"></a> `scratch` | `public` | \{ `completeUpload`: `Promise`\<[`CompleteUploadResponse`](routes/scratch.md#completeuploadresponse)\>; `promote`: `Promise`\<[`PromoteResponse`](routes/scratch.md#promoteresponse)\>; \} | `undefined` | - |
| `scratch.completeUpload` | `public` | `Promise`\<[`CompleteUploadResponse`](routes/scratch.md#completeuploadresponse)\> | `undefined` | - |
| `scratch.promote` | `public` | `Promise`\<[`PromoteResponse`](routes/scratch.md#promoteresponse)\> | `undefined` | - |
| <a id="settings"></a> `settings` | `public` | \{ `cleanupOrphanedSettings`: `Promise`\<\{ `message`: `string`; `removedCount`: `number`; \}\>; `getAllResourceSettings`: `Promise`\<\{ `resourceSettings`: [`ResourceSettings`](routes/settings.md#resourcesettings)[]; \}\>; `getEffectiveSettings`: `Promise`\<[`EffectiveSettings`](routes/settings.md#effectivesettings)\>; `getResourceSettings`: `Promise`\< \| [`ResourceSettings`](routes/settings.md#resourcesettings) \| \{ `message`: `string`; \}\>; `resetResourceSettings`: `Promise`\<\{ `message`: `string`; \}\>; `updateResourceSettings`: `Promise`\<\{ `message`: `string`; `settings`: [`ResourceSettings`](routes/settings.md#resourcesettings); \}\>; \} | `undefined` | - |
| `settings.cleanupOrphanedSettings` | `public` | `Promise`\<\{ `message`: `string`; `removedCount`: `number`; \}\> | `undefined` | - |
| `settings.getAllResourceSettings` | `public` | `Promise`\<\{ `resourceSettings`: [`ResourceSettings`](routes/settings.md#resourcesettings)[]; \}\> | `undefined` | - |
| `settings.getEffectiveSettings` | `public` | `Promise`\<[`EffectiveSettings`](routes/settings.md#effectivesettings)\> | `undefined` | - |
| `settings.getResourceSettings` | `public` | `Promise`\< \| [`ResourceSettings`](routes/settings.md#resourcesettings) \| \{ `message`: `string`; \}\> | `undefined` | - |
| `settings.resetResourceSettings` | `public` | `Promise`\<\{ `message`: `string`; \}\> | `undefined` | - |
| `settings.updateResourceSettings` | `public` | `Promise`\<\{ `message`: `string`; `settings`: [`ResourceSettings`](routes/settings.md#resourcesettings); \}\> | `undefined` | - |
| <a id="shortlink"></a> `shortlink` | `public` | \{ `resolveShortLink`: `Promise`\<[`ResolveShortLinkResponse`](routes/shortlink.md#resolveshortlinkresponse)\>; \} | `undefined` | - |
| `shortlink.resolveShortLink` | `public` | `Promise`\<[`ResolveShortLinkResponse`](routes/shortlink.md#resolveshortlinkresponse)\> | `undefined` | - |
| <a id="socket"></a> `socket` | `public` | \{ `connect`: (`channel`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\>; `connectPublic`: (`publicToken`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\>; `disconnect`: (`channel`) => `Promise`\<`void`\>; `disconnectAll`: () => `Promise`\<`void`\>; `emit`: (`channel`, `event`, `data?`) => `void`; `emitWithAck`: (`channel`, `event`, `data`, `timeoutMs`) => `Promise`\<`boolean`\>; `isConnected`: (`channel`) => `boolean`; `onReconnect`: (`channel`, `callback`) => `void`; `onReconnectFailed`: (`channel`, `callback`) => `void`; `subscribe`: \<`T`\>(`channel`, `event`, `callback`) => `Promise`\<`void`\>; `subscribePublic`: \<`T`\>(`publicToken`, `event`, `callback`) => `Promise`\<`void`\>; `unsubscribe`: (`channel`, `event`, `callback?`) => `void`; \} | `undefined` | - |
| `socket.connect` | `public` | (`channel`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\> | `undefined` | Connect to a socket channel |
| `socket.connectPublic` | `public` | (`publicToken`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\> | `undefined` | Connect to a public socket channel without authentication |
| `socket.disconnect` | `public` | (`channel`) => `Promise`\<`void`\> | `undefined` | Disconnect from a socket channel |
| `socket.disconnectAll` | `public` | () => `Promise`\<`void`\> | `undefined` | Disconnect from all channels |
| `socket.emit` | `public` | (`channel`, `event`, `data?`) => `void` | `undefined` | Emit an event to a connected channel |
| `socket.emitWithAck` | `public` | (`channel`, `event`, `data`, `timeoutMs`) => `Promise`\<`boolean`\> | `undefined` | Emit an event with a timeout-bounded server acknowledgement. Resolves `true` if the server acks within `timeoutMs`, `false` on timeout or transport error. Used by the FE WS layer (`WebSocketManager.probeChannel`) to actively verify a channel's liveness when `socket.connected` may be stale — most notably after a backgrounded tab returns to focus, where the flag can remain `true` for up to socket.io's own heartbeat window (~25–45s) even after the underlying TCP transport has died. Relies on socket.io v4's `socket.timeout(ms).emit(ev, data, cb)` pattern: the BE handler invokes `ack()` (its trailing callback arg); if no ack arrives within `timeoutMs` the cb is invoked with an Error. |
| `socket.isConnected` | `public` | (`channel`) => `boolean` | `undefined` | Check if connected to a channel |
| `socket.onReconnect` | `public` | (`channel`, `callback`) => `void` | `undefined` | Register a callback for when the channel reconnects — a socket.io transport-level reconnect, or the token-refresh reconnect. Use it to recover any gap of server->client messages missed while the connection was down; socket.io does not replay those. Dispatched from the 'reconnect' handler in connect() and from the token-refresh path. |
| `socket.onReconnectFailed` | `public` | (`channel`, `callback`) => `void` | `undefined` | Register a callback for when Socket.IO exhausts all reconnection attempts |
| `socket.subscribe` | `public` | \<`T`\>(`channel`, `event`, `callback`) => `Promise`\<`void`\> | `undefined` | Subscribe to an event on a channel |
| `socket.subscribePublic` | `public` | \<`T`\>(`publicToken`, `event`, `callback`) => `Promise`\<`void`\> | `undefined` | Subscribe to an event on a public channel Automatically connects to the public channel if not already connected |
| `socket.unsubscribe` | `public` | (`channel`, `event`, `callback?`) => `void` | `undefined` | Stop listening for an event on a channel. If `callback` is provided, only that specific listener is removed; otherwise every listener for that event is cleared. |
| <a id="storage"></a> `storage` | `public` | \{ `getStorageChart`: `Promise`\<[`ChartDataResponse`](routes/storage.md#chartdataresponse)\>; `getStorageRecord`: `Promise`\<[`StorageRecord`](routes/storage.md#storagerecord)\>; \} | `undefined` | - |
| `storage.getStorageChart` | `public` | `Promise`\<[`ChartDataResponse`](routes/storage.md#chartdataresponse)\> | `undefined` | - |
| `storage.getStorageRecord` | `public` | `Promise`\<[`StorageRecord`](routes/storage.md#storagerecord)\> | `undefined` | - |
| <a id="subscription"></a> `subscription` | `readonly` | [`SubscriptionMethods`](#subscriptionmethods) | `undefined` | - |
| <a id="supportchat"></a> `supportChat` | `public` | \{ `createAttachment`: `Promise`\<`SupportChatCreateAttachmentResponse`\>; `getTopic`: `Promise`\<`SupportChatGetTopicResponse`\>; \} | `undefined` | - |
| `supportChat.createAttachment` | `public` | `Promise`\<`SupportChatCreateAttachmentResponse`\> | `undefined` | - |
| `supportChat.getTopic` | `public` | `Promise`\<`SupportChatGetTopicResponse`\> | `undefined` | - |
| <a id="supportticket"></a> `supportTicket` | `public` | \{ `createSupportTicket`: `Promise`\<[`SupportTicket`](routes/supportTicket.md#supportticket)\>; `getSupportTicket`: `Promise`\<[`SupportTicket`](routes/supportTicket.md#supportticket)\>; `getSupportTicketScopeOptions`: `Promise`\<[`SupportTicketScopeOptions`](routes/supportTicket.md#supportticketscopeoptions)\>; `listSupportTickets`: `Promise`\<[`SupportTicketListResponse`](routes/supportTicket.md#supportticketlistresponse)\>; \} | `undefined` | - |
| `supportTicket.createSupportTicket` | `public` | `Promise`\<[`SupportTicket`](routes/supportTicket.md#supportticket)\> | `undefined` | - |
| `supportTicket.getSupportTicket` | `public` | `Promise`\<[`SupportTicket`](routes/supportTicket.md#supportticket)\> | `undefined` | - |
| `supportTicket.getSupportTicketScopeOptions` | `public` | `Promise`\<[`SupportTicketScopeOptions`](routes/supportTicket.md#supportticketscopeoptions)\> | `undefined` | - |
| `supportTicket.listSupportTickets` | `public` | `Promise`\<[`SupportTicketListResponse`](routes/supportTicket.md#supportticketlistresponse)\> | `undefined` | - |
| <a id="tag"></a> `tag` | `public` | \{ `createTag`: `Promise`\<`Tag`\>; `deleteTag`: `Promise`\<`Tag`\>; `getTags`: `Promise`\<[`Tags`](routes/tag.md#tags)\>; `updateTag`: `Promise`\<`Tag`\>; \} | `undefined` | - |
| `tag.createTag` | `public` | `Promise`\<`Tag`\> | `undefined` | - |
| `tag.deleteTag` | `public` | `Promise`\<`Tag`\> | `undefined` | - |
| `tag.getTags` | `public` | `Promise`\<[`Tags`](routes/tag.md#tags)\> | `undefined` | - |
| `tag.updateTag` | `public` | `Promise`\<`Tag`\> | `undefined` | - |
| <a id="task"></a> `task` | `public` | \{ `acknowledgeAllTasks`: `Promise`\<[`AcknowledgeAllTasksResponse`](routes/task.md#acknowledgealltasksresponse)\>; `acknowledgeTask`: `Promise`\<`Task`\>; `bulkCreate`: `Promise`\<[`BulkCreateTasksResponse`](routes/task.md#bulkcreatetasksresponse)\>; `deleteTask`: `Promise`\<`void`\>; `followTask`: `Promise`\<`Task`\>; `getMyTasks`: `Promise`\<[`GetTasksResponse`](routes/task.md#gettasksresponse)\>; `getTaskEvents`: `Promise`\<[`GetTaskEventsResponse`](routes/task.md#gettaskeventsresponse)\>; `getTaskLinks`: `Promise`\<`TaskLink`[]\>; `getUnacknowledgedTaskCount`: `Promise`\<[`UnacknowledgedTaskCountResponse`](routes/task.md#unacknowledgedtaskcountresponse)\>; `linkTask`: `Promise`\<`TaskLink`\>; `tagTask`: `Promise`\<`Task`\>; `unfollowTask`: `Promise`\<`Task`\>; `unlinkTask`: `Promise`\<`void`\>; `untagTask`: `Promise`\<`Task`\>; `updateTaskDetails`: `Promise`\<`Task`\>; `updateTaskStatus`: `Promise`\<`Task`\>; \} | `undefined` | - |
| `task.acknowledgeAllTasks` | `public` | `Promise`\<[`AcknowledgeAllTasksResponse`](routes/task.md#acknowledgealltasksresponse)\> | `undefined` | - |
| `task.acknowledgeTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `task.bulkCreate` | `public` | `Promise`\<[`BulkCreateTasksResponse`](routes/task.md#bulkcreatetasksresponse)\> | `undefined` | - |
| `task.deleteTask` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `task.followTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `task.getMyTasks` | `public` | `Promise`\<[`GetTasksResponse`](routes/task.md#gettasksresponse)\> | `undefined` | - |
| `task.getTaskEvents` | `public` | `Promise`\<[`GetTaskEventsResponse`](routes/task.md#gettaskeventsresponse)\> | `undefined` | - |
| `task.getTaskLinks` | `public` | `Promise`\<`TaskLink`[]\> | `undefined` | - |
| `task.getUnacknowledgedTaskCount` | `public` | `Promise`\<[`UnacknowledgedTaskCountResponse`](routes/task.md#unacknowledgedtaskcountresponse)\> | `undefined` | - |
| `task.linkTask` | `public` | `Promise`\<`TaskLink`\> | `undefined` | - |
| `task.tagTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `task.unfollowTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `task.unlinkTask` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `task.untagTask` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `task.updateTaskDetails` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| `task.updateTaskStatus` | `public` | `Promise`\<`Task`\> | `undefined` | - |
| <a id="taskrelation"></a> `taskRelation` | `public` | \{ `createTaskRelation`: `Promise`\<[`TaskRelation`](routes/taskRelation.md#taskrelation)\>; `deleteTaskRelation`: `Promise`\<`void`\>; `getRelationsForChat`: `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\>; `getRelationsForMessage`: `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\>; `getTaskRelations`: `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\>; \} | `undefined` | - |
| `taskRelation.createTaskRelation` | `public` | `Promise`\<[`TaskRelation`](routes/taskRelation.md#taskrelation)\> | `undefined` | - |
| `taskRelation.deleteTaskRelation` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `taskRelation.getRelationsForChat` | `public` | `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\> | `undefined` | - |
| `taskRelation.getRelationsForMessage` | `public` | `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\> | `undefined` | - |
| `taskRelation.getTaskRelations` | `public` | `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\> | `undefined` | - |
| <a id="token"></a> `token` | `public` | \{ `createToken`: `Promise`\<[`CreateTokenResponse`](routes/token.md#createtokenresponse)\>; `deleteToken`: `Promise`\<`void`\>; `listTokens`: `Promise`\<[`TokenSummary`](routes/token.md#tokensummary)[]\>; \} | `undefined` | - |
| `token.createToken` | `public` | `Promise`\<[`CreateTokenResponse`](routes/token.md#createtokenresponse)\> | `undefined` | - |
| `token.deleteToken` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `token.listTokens` | `public` | `Promise`\<[`TokenSummary`](routes/token.md#tokensummary)[]\> | `undefined` | - |
| <a id="tokenexpirybufferseconds"></a> `tokenExpiryBufferSeconds` | `readonly` | `number` | `undefined` | - |
| <a id="tokenrefreshmaxwaitms"></a> `tokenRefreshMaxWaitMs` | `readonly` | `number` | `undefined` | - |
| <a id="tokenrefreshretrydelayms"></a> `tokenRefreshRetryDelayMs` | `readonly` | `number` | `undefined` | - |
| <a id="tokenstoragekey"></a> `tokenStorageKey` | `readonly` | `string` | `undefined` | - |
| <a id="user"></a> `user` | `readonly` | [`UserMethods`](#usermethods) | `undefined` | - |
| <a id="version"></a> `version` | `public` | \{ `getCommitHash`: `Promise`\<[`CommitResponse`](routes/version.md#commitresponse)\>; `getHealth`: `Promise`\<[`HealthStatus`](routes/version.md#healthstatus)\>; \} | `undefined` | - |
| `version.getCommitHash` | `public` | `Promise`\<[`CommitResponse`](routes/version.md#commitresponse)\> | `undefined` | - |
| `version.getHealth` | `public` | `Promise`\<[`HealthStatus`](routes/version.md#healthstatus)\> | `undefined` | - |
| <a id="webhook"></a> `webhook` | `public` | \{ `createWebhook`: `Promise`\<[`CreateWebhookResponse`](routes/webhook.md#createwebhookresponse)\>; `deleteWebhook`: `Promise`\<`void`\>; `getWebhook`: `Promise`\<[`WebhookSubscription`](routes/webhook.md#webhooksubscription)\>; `listWebhookDeliveries`: `Promise`\<[`ListDeliveriesResponse`](routes/webhook.md#listdeliveriesresponse)\>; `listWebhooks`: `Promise`\<[`WebhookSubscription`](routes/webhook.md#webhooksubscription)[]\>; `replayWebhookDelivery`: `Promise`\<\{ `attempt`: [`WebhookAttempt`](routes/webhook.md#webhookattempt); \}\>; `rotateWebhookSecret`: `Promise`\<[`RotateWebhookSecretResponse`](routes/webhook.md#rotatewebhooksecretresponse)\>; `testWebhook`: `Promise`\<[`TestWebhookResponse`](routes/webhook.md#testwebhookresponse)\>; `updateWebhook`: `Promise`\<[`WebhookSubscription`](routes/webhook.md#webhooksubscription)\>; \} | `undefined` | - |
| `webhook.createWebhook` | `public` | `Promise`\<[`CreateWebhookResponse`](routes/webhook.md#createwebhookresponse)\> | `undefined` | - |
| `webhook.deleteWebhook` | `public` | `Promise`\<`void`\> | `undefined` | - |
| `webhook.getWebhook` | `public` | `Promise`\<[`WebhookSubscription`](routes/webhook.md#webhooksubscription)\> | `undefined` | - |
| `webhook.listWebhookDeliveries` | `public` | `Promise`\<[`ListDeliveriesResponse`](routes/webhook.md#listdeliveriesresponse)\> | `undefined` | - |
| `webhook.listWebhooks` | `public` | `Promise`\<[`WebhookSubscription`](routes/webhook.md#webhooksubscription)[]\> | `undefined` | - |
| `webhook.replayWebhookDelivery` | `public` | `Promise`\<\{ `attempt`: [`WebhookAttempt`](routes/webhook.md#webhookattempt); \}\> | `undefined` | - |
| `webhook.rotateWebhookSecret` | `public` | `Promise`\<[`RotateWebhookSecretResponse`](routes/webhook.md#rotatewebhooksecretresponse)\> | `undefined` | - |
| `webhook.testWebhook` | `public` | `Promise`\<[`TestWebhookResponse`](routes/webhook.md#testwebhookresponse)\> | `undefined` | - |
| `webhook.updateWebhook` | `public` | `Promise`\<[`WebhookSubscription`](routes/webhook.md#webhooksubscription)\> | `undefined` | - |
| <a id="websocketurl"></a> `websocketURL?` | `readonly` | `string` | `undefined` | - |
| <a id="workspace"></a> `workspace` | `readonly` | [`WorkspaceMethods`](#workspacemethods) | `undefined` | - |

#### Methods

##### \_log()

```ts
_log(...args): void;
```

Internal helper for conditional logging. Underscore-prefixed to flag
"internal contract" — accessible from sibling route modules but not
part of the documented public API.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `any`[] | Arguments to pass to console.log. |

###### Returns

`void`

##### clearCache()

```ts
clearCache(): void;
```

Clears the response cache.

###### Returns

`void`

##### getCacheStats()

```ts
getCacheStats(): {
  entries: {
     hasData: boolean;
     hasPendingPromise: boolean;
     key: string;
     timestamp: number;
  }[];
  size: number;
};
```

Gets cache statistics for debugging.

###### Returns

```ts
{
  entries: {
     hasData: boolean;
     hasPendingPromise: boolean;
     key: string;
     timestamp: number;
  }[];
  size: number;
}
```

Object containing cache statistics.

| Name | Type |
| ------ | ------ |
| `entries` | \{ `hasData`: `boolean`; `hasPendingPromise`: `boolean`; `key`: `string`; `timestamp`: `number`; \}[] |
| `size` | `number` |

##### getTokenExpiry()

```ts
getTokenExpiry(): {
  access: string | null;
  refresh: string | null;
};
```

Gets the token expiration timestamps.

###### Returns

```ts
{
  access: string | null;
  refresh: string | null;
}
```

Object containing access and refresh token expiry ISO timestamps.

| Name | Type |
| ------ | ------ |
| `access` | `string` \| `null` |
| `refresh` | `string` \| `null` |

##### getUserId()

```ts
getUserId(): string | null;
```

Gets the current user's ID from the JWT token.

###### Returns

`string` \| `null`

The user ID if available, null otherwise.

##### getVersion()

```ts
getVersion(): SDKVersionInfo;
```

Gets the SDK version information including build timestamp and hash.
Useful for debugging and verifying which SDK version is in use.

###### Returns

[`SDKVersionInfo`](#sdkversioninfo)

SDK version, build timestamp, build hash, and git commit

##### tokenValid()

```ts
tokenValid(): boolean;
```

Checks if the current JWT token exists and is valid.

###### Returns

`boolean`

True if the token exists and is valid, false otherwise.

## Interfaces

### ApiError

Error thrown by `_request` when the API responds with a non-2xx status.
`status` is the HTTP status and `data` the parsed error body
(`{ type, code, message, errorData? }`). Use `isApiError` to narrow.

#### Extends

- `Error`

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="data"></a> `data?` | `any` | - |
| <a id="message"></a> `message` | `string` | `Error.message` |
| <a id="name"></a> `name` | `string` | `Error.name` |
| <a id="stack"></a> `stack?` | `string` | `Error.stack` |
| <a id="status"></a> `status?` | `number` | - |

***

### AssetMethods

#### Extends

- `ReturnType`\<*typeof* [`default`](routes/asset.md#default)\>

#### Methods

##### cleanupUploadSessions()

```ts
cleanupUploadSessions(projectId, olderThanMs?): void;
```

Clean up old upload sessions for a project

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID |
| `olderThanMs?` | `number` | Remove sessions older than this (default: 24 hours) |

###### Returns

`void`

###### Inherited from

```ts
ReturnType.cleanupUploadSessions
```

##### completeCustomThumbnailUpload()

```ts
completeCustomThumbnailUpload(assetId, data): Promise<{
  key: string;
  status: string;
}>;
```

Finalize the multipart S3 upload for a custom thumbnail. Triggers the
post-processing Lambda by committing the S3 object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetId` | `string` |
| `data` | \{ `key`: `string`; `parts`: \{ `ETag`: `string`; `PartNumber`: `number`; \}[]; `uploadId`: `string`; \} |
| `data.key` | `string` |
| `data.parts` | \{ `ETag`: `string`; `PartNumber`: `number`; \}[] |
| `data.uploadId` | `string` |

###### Returns

`Promise`\<\{
  `key`: `string`;
  `status`: `string`;
\}\>

###### Inherited from

```ts
ReturnType.completeCustomThumbnailUpload
```

##### completeUpload()

```ts
completeUpload(uploadData): Promise<any>;
```

Complete a multipart upload initiated by `createAssets`.

Matches the route (`POST /v1/assets/complete-upload`) and mirrors
`nuramaClient.scratch.completeUpload`, so moving between the asset
and scratch namespaces uses the same verb.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uploadData` | [`CompleteMultipartUploadData`](routes/asset.md#completemultipartuploaddata) | Data including key, uploadId, parts, and assetId. |

###### Returns

`Promise`\<`any`\>

S3 completion response.

###### Inherited from

```ts
ReturnType.completeUpload
```

##### completeUploadSession()

```ts
completeUploadSession(projectId, sessionId): void;
```

Mark an upload session as completed

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID |
| `sessionId` | `string` | The session ID |

###### Returns

`void`

###### Inherited from

```ts
ReturnType.completeUploadSession
```

##### createPublicLink()

```ts
createPublicLink(assetId, data): Promise<PublicAssetLink>;
```

Create a public download link for an asset.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The asset ID. |
| `data` | \{ `mode?`: [`PublicAssetLinkMode`](routes/asset.md#publicassetlinkmode-1); `projectId`: `string`; `validity?`: `number`; \} | Link creation data. |
| `data.mode?` | [`PublicAssetLinkMode`](routes/asset.md#publicassetlinkmode-1) | - |
| `data.projectId` | `string` | The project ID. |
| `data.validity?` | `number` | Link validity in milliseconds. |

###### Returns

`Promise`\<[`PublicAssetLink`](routes/asset.md#publicassetlink)\>

The created public link.

###### Inherited from

```ts
ReturnType.createPublicLink
```

##### createShortLink()

```ts
createShortLink(assetId, data?): Promise<CreateAssetShortLinkResponse>;
```

Creates a short link for an asset.
If a short link already exists for the asset with the same visibility, returns the existing one.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset to create a short link for. |
| `data?` | [`CreateAssetShortLinkData`](routes/asset.md#createassetshortlinkdata) | Optional data including visibility context. |

###### Returns

`Promise`\<[`CreateAssetShortLinkResponse`](routes/asset.md#createassetshortlinkresponse)\>

The short link object and short URL.

###### Inherited from

```ts
ReturnType.createShortLink
```

##### deleteAsset()

```ts
deleteAsset(assetId): Promise<AssetWithChats>;
```

Deletes an asset (marks for deletion).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset to delete. |

###### Returns

`Promise`\<[`AssetWithChats`](routes/asset.md#assetwithchats)\>

###### Inherited from

```ts
ReturnType.deleteAsset
```

##### disablePublicLink()

```ts
disablePublicLink(assetId, linkId): Promise<PublicAssetLink>;
```

Disable a public download link.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The asset ID. |
| `linkId` | `string` | The link ID. |

###### Returns

`Promise`\<[`PublicAssetLink`](routes/asset.md#publicassetlink)\>

The disabled public link.

###### Inherited from

```ts
ReturnType.disablePublicLink
```

##### downloadAssets()

```ts
downloadAssets(assetIds): Promise<DownloadAssetsResponse>;
```

Generates signed download URLs for the original files of specified assets.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetIds` | `string`[] | An array of asset IDs. |

###### Returns

`Promise`\<[`DownloadAssetsResponse`](routes/asset.md#downloadassetsresponse)\>

Array of download URL results.

###### Inherited from

```ts
ReturnType.downloadAssets
```

##### getAsset()

```ts
getAsset(assetId, params?): Promise<AssetWithChats>;
```

Retrieves a specific asset by its ID with optional chat data.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset. |
| `params?` | [`GetAssetParams`](routes/asset.md#getassetparams) | Optional parameters for chat data inclusion. |

###### Returns

`Promise`\<[`AssetWithChats`](routes/asset.md#assetwithchats)\>

The asset object with optional chat data.

###### Inherited from

```ts
ReturnType.getAsset
```

##### getAssetAccessActivity()

```ts
getAssetAccessActivity(assetId, params?): Promise<{
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
```

Get aggregated access-activity for a single asset. Returns totals per
eventType, a breakdown for the requested dimension, and a zero-filled
daily series.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetId` | `string` |
| `params?` | \{ `eventType?`: `"play_started"` \| `"play_completed"` \| `"download"` \| `"embed_resolved"`; `groupBy?`: `"visibility"` \| `"referrerHost"` \| `"country"` \| `"userAgentClass"` \| `"day"`; `limit?`: `number`; `range?`: `"7d"` \| `"30d"` \| `"90d"`; \} |
| `params.eventType?` | `"play_started"` \| `"play_completed"` \| `"download"` \| `"embed_resolved"` |
| `params.groupBy?` | `"visibility"` \| `"referrerHost"` \| `"country"` \| `"userAgentClass"` \| `"day"` |
| `params.limit?` | `number` |
| `params.range?` | `"7d"` \| `"30d"` \| `"90d"` |

###### Returns

`Promise`\<\{
  `breakdown`: \{
     `count`: `number`;
     `label`: `string`;
     `value`: `string`;
  \}[];
  `eventType`: `string` \| `null`;
  `from`: `string`;
  `groupBy`: `string`;
  `range`: `string`;
  `series`: \{
     `count`: `number`;
     `date`: `string`;
     `eventType`: `string`;
  \}[];
  `to`: `string`;
  `totals`: \{
     `count`: `number`;
     `eventType`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ReturnType.getAssetAccessActivity
```

##### getAssetPage()

```ts
getAssetPage(assetId, params?): Promise<AssetPageResponse>;
```

Gets the page number an asset appears on based on specified filters and sorting.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset to find the page for. |
| `params?` | [`GetAssetPageParams`](routes/asset.md#getassetpageparams) | Query parameters for sorting, filtering, and pagination limit. |

###### Returns

`Promise`\<[`AssetPageResponse`](routes/asset.md#assetpageresponse)\>

Object containing the page number.

###### Inherited from

```ts
ReturnType.getAssetPage
```

##### getAssetReferences()

```ts
getAssetReferences(assetId): Promise<AssetReferences>;
```

Lists every location an asset is referenced — its primary file system and
each secondary reference (reviewer, submission, public), grouped and counted.

Renaming an asset retitles it at every one of these locations, and deleting
its last primary reference removes them all — so this is what the rename and
delete confirmations show the user before either happens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset. |

###### Returns

`Promise`\<`AssetReferences`\>

The asset's references.

###### Inherited from

```ts
ReturnType.getAssetReferences
```

##### getCustomThumbnailUploadUrl()

```ts
getCustomThumbnailUploadUrl(assetId, data): Promise<{
  assetId: string;
  expires: number;
  fileName: string;
  key: string;
  mimeType: string;
  status: string;
  uploadId: string;
  urls: string[];
}>;
```

Mint a signed multipart upload URL for a user-supplied custom thumbnail
image. The upload lands in the originals bucket tagged so the
post-processing Lambda generates the customThumbnail outputs and
registers them on the asset via the file-update callback.

Caller flow:
  1. multipartUpload(file, response.urls, response.key, response.uploadId)
  2. completeCustomThumbnailUpload({ assetId, key, uploadId, parts })
  3. wait for the assetFileUpdate websocket event

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetId` | `string` |
| `data` | \{ `fileName`: `string`; `mimeType`: `string`; `sizeInMB`: `number`; \} |
| `data.fileName` | `string` |
| `data.mimeType` | `string` |
| `data.sizeInMB` | `number` |

###### Returns

`Promise`\<\{
  `assetId`: `string`;
  `expires`: `number`;
  `fileName`: `string`;
  `key`: `string`;
  `mimeType`: `string`;
  `status`: `string`;
  `uploadId`: `string`;
  `urls`: `string`[];
\}\>

###### Inherited from

```ts
ReturnType.getCustomThumbnailUploadUrl
```

##### getDocumentViewUrl()

```ts
getDocumentViewUrl(assetId): Promise<DocumentViewUrlResponse>;
```

Mints a short-lived signed URL for rendering a document inline.

Documents keep their `media` PDF in the private bucket, so unlike images
and video it cannot be addressed by keyPath through the file CDN. Fetch
this per document open; do not cache it past `expires`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The document asset's ID. |

###### Returns

`Promise`\<[`DocumentViewUrlResponse`](routes/asset.md#documentviewurlresponse)\>

Signed URL, expiry and page count.

###### Inherited from

```ts
ReturnType.getDocumentViewUrl
```

##### getFile()

```ts
getFile(assetId, fileId): Promise<File>;
```

Retrieves a specific file from an asset.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset. |
| `fileId` | `string` | The ID of the file. |

###### Returns

`Promise`\<`File`\>

The file object.

###### Inherited from

```ts
ReturnType.getFile
```

##### getFilesByFunctionType()

```ts
getFilesByFunctionType(assetId, functionType): Promise<File[]>;
```

Retrieves files of a specific function type from an asset.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset. |
| `functionType` | `string` | The function type of the files (e.g., 'thumbnail', 'original'). |

###### Returns

`Promise`\<`File`[]\>

An array of file objects.

###### Inherited from

```ts
ReturnType.getFilesByFunctionType
```

##### getPublicLinks()

```ts
getPublicLinks(assetId, options?): Promise<{
  results: PublicAssetLink[];
}>;
```

Get all public download links for an asset.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The asset ID. |
| `options?` | \{ `bypassCache?`: `boolean`; \} | - |
| `options.bypassCache?` | `boolean` | - |

###### Returns

`Promise`\<\{
  `results`: [`PublicAssetLink`](routes/asset.md#publicassetlink)[];
\}\>

The public links.

###### Inherited from

```ts
ReturnType.getPublicLinks
```

##### getUploadSession()

```ts
getUploadSession(projectId, sessionId): UploadSessionData | null;
```

Get a specific upload session

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID |
| `sessionId` | `string` | The session ID |

###### Returns

`UploadSessionData` \| `null`

Upload session data or null if not found

###### Inherited from

```ts
ReturnType.getUploadSession
```

##### getUploadSessions()

```ts
getUploadSessions(projectId): UploadSessionData[];
```

Get all active upload sessions for a project

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID to get sessions for |

###### Returns

`UploadSessionData`[]

Array of upload session data

###### Inherited from

```ts
ReturnType.getUploadSessions
```

##### hasActiveUploads()

```ts
hasActiveUploads(staleMs?): boolean;
```

True when any upload is genuinely in flight anywhere in the app (across
all projects and tabs). Intended for app-level guards — e.g. suppressing
an automatic version-update page refresh while bytes are still uploading.
Stale (crashed-tab) sessions are ignored via the freshness window.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `staleMs?` | `number` | Max age of the last progress update that still counts as active (default: 2 minutes) |

###### Returns

`boolean`

###### Inherited from

```ts
ReturnType.hasActiveUploads
```

##### multipartUpload()

```ts
multipartUpload(
   file, 
   signedUrls, 
   key, 
   uploadId, 
   options?
): Promise<MultipartUploadResult>;
```

Uploads a file using multipart upload with the provided signed URLs

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `string` \| `File` \| `Blob` \| `Buffer`\<`ArrayBufferLike`\> | The file to upload (File/Blob in browser, Buffer/string path in Node.js) |
| `signedUrls` | `string`[] | Array of signed URLs for each part |
| `key` | `string` | The S3 key for the upload |
| `uploadId` | `string` | The S3 uploadId for the multipart upload |
| `options` | [`MultipartUploadOptions`](routes/asset.md#multipartuploadoptions) | Upload options |

###### Returns

`Promise`\<[`MultipartUploadResult`](routes/asset.md#multipartuploadresult)\>

The completed upload data

###### Inherited from

```ts
ReturnType.multipartUpload
```

##### offUploadSessionMessage()

```ts
offUploadSessionMessage(listenerId): void;
```

Unregister a cross-tab upload session message listener

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listenerId` | `string` | Unique listener ID |

###### Returns

`void`

###### Inherited from

```ts
ReturnType.offUploadSessionMessage
```

##### onUploadSessionMessage()

```ts
onUploadSessionMessage(listenerId, callback): void;
```

Register a listener for cross-tab upload session messages

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listenerId` | `string` | Unique listener ID |
| `callback` | (`message`) => `void` | Callback function to handle messages |

###### Returns

`void`

###### Inherited from

```ts
ReturnType.onUploadSessionMessage
```

##### promoteAttachmentToProject()

```ts
promoteAttachmentToProject(assetId, payload): Promise<{
  asset: Asset;
  deduped: boolean;
}>;
```

Promote a chat-message attachment into a project as a fresh,
independent project asset. The source attachment is left untouched;
the new project asset has its own lifecycle, post-processing
pipeline, and storage footprint.

Idempotent: a second promote of the same source into the same
project returns the existing promoted asset with `deduped: true`.

Requires `canCreateAsset` on the destination project — reviewers
are blocked. The server additionally rejects when the source
attachment's workspace doesn't match the destination project's.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetId` | `string` |
| `payload` | \{ `fileName?`: `string`; `projectId`: `string`; \} |
| `payload.fileName?` | `string` |
| `payload.projectId` | `string` |

###### Returns

`Promise`\<\{
  `asset`: `Asset`;
  `deduped`: `boolean`;
\}\>

###### Inherited from

```ts
ReturnType.promoteAttachmentToProject
```

##### reactivatePublicLink()

```ts
reactivatePublicLink(
   assetId, 
   linkId, 
   data?
): Promise<PublicAssetLink>;
```

Reactivate a disabled/expired public download link.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The asset ID. |
| `linkId` | `string` | The link ID. |
| `data?` | \{ `validity?`: `number`; \} | Reactivation data. |
| `data.validity?` | `number` | New validity in milliseconds. |

###### Returns

`Promise`\<[`PublicAssetLink`](routes/asset.md#publicassetlink)\>

The reactivated public link.

###### Inherited from

```ts
ReturnType.reactivatePublicLink
```

##### recordAccessActivity()

```ts
recordAccessActivity(assetId, body): Promise<void>;
```

Record an authenticated play event from the in-app player. Fire-and-forget;
server returns 204. Throw-on-failure is fine because the caller already
de-dupes per session.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetId` | `string` |
| `body` | \{ `eventType`: `"play_started"` \| `"play_completed"`; `visibility`: `"creator"` \| `"reviewer"`; \} |
| `body.eventType` | `"play_started"` \| `"play_completed"` |
| `body.visibility` | `"creator"` \| `"reviewer"` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ReturnType.recordAccessActivity
```

##### removeCustomThumbnail()

```ts
removeCustomThumbnail(assetId): Promise<Asset>;
```

Remove the custom thumbnail from an asset. Soft-deletes all custom
thumb files; the asset falls back to the auto-generated thumbnail.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetId` | `string` |

###### Returns

`Promise`\<`Asset`\>

###### Inherited from

```ts
ReturnType.removeCustomThumbnail
```

##### removeUploadSession()

```ts
removeUploadSession(projectId, sessionId): void;
```

Remove an upload session

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID |
| `sessionId` | `string` | The session ID |

###### Returns

`void`

###### Inherited from

```ts
ReturnType.removeUploadSession
```

##### repairAssets()

```ts
repairAssets(assetIds): Promise<RepairAssetsResponse>;
```

Attempts to repair assets (e.g., regenerate signed URLs for pending uploads).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetIds` | `string`[] | An array of asset IDs to repair. |

###### Returns

`Promise`\<[`RepairAssetsResponse`](routes/asset.md#repairassetsresponse)\>

Array of repair results.

###### Inherited from

```ts
ReturnType.repairAssets
```

##### tagAsset()

```ts
tagAsset(assetId, tagData): Promise<AssetWithChats>;
```

Tags an asset with a specific tag.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset to tag. |
| `tagData` | [`TagAssetData`](routes/asset.md#tagassetdata) | Data containing the tag ID. |

###### Returns

`Promise`\<[`AssetWithChats`](routes/asset.md#assetwithchats)\>

The updated asset object.

###### Inherited from

```ts
ReturnType.tagAsset
```

##### untagAsset()

```ts
untagAsset(assetId, untagData): Promise<AssetWithChats>;
```

Untags an asset by removing a specific tag.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset to untag. |
| `untagData` | [`UntagAssetData`](routes/asset.md#untagassetdata) | Data containing the tag ID to remove. |

###### Returns

`Promise`\<[`AssetWithChats`](routes/asset.md#assetwithchats)\>

The updated asset object.

###### Inherited from

```ts
ReturnType.untagAsset
```

##### updateAsset()

```ts
updateAsset(assetId, updateData): Promise<AssetWithChats>;
```

Updates an asset.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The ID of the asset to update. |
| `updateData` | [`UpdateAssetData`](routes/asset.md#updateassetdata) | Data to update (e.g., name, meta, tags, folderId). |

###### Returns

`Promise`\<[`AssetWithChats`](routes/asset.md#assetwithchats)\>

The updated asset object.

###### Inherited from

```ts
ReturnType.updateAsset
```

##### updatePublicLink()

```ts
updatePublicLink(
   assetId, 
   linkId, 
   data
): Promise<PublicAssetLink>;
```

Update a public download link (extend expiration or change status).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assetId` | `string` | The asset ID. |
| `linkId` | `string` | The link ID. |
| `data` | \{ `mode?`: [`PublicAssetLinkMode`](routes/asset.md#publicassetlinkmode-1); `status?`: `string`; `validity?`: `number`; \} | Update data. |
| `data.mode?` | [`PublicAssetLinkMode`](routes/asset.md#publicassetlinkmode-1) | - |
| `data.status?` | `string` | - |
| `data.validity?` | `number` | - |

###### Returns

`Promise`\<[`PublicAssetLink`](routes/asset.md#publicassetlink)\>

The updated public link.

###### Inherited from

```ts
ReturnType.updatePublicLink
```

***

### AuthMethods

#### Extends

- `ReturnType`\<*typeof* [`default`](routes/auth.md#default)\>

#### Methods

##### changePassword()

```ts
changePassword(
   currentPassword, 
   newPassword, 
   mfaToken?
): Promise<void>;
```

Changes the authenticated user's password.
Requires current password verification and MFA token if MFA is enabled.
All refresh tokens will be invalidated after password change.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `currentPassword` | `string` | The current password for verification. |
| `newPassword` | `string` | The new password. |
| `mfaToken?` | `string` | MFA token (required if MFA is enabled). |

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.changePassword
```

##### disableMfa()

```ts
disableMfa(mfaToken): Promise<void>;
```

Disables multi-factor authentication for the authenticated user.
Requires a current valid MFA token for confirmation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mfaToken` | `string` | The current MFA token code. |

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.disableMfa
```

##### enableMfa()

```ts
enableMfa(): Promise<MFAEnableResponse>;
```

Enables multi-factor authentication for the authenticated user.

###### Returns

`Promise`\<`MFAEnableResponse`\>

Promise resolving to MFA setup details (secret, OTP URL, backup codes).

###### Inherited from

```ts
ReturnType.enableMfa
```

##### exchangeOAuthCode()

```ts
exchangeOAuthCode(code): Promise<OAuthExchangeResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |

###### Returns

`Promise`\<`OAuthExchangeResponse`\>

###### Inherited from

```ts
ReturnType.exchangeOAuthCode
```

##### forgotPassword()

```ts
forgotPassword(email): Promise<void>;
```

Forgets a user's password.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `email` | `string` | The user's email address. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ReturnType.forgotPassword
```

##### getLinkedOAuthProviders()

```ts
getLinkedOAuthProviders(): Promise<LinkedAuthProvider[]>;
```

Gets all OAuth providers linked to the authenticated user's account.

###### Returns

`Promise`\<`LinkedAuthProvider`[]\>

Promise resolving to array of linked OAuth providers.

###### Inherited from

```ts
ReturnType.getLinkedOAuthProviders
```

##### linkOAuthProvider()

```ts
linkOAuthProvider(provider): Promise<LoginRegisterResponse>;
```

Links an OAuth provider to the authenticated user's account.
This allows users to sign in with multiple OAuth providers.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `provider` | `OAuthProvider` | The OAuth provider to link (google, apple, microsoft, adobe). |

###### Returns

`Promise`\<[`LoginRegisterResponse`](routes/auth.md#loginregisterresponse)\>

Promise resolving to user data with updated linked providers.

###### Inherited from

```ts
ReturnType.linkOAuthProvider
```

##### lockAccount()

```ts
lockAccount(token): Promise<void>;
```

Locks a user account using a lock account token.
This is used when a user receives a password changed notification
for a change they did not initiate, allowing them to immediately
secure their account.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `string` | The lock account token from the password changed email. |

###### Returns

`Promise`\<`void`\>

Promise resolving when the account is locked.

###### Inherited from

```ts
ReturnType.lockAccount
```

##### login()

```ts
login(credentials): Promise<LoginRegisterResponse>;
```

Logs in a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credentials` | [`LoginCredentials`](routes/auth.md#logincredentials) | Login credentials. |

###### Returns

`Promise`\<[`LoginRegisterResponse`](routes/auth.md#loginregisterresponse)\>

Object containing user info and tokens (or MFA challenge token).

###### Inherited from

```ts
ReturnType.login
```

##### logout()

```ts
logout(refreshToken): Promise<void>;
```

Logs out a user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `refreshToken` | `string` | The refresh token to invalidate. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ReturnType.logout
```

##### refreshTokens()

```ts
refreshTokens(refreshToken?): Promise<RefreshResponse>;
```

Refreshes user tokens.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `refreshToken?` | `string` | The refresh token. |

###### Returns

`Promise`\<[`RefreshResponse`](routes/auth.md#refreshresponse)\>

Object containing new access and refresh tokens.

###### Inherited from

```ts
ReturnType.refreshTokens
```

##### register()

```ts
register(userData): Promise<LoginRegisterResponse>;
```

Registers a new user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userData` | [`RegisterUserData`](routes/auth.md#registeruserdata) | User registration data. |

###### Returns

`Promise`\<[`LoginRegisterResponse`](routes/auth.md#loginregisterresponse)\>

Object containing user info and tokens.

###### Inherited from

```ts
ReturnType.register
```

##### registerGuest()

```ts
registerGuest(data): Promise<void>;
```

Registers a guest account for public chat participation.
Always returns void (204) regardless of outcome for anti-enumeration.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | \{ `color?`: `string`; `displayName`: `string`; `email`: `string`; `publicToken`: `string`; \} | Guest registration data (email, displayName, optional approved color, publicToken). |
| `data.color?` | `string` | - |
| `data.displayName` | `string` | - |
| `data.email` | `string` | - |
| `data.publicToken` | `string` | - |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ReturnType.registerGuest
```

##### resendVerification()

```ts
resendVerification(email): Promise<void>;
```

Public, unauthenticated resend of the verification email keyed by
address. For users past the verification grace window who can't log
in or call the authed sendVerificationEmail. Always resolves (the
server returns 204 regardless of whether the email exists).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `email` | `string` | The email address to resend the verification link to. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ReturnType.resendVerification
```

##### resetPassword()

```ts
resetPassword(params): Promise<void>;
```

Resets a user's password.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ResetPasswordData`](routes/auth.md#resetpassworddata) | Input parameters. |

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.resetPassword
```

##### sendVerificationEmail()

```ts
sendVerificationEmail(): Promise<void>;
```

Sends a verification email to the authenticated user.

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.sendVerificationEmail
```

##### setPassword()

```ts
setPassword(password, mfaToken?): Promise<void>;
```

Sets a password for an OAuth-only user account.
This allows OAuth users to add local authentication as a backup.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `password` | `string` | The password to set. |
| `mfaToken?` | `string` | MFA token (required if MFA is enabled). |

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.setPassword
```

##### unlinkOAuthProvider()

```ts
unlinkOAuthProvider(provider): Promise<void>;
```

Unlinks an OAuth provider from the authenticated user's account.
User must have at least one authentication method remaining (password or another OAuth provider).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `provider` | `OAuthProvider` | The OAuth provider to unlink (google, apple, microsoft, adobe). |

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.unlinkOAuthProvider
```

##### upgradeGuest()

```ts
upgradeGuest(data): Promise<{
  user: User;
}>;
```

Upgrades a guest account to a standard account with a password.
Requires the user to be authenticated as a guest.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | \{ `company?`: `string`; `firstName?`: `string`; `lastName?`: `string`; `password`: `string`; `userName?`: `string`; \} | Upgrade data (password, optional firstName, lastName, company, userName). |
| `data.company?` | `string` | - |
| `data.firstName?` | `string` | - |
| `data.lastName?` | `string` | - |
| `data.password` | `string` | - |
| `data.userName?` | `string` | - |

###### Returns

`Promise`\<\{
  `user`: `User`;
\}\>

Promise resolving to the upgraded user data.

###### Inherited from

```ts
ReturnType.upgradeGuest
```

##### verifyBackupCode()

```ts
verifyBackupCode(backupCode): Promise<MFAVerifyResponse>;
```

Verifies an MFA backup code.
This is used during login when a user has lost access to their authenticator app.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `backupCode` | `string` | The backup code (8-character hex string). |

###### Returns

`Promise`\<`MFAVerifyResponse`\>

Promise resolving to user/token data upon successful verification.

###### Inherited from

```ts
ReturnType.verifyBackupCode
```

##### verifyEmail()

```ts
verifyEmail(token): Promise<void>;
```

Verifies a user's email using the provided token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `string` | The email verification token. |

###### Returns

`Promise`\<`void`\>

Promise resolving when complete.

###### Inherited from

```ts
ReturnType.verifyEmail
```

##### verifyGuest()

```ts
verifyGuest(token): Promise<LoginRegisterResponse>;
```

Verifies a guest account using the token from the verification email.
Stores auth tokens on success and returns user data.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `string` | The guest verification token. |

###### Returns

`Promise`\<[`LoginRegisterResponse`](routes/auth.md#loginregisterresponse)\>

Promise resolving to user data and auth tokens.

###### Inherited from

```ts
ReturnType.verifyGuest
```

##### verifyMfa()

```ts
verifyMfa(mfaToken): Promise<MFAVerifyResponse>;
```

Verifies an MFA token (e.g., TOTP code).
This is used both during initial MFA setup and during login challenges.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mfaToken` | `string` | The MFA token code. |

###### Returns

`Promise`\<`MFAVerifyResponse`\>

Promise resolving to user/token data upon successful verification.

###### Inherited from

```ts
ReturnType.verifyMfa
```

***

### NuramaClientOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="apikey"></a> `apiKey?` | `string` | Long-lived API key to use for every request (e.g., a bot API key starting with `nrm_bot_`). When set, the client skips JWT refresh logic and uses the key as the bearer token. |
| <a id="browsermode-1"></a> `browserMode?` | `boolean` | Whether to run in browser mode (uses localStorage for token storage). Default: false |
| <a id="cachedurationseconds-1"></a> `cacheDurationSeconds?` | `number` | Cache duration in seconds. Default: 5 |
| <a id="debug-1"></a> `debug?` | `boolean` | Enable debug logging. Default: false |
| <a id="enablecache-1"></a> `enableCache?` | `boolean` | Enable response caching. Default: true |
| <a id="fetch-1"></a> `fetch?` | (`input`, `init?`) => `Promise`\<`Response`\> | Custom fetch implementation. If not provided, will use global fetch |
| <a id="invalidatecacheonmutation-1"></a> `invalidateCacheOnMutation?` | `boolean` | After a successful write (POST/PUT/PATCH/DELETE) to a resource, evict cached GET responses for that resource so the next read returns fresh data (read-after-write consistency). Default: true. |
| <a id="onmaintenance"></a> `onMaintenance?` | () => `void` | Invoked when the API returns a `{ error: 'maintenance' }` body on a 418 or 503 — i.e. the site is in a maintenance window (the edge rule returns this to non-allowlisted clients; a Cloudflare WAF block can only be a 4xx, so 418 — a guaranteed-unused sentinel — is used there, while a Worker/origin can return 503). Lets an already-loaded (cached) SPA surface a maintenance message instead of failing silently. |
| <a id="onunauthorized"></a> `onUnauthorized?` | (`reason?`) => `void` | Callback invoked when authentication fails and re-login is required (e.g., refresh token expired/missing). `reason.type` carries the backend error type when available — notably `emailVerificationRequired` when the refresh was rejected because the user's email-verification grace period has expired, so callers can prompt verification instead of a plain logout. |
| <a id="refreshlocktimeoutms-1"></a> `refreshLockTimeoutMs?` | `number` | Timeout in ms for the refresh lock to prevent multiple simultaneous refreshes. Default: 5000 |
| <a id="refreshtokenstoragekey-1"></a> `refreshTokenStorageKey?` | `string` | Key used to store the refresh token in storage. Default: 'nurama_refresh_token' |
| <a id="tokenexpirybufferseconds-1"></a> `tokenExpiryBufferSeconds?` | `number` | Number of seconds before token expiry to trigger refresh. Default: 300 (5 minutes) |
| <a id="tokenrefreshmaxwaitms-1"></a> `tokenRefreshMaxWaitMs?` | `number` | Maximum time in ms to wait for token refresh. Default: 10000 |
| <a id="tokenrefreshretrydelayms-1"></a> `tokenRefreshRetryDelayMs?` | `number` | Delay in ms between token refresh retries. Default: 1000 |
| <a id="tokenstoragekey-1"></a> `tokenStorageKey?` | `string` | Key used to store the access token in storage. Default: 'nurama_token' |
| <a id="websocketurl-1"></a> `websocketURL?` | `string` | WebSocket server URL. If not provided, will use the baseURL |

***

### ProjectMethods

#### Extends

- `ReturnType`\<*typeof* [`default`](routes/project.md#default)\>

#### Methods

##### addItemsToPublicFileSystem()

```ts
addItemsToPublicFileSystem(
   projectId, 
   publicId, 
   addItemsData
): Promise<PublicFileSystemResponse>;
```

Adds additional items to an existing public file system.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publicId` | `string` | The ID of the public file system. |
| `addItemsData` | [`AddItemsToPublicFileSystemData`](routes/project.md#additemstopublicfilesystemdata) | Data for adding items. |

###### Returns

`Promise`\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>

The updated public file system object.

###### Inherited from

```ts
ReturnType.addItemsToPublicFileSystem
```

##### addItemsToSubmission()

```ts
addItemsToSubmission(
   projectId, 
   submissionId, 
   addItemsData
): Promise<ChatSubmission>;
```

Adds items to an existing submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `addItemsData` | [`AddItemsToSubmissionData`](routes/project.md#additemstosubmissiondata) | Data for adding items to the submission. |

###### Returns

`Promise`\<`ChatSubmission`\>

The updated submission object.

###### Inherited from

```ts
ReturnType.addItemsToSubmission
```

##### copyItemsToPath()

```ts
copyItemsToPath(
   projectId, 
   visibility, 
   copyData
): Promise<{
  count: number;
}>;
```

Copies items to a specific path within a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `copyData` | [`CopyItemsData`](routes/project.md#copyitemsdata) | Data for copying items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of copied items.

###### Inherited from

```ts
ReturnType.copyItemsToPath
```

##### copyPublicItemsAtPath()

```ts
copyPublicItemsAtPath(
   projectId, 
   token, 
   copyData
): Promise<{
  count: number;
}>;
```

Copies items within a public file system (authenticated management).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `copyData` | [`CopyPublicItemsData`](routes/project.md#copypublicitemsdata) | Data for copying items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of copied items.

###### Inherited from

```ts
ReturnType.copyPublicItemsAtPath
```

##### copySubmissionItems()

```ts
copySubmissionItems(
   projectId, 
   submissionId, 
   copyData
): Promise<{
  count: number;
}>;
```

Copies items within a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `copyData` | [`CopySubmissionItemsData`](routes/project.md#copysubmissionitemsdata) | Data for copying items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of copied items.

###### Inherited from

```ts
ReturnType.copySubmissionItems
```

##### createAssets()

```ts
createAssets(projectId, fileUploadBody): Promise<any[]>;
```

Create assets within a project and return their signed links for upload.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `fileUploadBody` | [`ProjectFileUploadBody`](routes/project.md#projectfileuploadbody) | List of files to upload with optional destination path. |

###### Returns

`Promise`\<`any`[]\>

Array of results, each containing asset info and signed URL data.

###### Inherited from

```ts
ReturnType.createAssets
```

##### createFolder()

```ts
createFolder(
   projectId, 
   visibility, 
   folderData
): Promise<Folder>;
```

Creates a folder within a project with file system integration.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `folderData` | [`CreateFolderData`](routes/project.md#createfolderdata) | Data for creating the folder. |

###### Returns

`Promise`\<`Folder`\>

The created folder object.

###### Inherited from

```ts
ReturnType.createFolder
```

##### createLogo()

```ts
createLogo(projectId, logoData): Promise<any>;
```

Creates a new logo asset for a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `logoData` | [`LogoUploadData`](routes/project.md#logouploaddata) | File metadata for the logo. |

###### Returns

`Promise`\<`any`\>

Object containing signed URL data and updated project info.

###### Inherited from

```ts
ReturnType.createLogo
```

##### createProject()

```ts
createProject(projectData): Promise<Project>;
```

Creates a new project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectData` | [`CreateProjectData`](routes/project.md#createprojectdata) | Data for the new project. |

###### Returns

`Promise`\<`Project`\>

The created project object.

###### Inherited from

```ts
ReturnType.createProject
```

##### createProjectPublicAssetChatMessage()

```ts
createProjectPublicAssetChatMessage(
   projectId, 
   token, 
   assetId, 
   data
): Promise<CreatePublicAssetChatMessageResponse>;
```

Creates a message on an asset's public chat from an authenticated project context.
Creates the chat lazily if it doesn't exist yet.
Unlike the public endpoint, this does NOT check token expiration.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `assetId` | `string` | The ID of the asset. |
| `data` | `CreatePublicChatMessageRequest` | Message data. |

###### Returns

`Promise`\<`CreatePublicAssetChatMessageResponse`\>

The chat and created message.

###### Inherited from

```ts
ReturnType.createProjectPublicAssetChatMessage
```

##### createProjectPublicChatMessage()

```ts
createProjectPublicChatMessage(
   projectId, 
   token, 
   chatId, 
   data
): Promise<ChatMessage>;
```

Creates a message in an existing public chat from an authenticated project context.
Unlike the public endpoint, this does NOT check token expiration.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `chatId` | `string` | The ID of the chat. |
| `data` | `CreatePublicChatMessageRequest` | Message data. |

###### Returns

`Promise`\<`ChatMessage`\>

The created message.

###### Inherited from

```ts
ReturnType.createProjectPublicChatMessage
```

##### createProjectPublicTopicChatMessage()

```ts
createProjectPublicTopicChatMessage(
   projectId, 
   token, 
   data
): Promise<CreatePublicAssetChatMessageResponse>;
```

Creates a message on the main public topic chat from an authenticated project context.
Creates the chat lazily if it doesn't exist yet.
Unlike the public endpoint, this does NOT check token expiration.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `data` | `CreatePublicChatMessageRequest` | Message data. |

###### Returns

`Promise`\<`CreatePublicAssetChatMessageResponse`\>

The chat and created message.

###### Inherited from

```ts
ReturnType.createProjectPublicTopicChatMessage
```

##### createPublicFileSystem()

```ts
createPublicFileSystem(projectId, publicFileSystemData): Promise<PublicFileSystemResponse>;
```

Creates a public file system with a secure token for sharing project assets publicly.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publicFileSystemData` | [`CreatePublicFileSystemData`](routes/project.md#createpublicfilesystemdata) | Data for creating the public file system. |

###### Returns

`Promise`\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>

The created public file system object.

###### Inherited from

```ts
ReturnType.createPublicFileSystem
```

##### createPublicFolder()

```ts
createPublicFolder(
   projectId, 
   token, 
   folderData
): Promise<Folder>;
```

Creates a folder inside a public file system (authenticated management).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `folderData` | [`CreateFolderData`](routes/project.md#createfolderdata) | Data for creating the folder (name, color, basePath). |

###### Returns

`Promise`\<`Folder`\>

The created folder object.

###### Inherited from

```ts
ReturnType.createPublicFolder
```

##### createSubmission()

```ts
createSubmission(projectId, submissionData): Promise<ChatSubmission>;
```

Creates a new submission for a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionData` | [`CreateSubmissionData`](routes/project.md#createsubmissiondata) | Data for the submission. |

###### Returns

`Promise`\<`ChatSubmission`\>

The created submission object.

###### Inherited from

```ts
ReturnType.createSubmission
```

##### createSubmissionFolder()

```ts
createSubmissionFolder(
   projectId, 
   submissionId, 
   folderData
): Promise<Folder>;
```

Creates a folder within a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `folderData` | [`CreateSubmissionFolderData`](routes/project.md#createsubmissionfolderdata) | Data for creating the folder. |

###### Returns

`Promise`\<`Folder`\>

The created folder object.

###### Inherited from

```ts
ReturnType.createSubmissionFolder
```

##### deleteItemsAtPath()

```ts
deleteItemsAtPath(
   projectId, 
   visibility, 
   deleteData
): Promise<{
  count: number;
}>;
```

Deletes items at a specific path within a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `deleteData` | [`DeleteItemsData`](routes/project.md#deleteitemsdata) | Data for deleting items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of deleted items.

###### Inherited from

```ts
ReturnType.deleteItemsAtPath
```

##### deleteProject()

```ts
deleteProject(projectId): Promise<void>;
```

Deletes a project (marks for deletion).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project to delete. |

###### Returns

`Promise`\<`void`\>

The deleted public release record.

###### Inherited from

```ts
ReturnType.deleteProject
```

##### deletePublicFileSystem()

```ts
deletePublicFileSystem(projectId, publicId): Promise<PublicFileSystemResponse>;
```

Deletes a public file system and invalidates its access token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publicId` | `string` | The ID of the public file system. |

###### Returns

`Promise`\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>

The deleted public release record.

###### Inherited from

```ts
ReturnType.deletePublicFileSystem
```

##### deletePublicItemsAtPath()

```ts
deletePublicItemsAtPath(
   projectId, 
   token, 
   deleteData
): Promise<{
  count: number;
}>;
```

Deletes items from a public file system (authenticated management).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `deleteData` | [`DeletePublicItemsData`](routes/project.md#deletepublicitemsdata) | Data for deleting items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of deleted items.

###### Inherited from

```ts
ReturnType.deletePublicItemsAtPath
```

##### deleteSubmissionItems()

```ts
deleteSubmissionItems(
   projectId, 
   submissionId, 
   deleteData
): Promise<{
  count: number;
}>;
```

Deletes items within a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `deleteData` | [`DeleteSubmissionItemsData`](routes/project.md#deletesubmissionitemsdata) | Data for deleting items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of deleted items.

###### Inherited from

```ts
ReturnType.deleteSubmissionItems
```

##### getAssets()

```ts
getAssets(
   projectId, 
   visibility, 
   params?
): Promise<PaginatedResponse<Asset>>;
```

Lists a project's assets for one visibility tier.
`creator` requires `canGetCreatorAssets`; `reviewer` requires `canGetReviewerAssets`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID. |
| `visibility` | `"creator"` \| `"reviewer"` | Which tier's assets to list. |
| `params?` | [`ListAssetsParams`](routes/project.md#listassetsparams) | Filters and pagination. See ListAssetsParams. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`Asset`\>\>

Paginated assets.

###### Throws

'projectId is required.' or 'visibility is required.'.

###### Inherited from

```ts
ReturnType.getAssets
```

##### getFolders()

```ts
getFolders(
   projectId, 
   visibility, 
   params?
): Promise<PaginatedResponse<Folder>>;
```

Gets folders within a project with specified visibility.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `params?` | [`ListFoldersParams`](routes/project.md#listfoldersparams) | Query parameters for filtering and pagination. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`Folder`\>\>

Paginated list of folders.

###### Inherited from

```ts
ReturnType.getFolders
```

##### getHighlightedMessages()

```ts
getHighlightedMessages(
   projectId, 
   visibility, 
   params?
): Promise<PaginatedResponse<ChatMessage>>;
```

Lists highlighted chat messages across a project for one visibility tier (cursor pagination only).
`creator` requires `canGetCreatorHighlights`; `reviewer` requires `canGetReviewerHighlights`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID. |
| `visibility` | `"creator"` \| `"reviewer"` | Which tier's highlights to list. |
| `params?` | [`GetHighlightedMessagesParams`](routes/project.md#gethighlightedmessagesparams) | Cursor pagination. See GetHighlightedMessagesParams. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`ChatMessage`\>\>

Paginated highlighted messages.

###### Throws

'projectId is required.' or 'visibility is required.'.

###### Inherited from

```ts
ReturnType.getHighlightedMessages
```

##### getHomeFeed()

```ts
getHomeFeed(
   projectId, 
   visibility, 
   params?
): Promise<PaginatedResponse<Asset>>;
```

Gets the home feed for a project with a specified visibility.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `params?` | [`ListFeedParams`](routes/project.md#listfeedparams) | Query parameters for filtering and pagination. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`Asset`\>\>

Paginated feed items.

###### Inherited from

```ts
ReturnType.getHomeFeed
```

##### getItemsAtPath()

```ts
getItemsAtPath(
   projectId, 
   visibility, 
   path?, 
   params?, 
   usePost?
): Promise<PaginatedResponse<any>>;
```

Gets items at a specific path within a project.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `projectId` | `string` | `undefined` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | `undefined` | The visibility context ('creator' or 'reviewer'). |
| `path?` | `string` | `undefined` | The path to get items from (optional, defaults to root). |
| `params?` | [`GetItemsAtPathParams`](routes/project.md#getitemsatpathparams) | `undefined` | Query parameters for filtering and pagination. |
| `usePost?` | `boolean` | `false` | Whether to use POST method (useful for large resourceIds arrays). |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`any`\>\>

Paginated list of items at the path.

###### Inherited from

```ts
ReturnType.getItemsAtPath
```

##### getProject()

```ts
getProject(projectId): Promise<Project>;
```

Retrieves a specific project by its ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |

###### Returns

`Promise`\<`Project`\>

The project object.

###### Inherited from

```ts
ReturnType.getProject
```

##### getProjectChat()

```ts
getProjectChat(
   projectId, 
   visibility, 
   params?
): Promise<Chat>;
```

Gets the project chat with the specified visibility.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `params?` | [`GetChatParams`](routes/project.md#getchatparams) | Query parameters for message/reply limits. |

###### Returns

`Promise`\<`Chat`\>

The chat object.

###### Inherited from

```ts
ReturnType.getProjectChat
```

##### getProjectPublicAsset()

```ts
getProjectPublicAsset(
   projectId, 
   token, 
   assetId
): Promise<PublicAssetResponse>;
```

Gets a public asset with its public chat from an authenticated project context.
Unlike the public endpoint, this does NOT check token expiration.
Use this for internal management of public file systems.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `assetId` | `string` | The ID of the asset to retrieve. |

###### Returns

`Promise`\<`PublicAssetResponse`\>

The asset with its public chat.

###### Inherited from

```ts
ReturnType.getProjectPublicAsset
```

##### getProjectPublicChat()

```ts
getProjectPublicChat(projectId, token): Promise<any>;
```

Gets a public chat from an authenticated project context.
Unlike the public endpoint, this does NOT check token expiration.
Use this for internal management of public file systems.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |

###### Returns

`Promise`\<`any`\>

The public chat or null if none exists.

###### Inherited from

```ts
ReturnType.getProjectPublicChat
```

##### getProjectPublicChatMessages()

```ts
getProjectPublicChatMessages(
   projectId, 
   token, 
   chatId, 
   params?
): Promise<PublicChatMessagesResponse>;
```

Gets messages from a public chat from an authenticated project context.
Unlike the public endpoint, this does NOT check token expiration.
Use this for internal management of public file systems.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `chatId` | `string` | The ID of the chat. |
| `params?` | [`GetPublicChatMessagesParams`](routes/project.md#getpublicchatmessagesparams) | Query parameters for pagination. |

###### Returns

`Promise`\<`PublicChatMessagesResponse`\>

Paginated list of chat messages.

###### Inherited from

```ts
ReturnType.getProjectPublicChatMessages
```

##### getProjects()

```ts
getProjects(): Promise<Project[]>;
```

Retrieves projects accessible by the user.
NOTE: API endpoint `/v1/projects` does not currently support pagination.

###### Returns

`Promise`\<`Project`[]\>

List of project objects.

###### Inherited from

```ts
ReturnType.getProjects
```

##### getPublicAudit()

```ts
getPublicAudit(projectId, params?): Promise<PaginatedResponse<PublicAuditAssetResponse>>;
```

Get the public audit for a project — assets that are or have been publicly exposed.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | - |
| `params?` | \{ `currentlyPublic?`: `boolean`; `limit?`: `number`; `page?`: `number`; \} | - |
| `params.currentlyPublic?` | `boolean` | When true, only assets currently public. |
| `params.limit?` | `number` | - |
| `params.page?` | `number` | - |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<[`PublicAuditAssetResponse`](routes/project.md#publicauditassetresponse)\>\>

###### Requires

`projectAdmin` or `projectOwner` on the project (or workspace-tier admin via inheritance).

###### Inherited from

```ts
ReturnType.getPublicAudit
```

##### getPublicFileSystem()

```ts
getPublicFileSystem(projectId, publicId): Promise<PublicFileSystemResponse>;
```

Retrieves a specific public file system by its ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publicId` | `string` | The ID of the public file system. |

###### Returns

`Promise`\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>

The public file system object.

###### Inherited from

```ts
ReturnType.getPublicFileSystem
```

##### getPublicFileSystems()

```ts
getPublicFileSystems(projectId, params?): Promise<PaginatedResponse<PublicFileSystemResponse>>;
```

Gets all public file systems for a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `params?` | [`ListPublicFileSystemsParams`](routes/project.md#listpublicfilesystemsparams) | Query parameters (pagination, sort, search, status, creatorId). |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>\>

Paginated list of public file systems.

###### Inherited from

```ts
ReturnType.getPublicFileSystems
```

##### getPublicItemsAtPath()

```ts
getPublicItemsAtPath(
   projectId, 
   token, 
   path?, 
   params?
): Promise<PaginatedResponse<any>>;
```

Gets items from a public file system at a specific path (authenticated management).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `path?` | `string` | The path to get items from (optional, defaults to root). |
| `params?` | [`GetItemsAtPathParams`](routes/project.md#getitemsatpathparams) | Query parameters for filtering and pagination. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`any`\>\>

Paginated list of public file system items.

###### Inherited from

```ts
ReturnType.getPublicItemsAtPath
```

##### getSubmission()

```ts
getSubmission(
   projectId, 
   submissionId, 
   params?
): Promise<ChatSubmission>;
```

Retrieves a specific submission by its ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `params?` | [`GetSubmissionParams`](routes/project.md#getsubmissionparams) | Query parameters for chat message/reply options. |

###### Returns

`Promise`\<`ChatSubmission`\>

The submission object.

###### Inherited from

```ts
ReturnType.getSubmission
```

##### getSubmissionItems()

```ts
getSubmissionItems(
   projectId, 
   submissionId, 
   path?, 
   params?
): Promise<PaginatedResponse<any>>;
```

Gets files for a specific submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `path?` | `string` | The path to get items from (optional, defaults to root). |
| `params?` | [`GetItemsAtPathParams`](routes/project.md#getitemsatpathparams) | Query parameters for filtering and pagination. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`any`\>\>

Paginated list of files.

###### Inherited from

```ts
ReturnType.getSubmissionItems
```

##### getSubmissions()

```ts
getSubmissions(projectId, params?): Promise<PaginatedResponse<ChatSubmission>>;
```

Retrieves submissions for a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `params?` | [`ListSubmissionsParams`](routes/project.md#listsubmissionsparams) | Query parameters for filtering and pagination. |

###### Returns

`Promise`\<[`PaginatedResponse`](routes/project.md#paginatedresponse)\<`ChatSubmission`\>\>

Paginated list of submissions.

###### Inherited from

```ts
ReturnType.getSubmissions
```

##### getTopAccessActivity()

```ts
getTopAccessActivity(projectId, params?): Promise<ProjectTopAccessActivityResponse>;
```

Top-N assets in a project by access-activity event type (plays, downloads, embeds).
Requires project read access. Returns asset IDs and counts only; hydrate names and
thumbnails through the normal asset fetch path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID. |
| `params?` | \{ `eventType?`: `"play_started"` \| `"play_completed"` \| `"download"` \| `"embed_resolved"`; `limit?`: `number`; `range?`: `"7d"` \| `"30d"` \| `"90d"`; \} | `range` ('7d' | '30d' | '90d'), `eventType`, `limit`. |
| `params.eventType?` | `"play_started"` \| `"play_completed"` \| `"download"` \| `"embed_resolved"` | - |
| `params.limit?` | `number` | - |
| `params.range?` | `"7d"` \| `"30d"` \| `"90d"` | - |

###### Returns

`Promise`\<[`ProjectTopAccessActivityResponse`](routes/project.md#projecttopaccessactivityresponse)\>

Ranked asset IDs with counts.

###### Throws

'projectId is required.' when `projectId` is falsy.

###### Inherited from

```ts
ReturnType.getTopAccessActivity
```

##### moveItemsToPath()

```ts
moveItemsToPath(
   projectId, 
   visibility, 
   moveData
): Promise<MoveItemsResult>;
```

Moves items to a specific path within a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `visibility` | `"creator"` \| `"reviewer"` | The visibility context ('creator' or 'reviewer'). |
| `moveData` | [`MoveItemsData`](routes/project.md#moveitemsdata) | Data for moving items. |

###### Returns

`Promise`\<[`MoveItemsResult`](routes/project.md#moveitemsresult)\>

Object containing the count of moved items.

###### Inherited from

```ts
ReturnType.moveItemsToPath
```

##### movePublicItemsAtPath()

```ts
movePublicItemsAtPath(
   projectId, 
   token, 
   moveData
): Promise<{
  count: number;
}>;
```

Moves items within a public file system (authenticated management).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `token` | `string` | The public access token. |
| `moveData` | [`MovePublicItemsData`](routes/project.md#movepublicitemsdata) | Data for moving items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of moved items.

###### Inherited from

```ts
ReturnType.movePublicItemsAtPath
```

##### moveSubmissionItems()

```ts
moveSubmissionItems(
   projectId, 
   submissionId, 
   moveData
): Promise<{
  count: number;
}>;
```

Moves items within a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `moveData` | [`MoveSubmissionItemsData`](routes/project.md#movesubmissionitemsdata) | Data for moving items. |

###### Returns

`Promise`\<\{
  `count`: `number`;
\}\>

Object containing the count of moved items.

###### Inherited from

```ts
ReturnType.moveSubmissionItems
```

##### previewDeleteItemsAtPath()

```ts
previewDeleteItemsAtPath(
   projectId, 
   visibility, 
   deleteData
): Promise<DeleteImpact>;
```

Asks what deleting these paths would reach, without deleting anything.

Computed from the same cascade the delete runs, so the answer is what
will happen rather than an estimate of it. Only SECONDARY references
come back — the reviewer, submission and public-release copies that
would go with the selection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | - |
| `visibility` | `"creator"` \| `"reviewer"` | - |
| `deleteData` | [`DeleteItemsData`](routes/project.md#deleteitemsdata) | The same body the delete takes. |

###### Returns

`Promise`\<`DeleteImpact`\>

###### Inherited from

```ts
ReturnType.previewDeleteItemsAtPath
```

##### publishItems()

```ts
publishItems(projectId, publishData): Promise<any>;
```

Publishes a list of items (assets, folders) within a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publishData` | [`PublishItemsData`](routes/project.md#publishitemsdata) | Data for publishing items. |

###### Returns

`Promise`\<`any`\>

Object containing lists of published items and results.

###### Inherited from

```ts
ReturnType.publishItems
```

##### releasePublicFileSystem()

```ts
releasePublicFileSystem(projectId, publicId): Promise<PublicFileSystemResponse>;
```

Releases a staged (unreleased) public file system, making it externally
accessible via its public token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publicId` | `string` | The ID of the public file system. |

###### Returns

`Promise`\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>

The released public file system object.

###### Inherited from

```ts
ReturnType.releasePublicFileSystem
```

##### releaseSubmission()

```ts
releaseSubmission(projectId, submissionId): Promise<ChatSubmission>;
```

Releases a staged (unreleased) submission, making it visible to reviewers
and firing the deferred "new submission" side effects (emails,
notifications, system messages).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |

###### Returns

`Promise`\<`ChatSubmission`\>

The released submission object.

###### Inherited from

```ts
ReturnType.releaseSubmission
```

##### releaseSubmissionUpdate()

```ts
releaseSubmissionUpdate(projectId, submissionId): Promise<ChatSubmission>;
```

Re-releases an already-released submission's side effects (the "Release
Update" action) — re-notifies reviewers with the submission-update email
template + `submissionUpdate` notification. Does not change status.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |

###### Returns

`Promise`\<`ChatSubmission`\>

The submission object.

###### Inherited from

```ts
ReturnType.releaseSubmissionUpdate
```

##### searchProject()

```ts
searchProject(projectId, params): Promise<SearchResponse>;
```

Full-text search across assets, chat messages, and tasks within a project.
Results are populated per the content type's native list view (asset →
creator/publisher/tags; chatMessage → author/mentions/attachments; task →
creator/assignee/project/origin).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | - |
| `params` | `SearchProjectParams` | At minimum `q`. Optional filters: `contentTypes`, `dateFrom`, `dateTo`, `creatorId`, `sortBy`, `page`, `limit`. |

###### Returns

`Promise`\<`SearchResponse`\>

Paginated search results.

###### Inherited from

```ts
ReturnType.searchProject
```

##### tagSubmission()

```ts
tagSubmission(
   projectId, 
   submissionId, 
   tagData
): Promise<ChatSubmission>;
```

Adds a tag to a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `tagData` | [`TagSubmissionData`](routes/project.md#tagsubmissiondata) | Data for tagging the submission. |

###### Returns

`Promise`\<`ChatSubmission`\>

The updated submission object.

###### Inherited from

```ts
ReturnType.tagSubmission
```

##### unpublishItems()

```ts
unpublishItems(projectId, unpublishData): Promise<any>;
```

Unpublishes a list of items (assets, folders) within a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `unpublishData` | [`UnpublishItemsData`](routes/project.md#unpublishitemsdata) | Data for unpublishing items. |

###### Returns

`Promise`\<`any`\>

Object containing lists of unpublished items and results.

###### Inherited from

```ts
ReturnType.unpublishItems
```

##### untagSubmission()

```ts
untagSubmission(
   projectId, 
   submissionId, 
   tagData
): Promise<ChatSubmission>;
```

Removes a tag from a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `tagData` | [`TagSubmissionData`](routes/project.md#tagsubmissiondata) | Data for untagging the submission. |

###### Returns

`Promise`\<`ChatSubmission`\>

The updated submission object.

###### Inherited from

```ts
ReturnType.untagSubmission
```

##### updateLogo()

```ts
updateLogo(projectId, logoData): Promise<any>;
```

Updates the logo asset for a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `logoData` | [`LogoUploadData`](routes/project.md#logouploaddata) | File metadata for the new logo. |

###### Returns

`Promise`\<`any`\>

Object containing signed URL data and updated project info.

###### Inherited from

```ts
ReturnType.updateLogo
```

##### updateProject()

```ts
updateProject(projectId, updateData): Promise<Project>;
```

Updates a project.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project to update. |
| `updateData` | [`UpdateProjectData`](routes/project.md#updateprojectdata) | Data to update. |

###### Returns

`Promise`\<`Project`\>

The updated project object.

###### Inherited from

```ts
ReturnType.updateProject
```

##### updatePublicFileSystem()

```ts
updatePublicFileSystem(
   projectId, 
   publicId, 
   updateData
): Promise<PublicFileSystemResponse>;
```

Updates an existing public file system's title and description.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `publicId` | `string` | The ID of the public file system. |
| `updateData` | [`UpdatePublicFileSystemData`](routes/project.md#updatepublicfilesystemdata) | Data to update. |

###### Returns

`Promise`\<[`PublicFileSystemResponse`](routes/project.md#publicfilesystemresponse)\>

The updated public file system object.

###### Inherited from

```ts
ReturnType.updatePublicFileSystem
```

##### updateSetting()

```ts
updateSetting(
   projectId, 
   name, 
   value
): Promise<Project>;
```

Updates a single project setting (e.g. `aiPolishEnabled`,
`aiCustomPreprompt`). Pass `null` to inherit the workspace's value;
pass a typed value to override. The valid setting names are validated
server-side against `projectService.validProjectSettings`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | - |
| `name` | `string` | Setting key (e.g. 'aiPolishEnabled'). |
| `value` | `unknown` | null (inherit) | boolean | string. |

###### Returns

`Promise`\<`Project`\>

###### Inherited from

```ts
ReturnType.updateSetting
```

##### updateSubmission()

```ts
updateSubmission(
   projectId, 
   submissionId, 
   updateData
): Promise<ChatSubmission>;
```

Updates a submission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The ID of the project. |
| `submissionId` | `string` | The ID of the submission. |
| `updateData` | [`UpdateSubmissionData`](routes/project.md#updatesubmissiondata) | Data to update. |

###### Returns

`Promise`\<`ChatSubmission`\>

The updated submission object.

###### Inherited from

```ts
ReturnType.updateSubmission
```

***

### SDKVersionInfo

SDK Version Information
AUTO-GENERATED - DO NOT EDIT MANUALLY
Generated at: 2026-09-22T12:15:55.662Z

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="buildhash"></a> `buildHash` | `string` |
| <a id="buildtimestamp"></a> `buildTimestamp` | `string` |
| <a id="gitcommit"></a> `gitCommit` | `string` |
| <a id="version-1"></a> `version` | `string` |

***

### SubscriptionMethods

#### Extends

- `ReturnType`\<*typeof* [`default`](routes/subscription.md#default)\>

#### Methods

##### cancelWorkspaceSubscription()

```ts
cancelWorkspaceSubscription(workspaceId): Promise<any>;
```

Cancels the subscription for a specific workspace.
Requires authentication and permission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |

###### Returns

`Promise`\<`any`\>

The cancellation response.

###### Inherited from

```ts
ReturnType.cancelWorkspaceSubscription
```

##### createWorkspaceOrder()

```ts
createWorkspaceOrder(workspaceId, orderData): Promise<any>;
```

Creates a subscription order for a specific workspace.
Requires authentication and permission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |
| `orderData` | [`CreateWorkspaceOrderParams`](routes/subscription.md#createworkspaceorderparams) | The order data. |

###### Returns

`Promise`\<`any`\>

The created order response.

###### Inherited from

```ts
ReturnType.createWorkspaceOrder
```

##### getResourceLimits()

```ts
getResourceLimits(resourceId): Promise<ResourceLimits>;
```

Retrieves the resource limits (e.g., storage, seats) for a specific resource (typically workspace).
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceId` | `string` | The ID of the resource (e.g., workspaceId). |

###### Returns

`Promise`\<[`ResourceLimits`](routes/subscription.md#resourcelimits)\>

An object containing the resource limits.

###### Inherited from

```ts
ReturnType.getResourceLimits
```

##### getRoleUsage()

```ts
getRoleUsage(resourceId): Promise<RoleUsage>;
```

Retrieves per-role (creator / reviewer) seat usage and caps for a
workspace. `limit` is `null` when the plan is unlimited for that
seat type. Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceId` | `string` | The workspace ID. |

###### Returns

`Promise`\<[`RoleUsage`](routes/subscription.md#roleusage)\>

Creator- and reviewer-side seat usage.

###### Inherited from

```ts
ReturnType.getRoleUsage
```

##### getSeatUsage()

```ts
getSeatUsage(resourceId): Promise<SeatUsage>;
```

Retrieves the seat usage for a specific resource (typically workspace).
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceId` | `string` | The ID of the resource (e.g., workspaceId). |

###### Returns

`Promise`\<[`SeatUsage`](routes/subscription.md#seatusage)\>

An object containing seat usage details.

###### Inherited from

```ts
ReturnType.getSeatUsage
```

##### getStorageUsage()

```ts
getStorageUsage(resourceId): Promise<StorageUsage>;
```

Retrieves the storage usage for a specific resource (typically workspace).
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceId` | `string` | The ID of the resource (e.g., workspaceId). |

###### Returns

`Promise`\<[`StorageUsage`](routes/subscription.md#storageusage)\>

An object containing storage usage details.

###### Inherited from

```ts
ReturnType.getStorageUsage
```

##### getUserSubscriptions()

```ts
getUserSubscriptions(params?): Promise<Subscription[]>;
```

Retrieves all subscriptions owned by the currently authenticated user.
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | [`GetSubscriptionsParams`](routes/subscription.md#getsubscriptionsparams) | Optional query parameters for status and sorting. |

###### Returns

`Promise`\<`Subscription`[]\>

An array of subscription objects.

###### Inherited from

```ts
ReturnType.getUserSubscriptions
```

##### getWorkspaceOrders()

```ts
getWorkspaceOrders(workspaceId, params?): Promise<any[]>;
```

Retrieves subscription orders for a specific workspace.
Requires authentication and permission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |
| `params?` | [`GetSubscriptionOrdersParams`](routes/subscription.md#getsubscriptionordersparams) | Optional query parameters. |

###### Returns

`Promise`\<`any`[]\>

An array of subscription order objects.

###### Inherited from

```ts
ReturnType.getWorkspaceOrders
```

##### getWorkspaceSubscription()

```ts
getWorkspaceSubscription(workspaceId): Promise<Subscription>;
```

Retrieves the active subscription for a specific workspace.
Requires authentication and permission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |

###### Returns

`Promise`\<`Subscription`\>

The workspace subscription object.

###### Inherited from

```ts
ReturnType.getWorkspaceSubscription
```

##### getWorkspaceUsageSummary()

```ts
getWorkspaceUsageSummary(workspaceId): Promise<{
  billableSeatCount: number;
  storageUsedInBytes: number;
}>;
```

Retrieves the workspace usage summary (billable seats and storage used).
Requires authentication and subscription management permission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |

###### Returns

`Promise`\<\{
  `billableSeatCount`: `number`;
  `storageUsedInBytes`: `number`;
\}\>

Usage summary.

###### Inherited from

```ts
ReturnType.getWorkspaceUsageSummary
```

##### resumeWorkspaceSubscription()

```ts
resumeWorkspaceSubscription(workspaceId): Promise<any>;
```

Reverse a scheduled (period-end) cancellation, keeping the workspace's
subscription on its normal renewal cycle. Only valid while the
subscription is still active with a pending cancellation; a fully
lapsed subscription can't be resumed (the owner must re-subscribe).
Requires authentication and permission.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |

###### Returns

`Promise`\<`any`\>

The resume response.

###### Inherited from

```ts
ReturnType.resumeWorkspaceSubscription
```

##### swapWorkspacePlan()

```ts
swapWorkspacePlan(workspaceId, params): Promise<{
  subscription: Subscription | null;
  warnings: PlanChangeWarning[];
}>;
```

Swap the workspace's active basePlan line for a different basePlan product.
Same code path both upgrades and downgrades; the API's pre-flight
capacity check is what distinguishes a permitted change from a refused
one. Pass `dryRun: true` to get the pre-flight verdict without mutating.

On over-allocation the API returns 400 `planCapacityInsufficient` with
`errorData.violations: [{ resource, current, newLimit }]`, surfaced via
the SDK's normal error path.

On success, returns the updated subscription plus a `warnings[]` array
of feature-gate capabilities the destination plan does NOT include (the
FE renders these as a confirmation notice).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |
| `params` | \{ `billingPeriod`: `"month"` \| `"year"`; `currency`: `string`; `dryRun?`: `boolean`; `newProductId`: `string`; \} |
| `params.billingPeriod` | `"month"` \| `"year"` |
| `params.currency` | `string` |
| `params.dryRun?` | `boolean` |
| `params.newProductId` | `string` |

###### Returns

`Promise`\<\{
  `subscription`: `Subscription` \| `null`;
  `warnings`: [`PlanChangeWarning`](routes/subscription.md#planchangewarning)[];
\}\>

###### Inherited from

```ts
ReturnType.swapWorkspacePlan
```

***

### UserMethods

#### Extends

- `ReturnType`\<*typeof* [`default`](routes/user.md#default)\>

#### Methods

##### createAvatar()

```ts
createAvatar(fileData): Promise<any>;
```

Creates a new avatar for the user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fileData` | [`FileData`](routes/user.md#filedata) | File metadata (e.g., { name, checksum, sizeInMB }). |

###### Returns

`Promise`\<`any`\>

Object containing signed URL data and updated user info.

###### Inherited from

```ts
ReturnType.createAvatar
```

##### deleteCurrentUser()

```ts
deleteCurrentUser(): Promise<void>;
```

Deletes the current user.
Requires authentication.

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ReturnType.deleteCurrentUser
```

##### getSelf()

```ts
getSelf(): Promise<PublicUser>;
```

Retrieves the current user's profile.
Requires authentication.

###### Returns

`Promise`\<`PublicUser`\>

The current user's profile.

###### Throws

If no user ID is found in the token.

###### Inherited from

```ts
ReturnType.getSelf
```

##### getTodos()

```ts
getTodos(): Promise<{
  todos: UserTodo[];
}>;
```

Get the current user's active site-level Todos for the onboarding
drawer. Returns only todos whose completion condition isn't met and
(for dismissibles) that the user hasn't opted out of. Server
computes from live state — no caching on the server side, so a
fresh call always reflects ground truth.

###### Returns

`Promise`\<\{
  `todos`: [`UserTodo`](routes/user.md#usertodo)[];
\}\>

###### Inherited from

```ts
ReturnType.getTodos
```

##### getUser()

```ts
getUser(userId): Promise<PublicUser>;
```

Retrieves the public profile of a specific user.
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userId` | `string` | The ID of the user to retrieve. |

###### Returns

`Promise`\<`PublicUser`\>

Public user object.

###### Inherited from

```ts
ReturnType.getUser
```

##### markSeen()

```ts
markSeen(element): Promise<User>;
```

Record that the current user has seen a one-time UI element (welcome
video, tutorial coachmark). Idempotent. Returns the updated user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `string` | one-time element key (see backend oneTimeElements). |

###### Returns

`Promise`\<`User`\>

###### Inherited from

```ts
ReturnType.markSeen
```

##### unmarkSeen()

```ts
unmarkSeen(elements?): Promise<User>;
```

Remove one-time UI elements from the current user's `hasSeen` so they
display again. Pass specific element keys, or omit to clear ALL.
Returns the updated user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `elements?` | `string`[] | elements to remove; omit to clear all. |

###### Returns

`Promise`\<`User`\>

###### Inherited from

```ts
ReturnType.unmarkSeen
```

##### updateAvatar()

```ts
updateAvatar(fileData): Promise<any>;
```

Updates the user's avatar.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fileData` | [`FileData`](routes/user.md#filedata) | File metadata (e.g., { name, checksum, sizeInMB }). |

###### Returns

`Promise`\<`any`\>

Object containing signed URL data and updated user info.

###### Inherited from

```ts
ReturnType.updateAvatar
```

##### updatePreferences()

```ts
updatePreferences(preferenceData): Promise<User>;
```

Updates the user's preferences.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `preferenceData` | [`PreferencesData`](routes/user.md#preferencesdata) | Preference data to update (e.g., { hide: ['feedHint'] }). |

###### Returns

`Promise`\<`User`\>

Updated user object.

###### Inherited from

```ts
ReturnType.updatePreferences
```

##### updateSelf()

```ts
updateSelf(updateData): Promise<User>;
```

Updates the logged-in user's profile.
Requires authentication.
At least one field must be provided.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `updateData` | [`UpdateUserData`](routes/user.md#updateuserdata) | The user data fields to update. |

###### Returns

`Promise`\<`User`\>

The updated user object.

###### Inherited from

```ts
ReturnType.updateSelf
```

***

### WorkspaceMethods

#### Extends

- `ReturnType`\<*typeof* [`default`](routes/workspace.md#default)\>

#### Methods

##### createIcon()

```ts
createIcon(workspaceId, fileData): Promise<any>;
```

Request signed URL data to upload a workspace icon (the small square
shown in sidebars and tabs — distinct from the logo).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |
| `fileData` | [`FileData`](routes/workspace.md#filedata) |

###### Returns

`Promise`\<`any`\>

Response containing signed URL data and workspace info.

###### Inherited from

```ts
ReturnType.createIcon
```

##### createLogo()

```ts
createLogo(workspaceId, fileData): Promise<any>;
```

Request signed URL data to upload a workspace logo.
Caller then multipart-uploads the file using the returned `signedUrlData`
and calls `client.asset.completeUpload(...)` to finalize.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |
| `fileData` | [`FileData`](routes/workspace.md#filedata) |

###### Returns

`Promise`\<`any`\>

Response containing signed URL data and workspace info.

###### Inherited from

```ts
ReturnType.createLogo
```

##### createWorkspace()

```ts
createWorkspace(data): Promise<any>;
```

Creates a new workspace.
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`CreateWorkspaceData`](routes/workspace.md#createworkspacedata) | Workspace data. |

###### Returns

`Promise`\<`any`\>

The created workspace object.

###### Inherited from

```ts
ReturnType.createWorkspace
```

##### deleteWorkspace()

```ts
deleteWorkspace(workspaceId): Promise<any>;
```

Soft-delete a workspace. All nested resources (projects, chats,
assets) become inaccessible; bytes are reclaimed by the cleanup
cron.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace to delete. |

###### Returns

`Promise`\<`any`\>

Object confirming the status change.

###### Inherited from

```ts
ReturnType.deleteWorkspace
```

##### getWorkspace()

```ts
getWorkspace(workspaceId): Promise<any>;
```

Retrieves a specific workspace by its ID.
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace to retrieve. |

###### Returns

`Promise`\<`any`\>

The workspace object.

###### Inherited from

```ts
ReturnType.getWorkspace
```

##### listProjects()

```ts
listProjects(workspaceId): Promise<any[]>;
```

List the projects inside a workspace that the calling user has
access to.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |

###### Returns

`Promise`\<`any`[]\>

An array of project objects.

###### Inherited from

```ts
ReturnType.listProjects
```

##### listWorkspaces()

```ts
listWorkspaces(sortParams?): Promise<any[]>;
```

Lists all workspaces the authenticated user has access to.
Requires authentication.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sortParams?` | [`SortParams`](routes/workspace.md#sortparams) | Optional sorting. Keys are field names (`id`, `name`, `createdAt`, `updatedAt`); values are 1 for ascending or -1 for descending. Sent as `?sort[name]=1&sort[createdAt]=-1`. |

###### Returns

`Promise`\<`any`[]\>

Workspaces with the caller's `roles` and the workspace `capabilities`.

###### Inherited from

```ts
ReturnType.listWorkspaces
```

##### updateIcon()

```ts
updateIcon(workspaceId, fileData): Promise<any>;
```

Request signed URL data to replace the workspace icon. Same upload
shape as `createIcon`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |
| `fileData` | [`FileData`](routes/workspace.md#filedata) |

###### Returns

`Promise`\<`any`\>

Response containing signed URL data and workspace info.

###### Inherited from

```ts
ReturnType.updateIcon
```

##### updateLogo()

```ts
updateLogo(workspaceId, fileData): Promise<any>;
```

Request signed URL data to replace the workspace logo. Same upload
shape as `createLogo`; existing logo is replaced once `completeUpload`
lands.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |
| `fileData` | [`FileData`](routes/workspace.md#filedata) |

###### Returns

`Promise`\<`any`\>

Response containing signed URL data and workspace info.

###### Inherited from

```ts
ReturnType.updateLogo
```

##### updateSetting()

```ts
updateSetting(
   workspaceId, 
   settingName, 
   value
): Promise<any>;
```

Toggle a single workspace boolean setting (e.g. an `enableX` feature
flag).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The ID of the workspace. |
| `settingName` | `string` | The name of the setting. |
| `value` | `boolean` | The new value for the setting. |

###### Returns

`Promise`\<`any`\>

The updated workspace object with new settings.

###### Inherited from

```ts
ReturnType.updateSetting
```

##### updateWorkspace()

```ts
updateWorkspace(workspaceId, updateData): Promise<any>;
```

Update workspace metadata (name, description, etc.).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `workspaceId` | `string` |
| `updateData` | [`UpdateWorkspaceData`](routes/workspace.md#updateworkspacedata) |

###### Returns

`Promise`\<`any`\>

The updated workspace object.

###### Inherited from

```ts
ReturnType.updateWorkspace
```

## Functions

### isApiError()

```ts
function isApiError(error): error is ApiError;
```

Narrow an unknown thrown value to an API error carrying an HTTP status.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

`error is ApiError`

## References

### Bot

Re-exports [Bot](routes/bot.md#bot)

***

### BotApiKeySummary

Re-exports [BotApiKeySummary](routes/bot.md#botapikeysummary)

***

### BotProjectMembership

Re-exports [BotProjectMembership](routes/bot.md#botprojectmembership)

***

### BotProjectRole

Re-exports [BotProjectRole](routes/bot.md#botprojectrole)

***

### CreateBotData

Re-exports [CreateBotData](routes/bot.md#createbotdata)

***

### CreateBotResponse

Re-exports [CreateBotResponse](routes/bot.md#createbotresponse)

***

### CreateSupportTicketRequest

Re-exports [CreateSupportTicketRequest](routes/supportTicket.md#createsupportticketrequest)

***

### CreateTokenData

Re-exports [CreateTokenData](routes/token.md#createtokendata)

***

### CreateTokenResponse

Re-exports [CreateTokenResponse](routes/token.md#createtokenresponse)

***

### CreateWebhookData

Re-exports [CreateWebhookData](routes/webhook.md#createwebhookdata)

***

### CreateWebhookResponse

Re-exports [CreateWebhookResponse](routes/webhook.md#createwebhookresponse)

***

### HealthStatus

Re-exports [HealthStatus](routes/version.md#healthstatus)

***

### ListDeliveriesParams

Re-exports [ListDeliveriesParams](routes/webhook.md#listdeliveriesparams)

***

### ListDeliveriesResponse

Re-exports [ListDeliveriesResponse](routes/webhook.md#listdeliveriesresponse)

***

### RotateBotKeyResponse

Re-exports [RotateBotKeyResponse](routes/bot.md#rotatebotkeyresponse)

***

### RotateWebhookSecretResponse

Re-exports [RotateWebhookSecretResponse](routes/webhook.md#rotatewebhooksecretresponse)

***

### SupportTicket

Re-exports [SupportTicket](routes/supportTicket.md#supportticket)

***

### SupportTicketListParams

Re-exports [SupportTicketListParams](routes/supportTicket.md#supportticketlistparams)

***

### SupportTicketListResponse

Re-exports [SupportTicketListResponse](routes/supportTicket.md#supportticketlistresponse)

***

### SupportTicketScope

Re-exports [SupportTicketScope](routes/supportTicket.md#supportticketscope)

***

### SupportTicketScopeOptions

Re-exports [SupportTicketScopeOptions](routes/supportTicket.md#supportticketscopeoptions)

***

### SupportTicketStatus

Re-exports [SupportTicketStatus](routes/supportTicket.md#supportticketstatus-1)

***

### TestWebhookResponse

Re-exports [TestWebhookResponse](routes/webhook.md#testwebhookresponse)

***

### TokenKind

Re-exports [TokenKind](routes/token.md#tokenkind)

***

### TokenScope

Re-exports [TokenScope](routes/token.md#tokenscope)

***

### TokenSummary

Re-exports [TokenSummary](routes/token.md#tokensummary)

***

### UpdateBotAvatarFileData

Re-exports [UpdateBotAvatarFileData](routes/bot.md#updatebotavatarfiledata)

***

### UpdateBotAvatarResponse

Re-exports [UpdateBotAvatarResponse](routes/bot.md#updatebotavatarresponse)

***

### UpdateBotData

Re-exports [UpdateBotData](routes/bot.md#updatebotdata)

***

### UpdateWebhookData

Re-exports [UpdateWebhookData](routes/webhook.md#updatewebhookdata)

***

### UserTodo

Re-exports [UserTodo](routes/user.md#usertodo)

***

### WebhookAttempt

Re-exports [WebhookAttempt](routes/webhook.md#webhookattempt)

***

### WebhookAttemptStatus

Re-exports [WebhookAttemptStatus](routes/webhook.md#webhookattemptstatus-1)

***

### WebhookEvent

Re-exports [WebhookEvent](routes/webhook.md#webhookevent)

***

### WebhookSubscription

Re-exports [WebhookSubscription](routes/webhook.md#webhooksubscription)

***

### WebhookSubscriptionStatus

Re-exports [WebhookSubscriptionStatus](routes/webhook.md#webhooksubscriptionstatus-1)
