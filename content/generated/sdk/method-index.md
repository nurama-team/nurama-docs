# Nurama SDK Reference

> Method index for `@nurama/sdk` and `@nurama/sdk/bot`, organized for both human readers and AI assistants working in this repo. Use this as the single starting point when building tools, integrations, or bots — most things you'd think to write from scratch already exist as a method here.

## Two clients

- **`NuramaClient`** (`packages/sdk/src/NuramaClient.ts`) — JWT-authenticated, full surface. For server-side code acting on behalf of a user, or admin tooling.
- **`BotClient`** (`packages/sdk/src/BotClient.ts`) — bot API key (`nrm_bot_…`), reduced surface (no auth/user-self/payment/subscription/device/bot-administration). Default base URLs are `https://bot.nurama.com` (HTTP) and `https://bot-ws.nurama.com` (WebSocket). Use this from any process running as a bot user.

```js
import BotClient from '@nurama/sdk/bot';
const bot = new BotClient(process.env.NURAMA_BOT_API_KEY);
```

Both clients expose the same namespace objects (`bot.chat`, `client.chat`, etc.); the only difference is what's reachable. This document covers the **bot-reachable** subset. Non-bot namespaces (`auth`, `payment`, `subscription`, `device`) are intentionally omitted.

## Conventions

- **Read-only** vs **mutating** — flagged on every method. Bots in read-heavy workflows should default to read-only methods unless their purpose is explicitly to write.
- **Method names repeat the noun** — `asset.getAsset`, `board.createBoard`, `supportTicket.listSupportTickets`, never `asset.get`. Methods close over the client rather than `this`, so a namespace can be destructured (`const { getAsset, updateAsset } = client.asset`) and names from different namespaces never collide. Verb vocabulary: `get`/`list` for reads, `create`, `update`, `delete`, `add`/`remove` for membership-style changes, and the action name (`follow`, `tag`, `publish`, ...) for actions.
- **Methods live in the namespace of the resource in the URL** — `/tasks/{id}/links` is `task.getTaskLinks`, `/public-download/{token}` is `public.resolvePublicDownload`.
- **Visibility is an argument** — reads that differ by tier take `visibility: 'creator' | 'reviewer'` (e.g. `project.getAssets(projectId, 'reviewer')`, `project.getHomeFeed`, `project.getFolders`, `project.getProjectChat`, `project.getHighlightedMessages`). Always pass the tier matching the originating chat; never read across tiers.
- **Pagination** — methods returning `PaginatedResponse<T>` accept `{ limit, paginate: 'cursor' | 'index', cursor?, page? }`. Cursor pagination is the default for streams; index pagination for fixed-size lists. Backend caps `limit` at 20 in most places.
- **Required IDs** — `chatId`, `projectId`, `messageId`, etc. throw if missing. Always pass them.

## Bot-relevant subset (start here)

For most bot tools, you'll want one of these:

| Goal | Method | Notes |
|---|---|---|
| Get the chat the bot was @mentioned in | `bot.chat.getChat(chatId)` | Read-only. Returns `chatType`, `topicType`, `topicId`, `visibility`, `participants`. |
| Get recent chat history | `bot.chat.getMessages(chatId, params)` | Read-only. `sort: { createdAt: -1 }, limit: 20, excludeReplies: true` is the conventional shape. |
| Get one message | `bot.chat.getMessage(messageId)` | Read-only. Used for reply-author lookups. |
| Reply in a chat | `bot.chat.createMessage(chatId, { content, assetMentions?, mentions? })` | **Mutating.** Pass `assetMentions: [uuid…]` to render `{{assetMention:UUID}}` tokens as clickable. |
| List active assets in a project | `bot.project.getHomeFeed(projectId, visibility, params)` | Read-only. Same shape as the FE feed; pass `chatMessageLimit: 20` to get chat data inline. |
| List project members | `bot.membership.getProjectMemberships(projectId, params)` | Read-only. |
| Get bot's own memberships | `bot.membership.getMyMemberships()` | Read-only. Used at startup. |
| Subscribe to events | `bot.socket.subscribe(channel, event, handler)` | Channels: `/user/{botUserId}`, `/project/{projectId}`, `/project/{projectId}/{visibility}`. |
| Emit typing indicator | `bot.socket.emit(channel, 'typing:start', { chatId })` / `typing:stop` | Bot must already be subscribed to `channel`. Server fans out to chat/project channels automatically. |

If your tool is doing something that doesn't fit the table above, scan the per-namespace sections below before writing new code.

---

