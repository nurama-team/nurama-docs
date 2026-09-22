[**@nurama/sdk**](index.md)

***

[@nurama/sdk](index.md) / BotClient

# BotClient

## Classes

### default

Client for interacting with the Nurama API as a bot user.

Authenticates with a long-lived API key (`nrm_bot_...`) instead of a JWT.
Requests must arrive at the bot subdomain (`bot.nurama.com` by default) so
the server can apply bot-specific firewall and rate-limit rules.

Exposes only the namespaces a bot is permitted to use — auth, user profile,
payment, subscription, device, and bot-administration namespaces are omitted.

#### Example

```ts
import BotClient from '@nurama/sdk/bot';

const bot = new BotClient(process.env.NURAMA_BOT_API_KEY!);
const workspaces = await bot.workspace.listWorkspaces();
```

#### Constructors

##### Constructor

```ts
new default(apiKey, options?): default;
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `apiKey` | `string` | Bot API key in the format `nrm_bot_{prefix}_{secret}`. |
| `options` | [`BotClientOptions`](#botclientoptions) | Configuration overrides. |

###### Returns

[`default`](#default)

#### Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="aichat"></a> `aiChat` | `readonly` | \{ `createTopic`: `Promise`\<`AiChatCreateTopicResponse`\>; `deleteTopic`: `Promise`\<`AiChatGetTopicResponse`\>; `getTopic`: `Promise`\<`AiChatGetTopicResponse`\>; `listTopics`: `Promise`\<`AiChatListTopicsResponse`\>; `updateTopic`: `Promise`\<`AiChatGetTopicResponse`\>; \} | - |
| `aiChat.createTopic` | `public` | `Promise`\<`AiChatCreateTopicResponse`\> | - |
| `aiChat.deleteTopic` | `public` | `Promise`\<`AiChatGetTopicResponse`\> | - |
| `aiChat.getTopic` | `public` | `Promise`\<`AiChatGetTopicResponse`\> | - |
| `aiChat.listTopics` | `public` | `Promise`\<`AiChatListTopicsResponse`\> | - |
| `aiChat.updateTopic` | `public` | `Promise`\<`AiChatGetTopicResponse`\> | - |
| <a id="asset"></a> `asset` | `readonly` | [`AssetMethods`](NuramaClient.md#assetmethods) | - |
| <a id="board"></a> `board` | `readonly` | \{ `addColumn`: `Promise`\<`BoardColumn`\>; `addExistingTaskToBoard`: `Promise`\<`Task`\>; `createBoard`: `Promise`\<`Board`\>; `createBoardTask`: `Promise`\<`Task`\>; `deleteBoard`: `Promise`\<\{ `deletedTaskIds`: `string`[]; `disposition`: `string`; `message`: `string`; `reassignedTaskIds`: `string`[]; \}\>; `deleteColumn`: `Promise`\<`void`\>; `followBoard`: `Promise`\<`Board`\>; `getBoard`: `Promise`\<`BoardWithTasks`\>; `getBoardTasks`: `Promise`\<`Task`[]\>; `getProjectBoards`: `Promise`\<`Board`[]\>; `getProjectTasks`: `Promise`\<`any`\>; `moveTask`: `Promise`\<`Task`\>; `removeTaskFromBoard`: `Promise`\<`Task`\>; `reorderColumns`: `Promise`\<`BoardColumn`[]\>; `tagBoard`: `Promise`\<`Board`\>; `unfollowBoard`: `Promise`\<`Board`\>; `untagBoard`: `Promise`\<`Board`\>; `updateBoard`: `Promise`\<`Board`\>; `updateColumn`: `Promise`\<`BoardColumn`\>; \} | - |
| `board.addColumn` | `public` | `Promise`\<`BoardColumn`\> | - |
| `board.addExistingTaskToBoard` | `public` | `Promise`\<`Task`\> | - |
| `board.createBoard` | `public` | `Promise`\<`Board`\> | - |
| `board.createBoardTask` | `public` | `Promise`\<`Task`\> | - |
| `board.deleteBoard` | `public` | `Promise`\<\{ `deletedTaskIds`: `string`[]; `disposition`: `string`; `message`: `string`; `reassignedTaskIds`: `string`[]; \}\> | - |
| `board.deleteColumn` | `public` | `Promise`\<`void`\> | - |
| `board.followBoard` | `public` | `Promise`\<`Board`\> | - |
| `board.getBoard` | `public` | `Promise`\<`BoardWithTasks`\> | - |
| `board.getBoardTasks` | `public` | `Promise`\<`Task`[]\> | - |
| `board.getProjectBoards` | `public` | `Promise`\<`Board`[]\> | - |
| `board.getProjectTasks` | `public` | `Promise`\<`any`\> | - |
| `board.moveTask` | `public` | `Promise`\<`Task`\> | - |
| `board.removeTaskFromBoard` | `public` | `Promise`\<`Task`\> | - |
| `board.reorderColumns` | `public` | `Promise`\<`BoardColumn`[]\> | - |
| `board.tagBoard` | `public` | `Promise`\<`Board`\> | - |
| `board.unfollowBoard` | `public` | `Promise`\<`Board`\> | - |
| `board.untagBoard` | `public` | `Promise`\<`Board`\> | - |
| `board.updateBoard` | `public` | `Promise`\<`Board`\> | - |
| `board.updateColumn` | `public` | `Promise`\<`BoardColumn`\> | - |
| <a id="chat"></a> `chat` | `readonly` | \{ `addAttachments`: `Promise`\<[`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)[]\>; `addMembers`: `Promise`\<`ChatMember`\>; `archiveMemberChat`: `Promise`\<`ChatMember`\>; `createAssetChatAndMessage`: `Promise`\<`any`\>; `createMemberChat`: `Promise`\<`ChatMember`\>; `createMessage`: `Promise`\<`ChatMessage`\>; `createMessageShortLink`: `Promise`\<\{ `code`: `string`; `shortUrl`: `string`; \}\>; `createReaction`: `Promise`\<`ChatMessage`\>; `createTopicChat`: `Promise`\<`Chat`\>; `deleteChat`: `Promise`\<`void`\>; `deleteMemberChat`: `Promise`\<`void`\>; `deleteMessage`: `Promise`\<`ChatMessage`\>; `fetchLinkPreviews`: `Promise`\<[`LinkPreviewResponse`](routes/chat.md#linkpreviewresponse)\>; `followChat`: `Promise`\<`void`\>; `getAddableMembers`: `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\>; `getChat`: `Promise`\<`Chat`\>; `getChatByTopicId`: `Promise`\<`Chat`\>; `getMemberChat`: `Promise`\<`ChatMember`\>; `getMentionableAssets`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Asset`\>\>; `getMentionableFolders`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Folder`\>\>; `getMentionablePublics`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionablePublic`](routes/chat.md#mentionablepublic)\>\>; `getMentionableSubmissions`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionableSubmission`](routes/chat.md#mentionablesubmission)\>\>; `getMentionableTasks`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`any`\>\>; `getMentions`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\>; `getMessage`: `Promise`\<`ChatMessage`\>; `getMessages`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\>; `getReplies`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\>; `getScopeAddableMembers`: `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\>; `getUsersMemberChats`: `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMember`\>\>; `getWorkspaceProjectChats`: `Promise`\<`any`[]\>; `highlightMessage`: `Promise`\<`ChatMessage`\>; `removeAttachment`: `Promise`\<`ChatMessage`\>; `removeMembers`: `Promise`\<`ChatMember`\>; `removeReaction`: `Promise`\<`ChatMessage`\>; `reviseMessage`: `Promise`\<`ChatMessage`\>; `unarchiveMemberChat`: `Promise`\<`ChatMember`\>; `unfollowChat`: `Promise`\<`void`\>; `unhighlightMessage`: `Promise`\<`ChatMessage`\>; `updateChatSubject`: `Promise`\<`Chat`\>; `updateMemberChat`: `Promise`\<`ChatMember`\>; `updateMemberChatIcon`: `Promise`\<\{ `chat`: `ChatMember`; \} & [`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)\>; \} | - |
| `chat.addAttachments` | `public` | `Promise`\<[`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)[]\> | - |
| `chat.addMembers` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.archiveMemberChat` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.createAssetChatAndMessage` | `public` | `Promise`\<`any`\> | - |
| `chat.createMemberChat` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.createMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.createMessageShortLink` | `public` | `Promise`\<\{ `code`: `string`; `shortUrl`: `string`; \}\> | - |
| `chat.createReaction` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.createTopicChat` | `public` | `Promise`\<`Chat`\> | - |
| `chat.deleteChat` | `public` | `Promise`\<`void`\> | - |
| `chat.deleteMemberChat` | `public` | `Promise`\<`void`\> | - |
| `chat.deleteMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.fetchLinkPreviews` | `public` | `Promise`\<[`LinkPreviewResponse`](routes/chat.md#linkpreviewresponse)\> | - |
| `chat.followChat` | `public` | `Promise`\<`void`\> | - |
| `chat.getAddableMembers` | `public` | `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\> | - |
| `chat.getChat` | `public` | `Promise`\<`Chat`\> | - |
| `chat.getChatByTopicId` | `public` | `Promise`\<`Chat`\> | - |
| `chat.getMemberChat` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.getMentionableAssets` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Asset`\>\> | - |
| `chat.getMentionableFolders` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`Folder`\>\> | - |
| `chat.getMentionablePublics` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionablePublic`](routes/chat.md#mentionablepublic)\>\> | - |
| `chat.getMentionableSubmissions` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<[`MentionableSubmission`](routes/chat.md#mentionablesubmission)\>\> | - |
| `chat.getMentionableTasks` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`any`\>\> | - |
| `chat.getMentions` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\> | - |
| `chat.getMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.getMessages` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\> | - |
| `chat.getReplies` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMessage`\>\> | - |
| `chat.getScopeAddableMembers` | `public` | `Promise`\< \| [`AddableMembersByScope`](routes/chat.md#addablemembersbyscope) \| `Membership`[]\> | - |
| `chat.getUsersMemberChats` | `public` | `Promise`\<[`PaginatedResponse`](routes/chat.md#paginatedresponse)\<`ChatMember`\>\> | - |
| `chat.getWorkspaceProjectChats` | `public` | `Promise`\<`any`[]\> | - |
| `chat.highlightMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.removeAttachment` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.removeMembers` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.removeReaction` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.reviseMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.unarchiveMemberChat` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.unfollowChat` | `public` | `Promise`\<`void`\> | - |
| `chat.unhighlightMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `chat.updateChatSubject` | `public` | `Promise`\<`Chat`\> | - |
| `chat.updateMemberChat` | `public` | `Promise`\<`ChatMember`\> | - |
| `chat.updateMemberChatIcon` | `public` | `Promise`\<\{ `chat`: `ChatMember`; \} & [`AttachmentUploadRecord`](routes/chat.md#attachmentuploadrecord)\> | - |
| <a id="config"></a> `config` | `readonly` | [`ConfigMethods`](routes/config.md#configmethods) | - |
| <a id="convo"></a> `convo` | `readonly` | \{ `completeConvo`: `Promise`\<`CompleteConvoResponse`\>; `deleteConvo`: `Promise`\<`void`\>; `getChatConvos`: `Promise`\<`Convo`[]\>; `getConvo`: `Promise`\<`GetConvoResponse`\>; `getProjectConvos`: `Promise`\<`Convo`[]\>; `getScopeConvos`: `Promise`\<`GetScopeConvosResponse`\>; `joinConvo`: `Promise`\<`JoinConvoResponse`\>; `leaveConvo`: `Promise`\<`LeaveConvoResponse`\>; `rejoinConvo`: `Promise`\<`JoinConvoResponse`\>; `startConvo`: `Promise`\<`StartConvoResponse`\>; `updateConvo`: `Promise`\<`UpdateConvoResponse`\>; \} | - |
| `convo.completeConvo` | `public` | `Promise`\<`CompleteConvoResponse`\> | - |
| `convo.deleteConvo` | `public` | `Promise`\<`void`\> | - |
| `convo.getChatConvos` | `public` | `Promise`\<`Convo`[]\> | - |
| `convo.getConvo` | `public` | `Promise`\<`GetConvoResponse`\> | - |
| `convo.getProjectConvos` | `public` | `Promise`\<`Convo`[]\> | - |
| `convo.getScopeConvos` | `public` | `Promise`\<`GetScopeConvosResponse`\> | - |
| `convo.joinConvo` | `public` | `Promise`\<`JoinConvoResponse`\> | - |
| `convo.leaveConvo` | `public` | `Promise`\<`LeaveConvoResponse`\> | - |
| `convo.rejoinConvo` | `public` | `Promise`\<`JoinConvoResponse`\> | - |
| `convo.startConvo` | `public` | `Promise`\<`StartConvoResponse`\> | - |
| `convo.updateConvo` | `public` | `Promise`\<`UpdateConvoResponse`\> | - |
| <a id="folder"></a> `folder` | `readonly` | \{ `getFolder`: `Promise`\<`Folder`\>; `getFoldersAssets`: `Promise`\<[`PaginatedResponse`](routes/folder.md#paginatedresponse)\<`Asset`\>\>; `tagFolder`: `Promise`\<`Folder`\>; `untagFolder`: `Promise`\<`Folder`\>; `updateFolder`: `Promise`\<`Folder`\>; `updateFolderIcon`: `Promise`\<`any`\>; \} | - |
| `folder.getFolder` | `public` | `Promise`\<`Folder`\> | - |
| `folder.getFoldersAssets` | `public` | `Promise`\<[`PaginatedResponse`](routes/folder.md#paginatedresponse)\<`Asset`\>\> | - |
| `folder.tagFolder` | `public` | `Promise`\<`Folder`\> | - |
| `folder.untagFolder` | `public` | `Promise`\<`Folder`\> | - |
| `folder.updateFolder` | `public` | `Promise`\<`Folder`\> | - |
| `folder.updateFolderIcon` | `public` | `Promise`\<`any`\> | - |
| <a id="invite"></a> `invite` | `readonly` | \{ `acceptInvite`: `Promise`\<[`AcceptInviteResponse`](routes/invite.md#acceptinviteresponse)\>; `cancelInvite`: `Promise`\<`Invite`\>; `getInviteById`: `Promise`\<`Invite`\>; `getInvites`: `Promise`\<[`PaginatedInvitesResponse`](routes/invite.md#paginatedinvitesresponse)\>; `getInvitesForResource`: `Promise`\<`Invite`[]\>; `inviteUser`: `Promise`\<`Invite`\>; `resendInvite`: `Promise`\<`Invite`\>; \} | - |
| `invite.acceptInvite` | `public` | `Promise`\<[`AcceptInviteResponse`](routes/invite.md#acceptinviteresponse)\> | - |
| `invite.cancelInvite` | `public` | `Promise`\<`Invite`\> | - |
| `invite.getInviteById` | `public` | `Promise`\<`Invite`\> | - |
| `invite.getInvites` | `public` | `Promise`\<[`PaginatedInvitesResponse`](routes/invite.md#paginatedinvitesresponse)\> | - |
| `invite.getInvitesForResource` | `public` | `Promise`\<`Invite`[]\> | - |
| `invite.inviteUser` | `public` | `Promise`\<`Invite`\> | - |
| `invite.resendInvite` | `public` | `Promise`\<`Invite`\> | - |
| <a id="membership"></a> `membership` | `readonly` | \{ `addRole`: `Promise`\<`Membership`\>; `deleteMembership`: `Promise`\<`void`\>; `getMyMemberships`: `Promise`\<`Membership`[]\>; `getProjectLastSeen`: `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\>; `getProjectMemberships`: `Promise`\<`MembershipReport`\>; `getProjectMentionableUsers`: `Promise`\<`Mentionable`[]\>; `getWorkspaceLastSeen`: `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\>; `getWorkspaceMemberships`: `Promise`\<`MembershipReport`\>; `leaveResource`: `Promise`\<`void`\>; `removeRole`: `Promise`\<`Membership`\>; \} | - |
| `membership.addRole` | `public` | `Promise`\<`Membership`\> | - |
| `membership.deleteMembership` | `public` | `Promise`\<`void`\> | - |
| `membership.getMyMemberships` | `public` | `Promise`\<`Membership`[]\> | - |
| `membership.getProjectLastSeen` | `public` | `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\> | - |
| `membership.getProjectMemberships` | `public` | `Promise`\<`MembershipReport`\> | - |
| `membership.getProjectMentionableUsers` | `public` | `Promise`\<`Mentionable`[]\> | - |
| `membership.getWorkspaceLastSeen` | `public` | `Promise`\<[`GetLastSeenResponse`](routes/membership.md#getlastseenresponse)\> | - |
| `membership.getWorkspaceMemberships` | `public` | `Promise`\<`MembershipReport`\> | - |
| `membership.leaveResource` | `public` | `Promise`\<`void`\> | - |
| `membership.removeRole` | `public` | `Promise`\<`Membership`\> | - |
| <a id="notification"></a> `notification` | `readonly` | \{ `getNewNotificationCount`: `Promise`\<[`NotificationCountResponse`](routes/notification.md#notificationcountresponse)\>; `getNewNotificationCountBulk`: `Promise`\<[`NotificationCountBulkResponse`](routes/notification.md#notificationcountbulkresponse)\>; `getNewNotifications`: `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\>; `getNotifications`: `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\>; `getUsersLastNotificationsSeen`: `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\>; `updateUsersLastSeen`: `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\>; \} | - |
| `notification.getNewNotificationCount` | `public` | `Promise`\<[`NotificationCountResponse`](routes/notification.md#notificationcountresponse)\> | - |
| `notification.getNewNotificationCountBulk` | `public` | `Promise`\<[`NotificationCountBulkResponse`](routes/notification.md#notificationcountbulkresponse)\> | - |
| `notification.getNewNotifications` | `public` | `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\> | - |
| `notification.getNotifications` | `public` | `Promise`\<[`PaginatedNotificationResponse`](routes/notification.md#paginatednotificationresponse)\> | - |
| `notification.getUsersLastNotificationsSeen` | `public` | `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\> | - |
| `notification.updateUsersLastSeen` | `public` | `Promise`\<[`LastSeenResponse`](routes/notification.md#lastseenresponse)\> | - |
| <a id="product"></a> `product` | `readonly` | \{ `getSuggestedCurrency`: `Promise`\<\{ `country`: `string` \| `null`; `currency`: [`SupportedCurrency`](routes/product.md#supportedcurrency); `locked?`: `boolean`; `supported`: [`SupportedCurrency`](routes/product.md#supportedcurrency)[]; \}\>; `getWorkspaceProducts`: `Promise`\<`Product`[]\>; `listPlans`: `Promise`\<`Product`[]\>; \} | - |
| `product.getSuggestedCurrency` | `public` | `Promise`\<\{ `country`: `string` \| `null`; `currency`: [`SupportedCurrency`](routes/product.md#supportedcurrency); `locked?`: `boolean`; `supported`: [`SupportedCurrency`](routes/product.md#supportedcurrency)[]; \}\> | - |
| `product.getWorkspaceProducts` | `public` | `Promise`\<`Product`[]\> | - |
| `product.listPlans` | `public` | `Promise`\<`Product`[]\> | - |
| <a id="project"></a> `project` | `readonly` | [`ProjectMethods`](NuramaClient.md#projectmethods) | - |
| <a id="public"></a> `public` | `readonly` | \{ `createPublicAssetChatMessage`: `Promise`\<`CreatePublicAssetChatMessageResponse`\>; `createPublicChatMessage`: `Promise`\<`ChatMessage`\>; `createPublicTopicChatMessage`: `Promise`\<`CreatePublicAssetChatMessageResponse`\>; `downloadAssets`: `Promise`\<`DownloadSignedUrlData`[]\>; `getPublicAsset`: `Promise`\<`PublicAssetResponse`\>; `getPublicChat`: `Promise`\<`Chat` \| `null`\>; `getPublicChatMessages`: `Promise`\<`PublicChatMessagesResponse`\>; `getPublicDownloadUrl`: `Promise`\<[`PublicDownloadUrlResponse`](routes/shortlink.md#publicdownloadurlresponse)\>; `getPublicEmbedFiles`: `Promise`\<[`PublicEmbedFilesResponse`](routes/shortlink.md#publicembedfilesresponse)\>; `getPublicFileSystem`: `Promise`\<[`PublicFileSystemDetailsResponse`](routes/public.md#publicfilesystemdetailsresponse)\>; `getPublicItems`: `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\>; `getPublicItemsAtPath`: `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\>; `recordAccessActivity`: `Promise`\<`void`\>; `resolvePublicDownload`: `Promise`\<[`ResolvePublicDownloadResponse`](routes/shortlink.md#resolvepublicdownloadresponse)\>; \} | - |
| `public.createPublicAssetChatMessage` | `public` | `Promise`\<`CreatePublicAssetChatMessageResponse`\> | - |
| `public.createPublicChatMessage` | `public` | `Promise`\<`ChatMessage`\> | - |
| `public.createPublicTopicChatMessage` | `public` | `Promise`\<`CreatePublicAssetChatMessageResponse`\> | - |
| `public.downloadAssets` | `public` | `Promise`\<`DownloadSignedUrlData`[]\> | - |
| `public.getPublicAsset` | `public` | `Promise`\<`PublicAssetResponse`\> | - |
| `public.getPublicChat` | `public` | `Promise`\<`Chat` \| `null`\> | - |
| `public.getPublicChatMessages` | `public` | `Promise`\<`PublicChatMessagesResponse`\> | - |
| `public.getPublicDownloadUrl` | `public` | `Promise`\<[`PublicDownloadUrlResponse`](routes/shortlink.md#publicdownloadurlresponse)\> | - |
| `public.getPublicEmbedFiles` | `public` | `Promise`\<[`PublicEmbedFilesResponse`](routes/shortlink.md#publicembedfilesresponse)\> | - |
| `public.getPublicFileSystem` | `public` | `Promise`\<[`PublicFileSystemDetailsResponse`](routes/public.md#publicfilesystemdetailsresponse)\> | - |
| `public.getPublicItems` | `public` | `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\> | - |
| `public.getPublicItemsAtPath` | `public` | `Promise`\<[`PublicFileSystemResponse`](routes/public.md#publicfilesystemresponse)\> | - |
| `public.recordAccessActivity` | `public` | `Promise`\<`void`\> | - |
| `public.resolvePublicDownload` | `public` | `Promise`\<[`ResolvePublicDownloadResponse`](routes/shortlink.md#resolvepublicdownloadresponse)\> | - |
| <a id="settings"></a> `settings` | `readonly` | \{ `cleanupOrphanedSettings`: `Promise`\<\{ `message`: `string`; `removedCount`: `number`; \}\>; `getAllResourceSettings`: `Promise`\<\{ `resourceSettings`: [`ResourceSettings`](routes/settings.md#resourcesettings)[]; \}\>; `getEffectiveSettings`: `Promise`\<[`EffectiveSettings`](routes/settings.md#effectivesettings)\>; `getResourceSettings`: `Promise`\< \| [`ResourceSettings`](routes/settings.md#resourcesettings) \| \{ `message`: `string`; \}\>; `resetResourceSettings`: `Promise`\<\{ `message`: `string`; \}\>; `updateResourceSettings`: `Promise`\<\{ `message`: `string`; `settings`: [`ResourceSettings`](routes/settings.md#resourcesettings); \}\>; \} | - |
| `settings.cleanupOrphanedSettings` | `public` | `Promise`\<\{ `message`: `string`; `removedCount`: `number`; \}\> | - |
| `settings.getAllResourceSettings` | `public` | `Promise`\<\{ `resourceSettings`: [`ResourceSettings`](routes/settings.md#resourcesettings)[]; \}\> | - |
| `settings.getEffectiveSettings` | `public` | `Promise`\<[`EffectiveSettings`](routes/settings.md#effectivesettings)\> | - |
| `settings.getResourceSettings` | `public` | `Promise`\< \| [`ResourceSettings`](routes/settings.md#resourcesettings) \| \{ `message`: `string`; \}\> | - |
| `settings.resetResourceSettings` | `public` | `Promise`\<\{ `message`: `string`; \}\> | - |
| `settings.updateResourceSettings` | `public` | `Promise`\<\{ `message`: `string`; `settings`: [`ResourceSettings`](routes/settings.md#resourcesettings); \}\> | - |
| <a id="shortlink"></a> `shortlink` | `readonly` | \{ `resolveShortLink`: `Promise`\<[`ResolveShortLinkResponse`](routes/shortlink.md#resolveshortlinkresponse)\>; \} | - |
| `shortlink.resolveShortLink` | `public` | `Promise`\<[`ResolveShortLinkResponse`](routes/shortlink.md#resolveshortlinkresponse)\> | - |
| <a id="socket"></a> `socket` | `readonly` | \{ `connect`: (`channel`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\>; `connectPublic`: (`publicToken`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\>; `disconnect`: (`channel`) => `Promise`\<`void`\>; `disconnectAll`: () => `Promise`\<`void`\>; `emit`: (`channel`, `event`, `data?`) => `void`; `emitWithAck`: (`channel`, `event`, `data`, `timeoutMs`) => `Promise`\<`boolean`\>; `isConnected`: (`channel`) => `boolean`; `onReconnect`: (`channel`, `callback`) => `void`; `onReconnectFailed`: (`channel`, `callback`) => `void`; `subscribe`: \<`T`\>(`channel`, `event`, `callback`) => `Promise`\<`void`\>; `subscribePublic`: \<`T`\>(`publicToken`, `event`, `callback`) => `Promise`\<`void`\>; `unsubscribe`: (`channel`, `event`, `callback?`) => `void`; \} | - |
| `socket.connect` | `public` | (`channel`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\> | Connect to a socket channel |
| `socket.connectPublic` | `public` | (`publicToken`, `options`) => `Promise`\<[`SocketChannel`](routes/socket.md#socketchannel)\> | Connect to a public socket channel without authentication |
| `socket.disconnect` | `public` | (`channel`) => `Promise`\<`void`\> | Disconnect from a socket channel |
| `socket.disconnectAll` | `public` | () => `Promise`\<`void`\> | Disconnect from all channels |
| `socket.emit` | `public` | (`channel`, `event`, `data?`) => `void` | Emit an event to a connected channel |
| `socket.emitWithAck` | `public` | (`channel`, `event`, `data`, `timeoutMs`) => `Promise`\<`boolean`\> | Emit an event with a timeout-bounded server acknowledgement. Resolves `true` if the server acks within `timeoutMs`, `false` on timeout or transport error. Used by the FE WS layer (`WebSocketManager.probeChannel`) to actively verify a channel's liveness when `socket.connected` may be stale — most notably after a backgrounded tab returns to focus, where the flag can remain `true` for up to socket.io's own heartbeat window (~25–45s) even after the underlying TCP transport has died. Relies on socket.io v4's `socket.timeout(ms).emit(ev, data, cb)` pattern: the BE handler invokes `ack()` (its trailing callback arg); if no ack arrives within `timeoutMs` the cb is invoked with an Error. |
| `socket.isConnected` | `public` | (`channel`) => `boolean` | Check if connected to a channel |
| `socket.onReconnect` | `public` | (`channel`, `callback`) => `void` | Register a callback for when the channel reconnects — a socket.io transport-level reconnect, or the token-refresh reconnect. Use it to recover any gap of server->client messages missed while the connection was down; socket.io does not replay those. Dispatched from the 'reconnect' handler in connect() and from the token-refresh path. |
| `socket.onReconnectFailed` | `public` | (`channel`, `callback`) => `void` | Register a callback for when Socket.IO exhausts all reconnection attempts |
| `socket.subscribe` | `public` | \<`T`\>(`channel`, `event`, `callback`) => `Promise`\<`void`\> | Subscribe to an event on a channel |
| `socket.subscribePublic` | `public` | \<`T`\>(`publicToken`, `event`, `callback`) => `Promise`\<`void`\> | Subscribe to an event on a public channel Automatically connects to the public channel if not already connected |
| `socket.unsubscribe` | `public` | (`channel`, `event`, `callback?`) => `void` | Stop listening for an event on a channel. If `callback` is provided, only that specific listener is removed; otherwise every listener for that event is cleared. |
| <a id="storage"></a> `storage` | `readonly` | \{ `getStorageChart`: `Promise`\<[`ChartDataResponse`](routes/storage.md#chartdataresponse)\>; `getStorageRecord`: `Promise`\<[`StorageRecord`](routes/storage.md#storagerecord)\>; \} | - |
| `storage.getStorageChart` | `public` | `Promise`\<[`ChartDataResponse`](routes/storage.md#chartdataresponse)\> | - |
| `storage.getStorageRecord` | `public` | `Promise`\<[`StorageRecord`](routes/storage.md#storagerecord)\> | - |
| <a id="tag"></a> `tag` | `readonly` | \{ `createTag`: `Promise`\<`Tag`\>; `deleteTag`: `Promise`\<`Tag`\>; `getTags`: `Promise`\<[`Tags`](routes/tag.md#tags)\>; `updateTag`: `Promise`\<`Tag`\>; \} | - |
| `tag.createTag` | `public` | `Promise`\<`Tag`\> | - |
| `tag.deleteTag` | `public` | `Promise`\<`Tag`\> | - |
| `tag.getTags` | `public` | `Promise`\<[`Tags`](routes/tag.md#tags)\> | - |
| `tag.updateTag` | `public` | `Promise`\<`Tag`\> | - |
| <a id="task"></a> `task` | `readonly` | \{ `acknowledgeAllTasks`: `Promise`\<[`AcknowledgeAllTasksResponse`](routes/task.md#acknowledgealltasksresponse)\>; `acknowledgeTask`: `Promise`\<`Task`\>; `bulkCreate`: `Promise`\<[`BulkCreateTasksResponse`](routes/task.md#bulkcreatetasksresponse)\>; `deleteTask`: `Promise`\<`void`\>; `followTask`: `Promise`\<`Task`\>; `getMyTasks`: `Promise`\<[`GetTasksResponse`](routes/task.md#gettasksresponse)\>; `getTaskEvents`: `Promise`\<[`GetTaskEventsResponse`](routes/task.md#gettaskeventsresponse)\>; `getTaskLinks`: `Promise`\<`TaskLink`[]\>; `getUnacknowledgedTaskCount`: `Promise`\<[`UnacknowledgedTaskCountResponse`](routes/task.md#unacknowledgedtaskcountresponse)\>; `linkTask`: `Promise`\<`TaskLink`\>; `tagTask`: `Promise`\<`Task`\>; `unfollowTask`: `Promise`\<`Task`\>; `unlinkTask`: `Promise`\<`void`\>; `untagTask`: `Promise`\<`Task`\>; `updateTaskDetails`: `Promise`\<`Task`\>; `updateTaskStatus`: `Promise`\<`Task`\>; \} | - |
| `task.acknowledgeAllTasks` | `public` | `Promise`\<[`AcknowledgeAllTasksResponse`](routes/task.md#acknowledgealltasksresponse)\> | - |
| `task.acknowledgeTask` | `public` | `Promise`\<`Task`\> | - |
| `task.bulkCreate` | `public` | `Promise`\<[`BulkCreateTasksResponse`](routes/task.md#bulkcreatetasksresponse)\> | - |
| `task.deleteTask` | `public` | `Promise`\<`void`\> | - |
| `task.followTask` | `public` | `Promise`\<`Task`\> | - |
| `task.getMyTasks` | `public` | `Promise`\<[`GetTasksResponse`](routes/task.md#gettasksresponse)\> | - |
| `task.getTaskEvents` | `public` | `Promise`\<[`GetTaskEventsResponse`](routes/task.md#gettaskeventsresponse)\> | - |
| `task.getTaskLinks` | `public` | `Promise`\<`TaskLink`[]\> | - |
| `task.getUnacknowledgedTaskCount` | `public` | `Promise`\<[`UnacknowledgedTaskCountResponse`](routes/task.md#unacknowledgedtaskcountresponse)\> | - |
| `task.linkTask` | `public` | `Promise`\<`TaskLink`\> | - |
| `task.tagTask` | `public` | `Promise`\<`Task`\> | - |
| `task.unfollowTask` | `public` | `Promise`\<`Task`\> | - |
| `task.unlinkTask` | `public` | `Promise`\<`void`\> | - |
| `task.untagTask` | `public` | `Promise`\<`Task`\> | - |
| `task.updateTaskDetails` | `public` | `Promise`\<`Task`\> | - |
| `task.updateTaskStatus` | `public` | `Promise`\<`Task`\> | - |
| <a id="taskrelation"></a> `taskRelation` | `readonly` | \{ `createTaskRelation`: `Promise`\<[`TaskRelation`](routes/taskRelation.md#taskrelation)\>; `deleteTaskRelation`: `Promise`\<`void`\>; `getRelationsForChat`: `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\>; `getRelationsForMessage`: `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\>; `getTaskRelations`: `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\>; \} | - |
| `taskRelation.createTaskRelation` | `public` | `Promise`\<[`TaskRelation`](routes/taskRelation.md#taskrelation)\> | - |
| `taskRelation.deleteTaskRelation` | `public` | `Promise`\<`void`\> | - |
| `taskRelation.getRelationsForChat` | `public` | `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\> | - |
| `taskRelation.getRelationsForMessage` | `public` | `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\> | - |
| `taskRelation.getTaskRelations` | `public` | `Promise`\<[`PaginatedTaskRelations`](routes/taskRelation.md#paginatedtaskrelations)\> | - |
| <a id="version"></a> `version` | `readonly` | \{ `getCommitHash`: `Promise`\<[`CommitResponse`](routes/version.md#commitresponse)\>; `getHealth`: `Promise`\<[`HealthStatus`](routes/version.md#healthstatus)\>; \} | - |
| `version.getCommitHash` | `public` | `Promise`\<[`CommitResponse`](routes/version.md#commitresponse)\> | - |
| `version.getHealth` | `public` | `Promise`\<[`HealthStatus`](routes/version.md#healthstatus)\> | - |
| <a id="workspace"></a> `workspace` | `readonly` | [`WorkspaceMethods`](NuramaClient.md#workspacemethods) | - |

## Interfaces

### BotClientOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="baseurl"></a> `baseURL?` | `string` | Override the default bot API URL (https://bot.nurama.com). |
| <a id="cachedurationseconds"></a> `cacheDurationSeconds?` | `number` | Cache duration in seconds. Default: 5 |
| <a id="debug"></a> `debug?` | `boolean` | Enable debug logging. Default: false |
| <a id="enablecache"></a> `enableCache?` | `boolean` | Enable response caching. Default: true |
| <a id="fetch"></a> `fetch?` | (`input`, `init?`) => `Promise`\<`Response`\> | Custom fetch implementation. Defaults to global fetch. |
| <a id="websocketurl"></a> `websocketURL?` | `string` | Override the default bot WebSocket URL (https://bot-ws.nurama.com). |