## `bot.chat` — chats and messages

> File: `packages/sdk/src/routes/chat.ts`

### Topic chats (auto-created for projects/assets/tasks)

- **read** `createTopicChat(data)` — programmatic topic-chat creation (rare; usually auto-created).
- **read** `getChatByTopicId(topicId, { topicType, visibility })` — fetch by topic instead of chatId.
- **read** `getChat(chatId)` — single chat with metadata + recentMessages refs.
- **mutate** `updateChatSubject(chatId, { subject })`
- **mutate** `deleteChat(chatId)` — *destructive*

### Member chats (private DMs)

- **mutate** `createMemberChat(data)` — start a 1:1 or group chat.
- **read** `getUsersMemberChats(params)` — paginated list of bot's member chats.
- **read** `getMemberChat(chatId)` — single member chat.
- **mutate** `updateMemberChat(chatId, data)`
- **mutate** `archiveMemberChat(chatId)` / `unarchiveMemberChat(chatId)`
- **mutate** `addMembers(chatId, { memberIds })` / `removeMembers(chatId, { memberIds })`
- **read** `getAddableMembers(chatId)` — who can be invited.
- **mutate** `updateMemberChatIcon(chatId, fileData)`
- **mutate** `deleteMemberChat(chatId)` — *destructive*

### Messages

- **mutate** `createMessage(chatId, { content, attachments?, mentions?, assetMentions?, folderMentions?, replyToId?, quotes? })` — primary write for bots.
- **read** `getMessages(chatId, { limit, sort, excludeReplies, contentSearch?, authorId?, hasAttachments?, hasAnnotations?, highlighted?, type? })` — paginated.
- **read** `getMessage(messageId, { replies? })`
- **mutate** `reviseMessage(messageId, data)`
- **mutate** `deleteMessage(messageId)` — *destructive*
- **read** `getReplies(messageId, params)`
- **read** `getMessagePage(messageId, params)` — find which page a message is on.
- **mutate** `addAttachments(messageId, attachments)` / `removeAttachment(messageId, assetId)`
- **read** `getMentions(params)` — bot's @-mentions across chats.
- **mutate** `createReaction(messageId, { emoji })` / `removeReaction(messageId)`
- **mutate** `highlightMessage(messageId)` / `unhighlightMessage(messageId)`
- **mutate** `createMessageShortLink(messageId)` — returns `{ code, shortUrl }`.
- **read** `fetchLinkPreviews({ urls })`

### Mentionable resources (chat-scoped autocomplete)

- **read** `getMentionableAssets(chatId, params)` — assets reachable from this chat.
- **read** `getMentionableFolders(chatId, params)`

### Summaries + chat following

- **mutate** `generateSummary(chatId, data)` — generate an AI summary of recent activity.
- **read** `getSummaries(chatId, params)`
- **mutate** `followChat(chatId)` / `unfollowChat(chatId)`

### Asset chat shortcut

- **mutate** `createAssetChatAndMessage(assetId, visibility, data, params)` — create a chat (if absent) and post a message in one call.

---

## `bot.project` — projects, assets-in-project, submissions, file system

> File: `packages/sdk/src/routes/project.ts` (the largest namespace)

### Project CRUD

- **read** `getProjects()` — bot's accessible projects (also see `bot.workspace.listProjects(workspaceId)`).
- **read** `getProject(projectId)`
- **mutate** `createProject(data)` / `updateProject(projectId, data)` / `deleteProject(projectId)`
- **mutate** `createLogo(projectId, fileData)` / `updateLogo(projectId, fileData)`

### Assets in a project (visibility-scoped)

- **read** `getAssets(projectId, visibility, params)` — flat lists, no chat data.
- **read** `getHomeFeed(projectId, visibility, params)` — assets *with* their chat data inline. **This is what the FE uses.** Pass `chatMessageLimit: 20`, `mediaTypes: ['image','video','audio']` to mirror the FE feed.
- **read** `getHomeFeed(projectId, visibility, params)` — visibility-parameterized version.
- **mutate** `createAssets(projectId, fileUploadBody)` — initiate uploads.

### Folders

- **read** `getFolders(projectId, visibility, params)`
- **read** `getFolders(projectId, visibility, params)`
- **mutate** `createFolder(projectId, visibility, data)`

### Project chats

- **read** `getProjectChat(projectId, visibility, params)`

### File-system path operations (visibility-scoped)

- **read** `getItemsAtPath(projectId, visibility, path, params, usePost?)`
- **mutate** `moveItemsToPath(projectId, visibility, data)` / `copyItemsToPath` / `deleteItemsAtPath` — *destructive*

### Submissions

- **mutate** `createSubmission(projectId, data)`
- **read** `getSubmissions(projectId, params)` / `getSubmission(projectId, submissionId, params)`
- **read** `getSubmissionAssets(projectId, submissionId, params)`
- **read** `getSubmissionItems(projectId, submissionId, path?, params)`
- **mutate** `addItemsToSubmission` / `updateSubmission` / `tagSubmission` / `untagSubmission`
- **mutate** `createSubmissionFolder` / `moveSubmissionItems` / `copySubmissionItems` / `deleteSubmissionItems` — *destructive last one*

### Publishing

- **mutate** `publishItems(projectId, data)` / `unpublishItems(projectId, data)`

### Public file systems (shareable links)

- **read** `getPublicFileSystems(projectId, params)` / `getPublicFileSystem(projectId, publicId)` / `getPublicAudit(...)`
- **mutate** `createPublicFileSystem(projectId, data)` / `updatePublicFileSystem` / `deletePublicFileSystem`
- **mutate** `addItemsToPublicFileSystem` / `getPublicItemsAtPath` / `movePublicItemsAtPath` / `copyPublicItemsAtPath` / `deletePublicItemsAtPath`

---

## `bot.asset` — single-asset operations

> File: `packages/sdk/src/routes/asset.ts`

- **read** `getAsset(assetId, { includeChats? })`
- **mutate** `updateAsset(assetId, data)` / `deleteAsset(assetId)` — *destructive last one*
- **read** `getFile(assetId, fileId)` — file metadata.
- **read** `getFilesByFunctionType(assetId, functionType)` — e.g. `'thumbnail'`, `'original'`, `'media'`.
- **read** `getAssetPage(assetId, params)` — find which page in a list this asset appears on.
- **mutate** `tagAsset(assetId, data)` / `untagAsset(assetId, data)`
- **mutate** `multipartUpload(...)` / `completeMultipartUpload(uploadData)` — file upload pipeline.
- **mutate** `repairAssets(assetIds)` — re-trigger post-processing.
- **read** `downloadAssets(assetIds)` — returns signed download URLs.
- **mutate** `createShortLink(assetId, data?)`
- **mutate** `createPublicLink(...)` / `updatePublicLink(...)` / `disablePublicLink` / `reactivatePublicLink`
- **read** `getPublicLinks(assetId)`

---

## `bot.folder` — single-folder operations

> File: `packages/sdk/src/routes/folder.ts`

- **read** `getFolder(folderId)` / `getFoldersAssets(folderId, params)`
- **mutate** `updateFolder(folderId, data)` / `updateFolderName(folderId, { name })` / `updateFolderIcon(folderId, data)`
- **mutate** `deleteFolder(folderId)` — *destructive*
- **mutate** `tagFolder(folderId, data)` / `untagFolder(folderId, data)`

---

## `bot.membership` — who has access to what

> File: `packages/sdk/src/routes/membership.ts`

- **read** `getMyMemberships()` — for the bot user. Used at startup to derive the bot's projects.
- **read** `getWorkspaceMemberships(workspaceId, params)` / `getProjectMemberships(projectId, params)` — paginated, supports `nameSearch` and `billable` filters.
- **read** `getProjectMentionableUsers(projectId, visibility)` — autocomplete for @mentions.
- **read** `getWorkspaceLastSeen(workspaceId, { userIds })` / `getProjectLastSeen(projectId, { userIds })` — bulk last-active timestamps (1–100 users).
- **mutate** `addRole(data)` / `removeRole(data)` — *privileged; bot needs admin scope*.
- **mutate** `deleteMembership(membershipId)` / `leaveResource(resourceId)` — *destructive*

---

## `bot.notification` — historical notifications

> File: `packages/sdk/src/routes/notification.ts`

- **read** `getNotifications(data)` — paginated by channels/types.
- **read** `getNewNotifications(data)` — unread since last seen.
- **read** `getNewNotificationCount(data)` / `getNewNotificationCountBulk(data)` — counts only.
- **read** `getUsersLastNotificationsSeen(data)` — last-seen timestamp per channel/type.
- **mutate** `updateUsersLastSeen(data)` — mark seen.

For real-time notifications, use `bot.socket.subscribe` instead.

---

## `bot.task` — tasks and acknowledgement

> File: `packages/sdk/src/routes/task.ts`

- **read** `getMyTasks(params)` — bot's tasks; filter by `projectId`, `creatorId`, `relatedToId`, `visibility`, `acknowledged`.
- **mutate** `updateTaskStatus(taskId, { status })` — `pending` / `inProgress` / `complete` / `cancelled`.
- **mutate** `acknowledgeTask(taskId)` — clears the unacknowledged flag.
- **read** `getUnacknowledgedTaskCount(projectId)` / `getTaskEvents(taskId, params)`

---

## `bot.user` — user profiles

> File: `packages/sdk/src/routes/user.ts`

- **read** `getUser(userId)` — public profile (sanitized).
- **read** `getSelf()` — bot's own profile.
- **mutate** `updateSelf(data)` / `updatePreferences(data)` / `createAvatar(fileData)` / `updateAvatar(fileData)` — bot self-administration.

---

## `bot.workspace` — workspaces and their projects

> File: `packages/sdk/src/routes/workspace.ts`

- **read** `getWorkspace(workspaceId)` / `listWorkspaces(sortParams)` / `listProjects(workspaceId)`
- **mutate** `createWorkspace(data)` / `updateWorkspace(workspaceId, data)` / `updateSetting(workspaceId, name, value)`
- **mutate** `deleteWorkspace(workspaceId)` — *destructive*
- **mutate** Logo/icon CRUD: `createLogo` / `updateLogo` / `createIcon` / `updateIcon`

---

## `bot.board` — kanban boards

> File: `packages/sdk/src/routes/board.ts`

- **read** `getProjectBoards(projectId, params)` / `getProjectTasks(projectId, params)` / `getBoard(boardId)` / `getBoardTasks(...)` / `getTaskLinks(taskId)`
- **mutate** `createBoard` / `updateBoard` / `deleteBoard` — *destructive last*
- **mutate** Column ops: `addColumn` / `reorderColumns` / `updateColumn` / `deleteColumn`
- **mutate** Task ops: `createBoardTask` / `addExistingTaskToBoard` / `moveTask` / `removeTaskFromBoard` / `updateTaskDetails`
- **mutate** Linking: `linkTask(taskId, data)` / `unlinkTask(taskId, linkedTaskId)`
- **mutate** Tagging: `tagBoard` / `untagBoard` / `tagTask` / `untagTask`

---

## `bot.convo` — live conversations

> File: `packages/sdk/src/routes/convo.ts`

- **mutate** `startConvo(data)` / `joinConvo(convoId)` / `rejoinConvo` / `leaveConvo` / `completeConvo` / `deleteConvo` / `updateConvo`
- **read** `getConvo(convoId)` / `getScopeConvos(...)`

---

## `bot.public` — public file system access

> File: `packages/sdk/src/routes/public.ts`

For when bots interact with publicly shared content via tokens.

- **read** `getPublicFileSystem(token)` / `getPublicItems(token, params)` / `getPublicItemsAtPath(token, path, params)` / `getPublicAsset(token, assetId)` / `getPublicChat(token, chatId?)` / `getPublicChatMessages(...)`
- **mutate** `createPublicChatMessage(...)` / `createPublicTopicChatMessage(...)` / `createPublicAssetChatMessage(...)`
- **read** `downloadAssets(token, data)` — public signed downloads.

---

## `bot.shortlink`

> File: `packages/sdk/src/routes/shortlink.ts`

- **read** `resolveShortLink(code)` — returns the canonical resource the link points to.
- **read** `resolvePublicDownload(token)` / `getPublicDownloadUrl(token)`

---

## `bot.tag` — workspace tags

> File: `packages/sdk/src/routes/tag.ts`

- **mutate** `createTag(data)` / `updateTag(tagId, data)` / `deleteTag(tagId)`
- **read** `getTags(...)`

---

## `bot.invite` — invitations

> File: `packages/sdk/src/routes/invite.ts`

- **mutate** `inviteUser(data)` / `acceptInvite(inviteId)` / `cancelInvite(inviteId)` / `resendInvite(inviteId)`
- **read** `getInvites(params)` / `getInviteById(inviteId)` / `getInvitesForResource(resourceId, params)`

---

## `bot.settings` — resource settings

> File: `packages/sdk/src/routes/settings.ts`

- **read** `getEffectiveSettings(...)` — resolved with inheritance.
- **read** `getResourceSettings(...)` / `getAllResourceSettings()`
- **mutate** `updateResourceSettings(...)` / `resetResourceSettings(...)` / `cleanupOrphanedSettings()`

---

## `bot.storage` — storage usage

> File: `packages/sdk/src/routes/storage.ts`

- **read** `getStorageChart(...)` / `getStorageRecord(...)`

---

## `bot.socket` — real-time events

> File: `packages/sdk/src/routes/socket.ts`

- `connect(channel, options)` / `connectPublic(publicToken, options)` — establish a Socket.IO namespace connection.
- `subscribe(channel, event, handler)` / `subscribePublic(publicToken, event, handler)` — most bots use this directly; auto-connects.
- `unsubscribe(channel, event, handler)`
- `disconnect(channel)` / `disconnectAll()`
- `emit(channel, event, data)` — publish on a connected channel (typing indicators, collab events).
- `isConnected(channel)` / `onReconnectFailed(channel, callback)`

### Channel patterns

- `/user/{userId}` — personal channel: chatMention notifications, member-chat fan-out.
- `/project/{projectId}` — project-wide events.
- `/project/{projectId}/{visibility}` — visibility-scoped events: `chatCreateMessage` for topic chats fans out here. Subscribe to both `creator` and `reviewer` if the bot's role spans both tiers.
- `/chat/{chatId}` — followers-only stream for one chat.
- `/public/{publicToken}` — public file-system events.

### Event types you'll encounter

- `chatMention` — bot was @-mentioned. `tokens: { chatId, messageId, mentions, message }`.
- `chatCreateMessage` — any new message in a chat the bot has visibility on. Includes the full message at `changes.create[].resource`.
- `chatReviseMessage` / `chatDeleteMessage` / `chatRefreshMessage` / `chatRemoveAttachment`
- `convoStart` / `convoJoin` / `convoLeave` / `convoComplete` / `convoDelete` / `convoUpdate`
- `assetStatusUpdate` / `assetFileUpdate`
- `userAvatarUpdate` / `userPublicUpdate`
- `taskCreate` / `taskUpdate`

### Server-listened events (emit from bot)

- `typing:start { chatId }` / `typing:stop { chatId }` — server resolves fanout from `chatId`; bot must be authenticated on the channel it emits from.

---

## How this SDK is documented and published

This file is the curated index; the rest of the SDK documentation is generated, so keep the generator inputs correct rather than writing prose elsewhere.

- **Reference pages come from JSDoc.** `pnpm --filter=@nurama/sdk docs:typedoc` runs TypeDoc with the markdown plugin (`typedoc.json`, entry points `NuramaClient.ts`, `BotClient.ts` and `src/routes/*.ts`) into the gitignored `docs/reference/`, which the developer portal ingests. Every public method needs a JSDoc block: one-line summary, `@param` for each argument (say which IDs are required and which visibility tier applies), `@returns` naming the response type, and `@example` for anything non-obvious. Mark helpers that should not appear with `@internal`.
- **Names are checked against the API.** `apps/api/tests/unit/docs/sdk-endpoint-coverage.test.js` parses every `_request({ method, endpoint })` call in `src/routes/*.ts` and fails when the endpoint or HTTP method does not match a mounted backend route. Run `cd apps/api && pnpm exec jest tests/unit/docs` after touching a route module.
- **Adding a method**: put it in the namespace of the resource in the URL, name it `<verb><Noun>` per the conventions above, write the JSDoc, export any new param/response types from `@nurama/types`, and add a line to the matching namespace section of this file. Do not add short aliases (`asset.get`) — they were removed in 1.4.0 and the naming convention exists so namespaces can be destructured without collisions.
- **Publishing is automatic and one-way.** `.github/workflows/sync-sdk-mirror.yml` squashes `packages/sdk` and `packages/types` into the public Apache-2.0 mirror (`vars.SDK_MIRROR_REPO`, default `nurama-team/nurama-sdk`) on each push to `release/production` that touches them, tags `v<version>` and publishes both packages to npm when `secrets.NPM_TOKEN` is set. The `repository`, `homepage` and `bugs` fields in both `package.json` files point at the public mirror and portal, not the monorepo; keep them that way. The workflow fails if the source changed without a version bump, so **bump `package.json` `version` in the same change** (patch for fixes, minor for new methods, major for removals or signature changes). The mirror is read-only; never commit to it directly. Because the mirror is public, the SDK and types packages may only depend on each other and on published npm packages, never on other monorepo code.
- `CONTRIBUTING.md`, `LICENSE` and `NOTICE` in this folder are shipped verbatim to the mirror; edit them here.

## When this doc disagrees with the code

The code wins. This file is hand-curated and drifts. If you find a discrepancy, fix the file — and add the missing method to its namespace section so the next AI assistant doesn't have to re-discover it.
