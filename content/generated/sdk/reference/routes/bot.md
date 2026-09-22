[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/bot

# routes/bot

## Interfaces

### Bot

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="accounttype"></a> `accountType` | `"bot"` | - |
| <a id="apikey"></a> `apiKey?` | [`BotApiKeySummary`](#botapikeysummary) | - |
| <a id="apikeys"></a> `apiKeys?` | [`BotApiKeySummary`](#botapikeysummary)[] | - |
| <a id="avatar"></a> `avatar?` | `any` | Populated avatar Asset (joined server-side from `avatarId`). The web client resolves the image URL from this field via `getAvatarUrl()`. |
| <a id="avatarid"></a> `avatarId` | `string` \| `null` | - |
| <a id="color"></a> `color` | `string` | - |
| <a id="createdat"></a> `createdAt` | `string` | - |
| <a id="displayname"></a> `displayName` | `string` | - |
| <a id="id"></a> `id` | `string` | - |
| <a id="membershipid"></a> `membershipId?` | `string` | - |
| <a id="projectmemberships"></a> `projectMemberships?` | [`BotProjectMembership`](#botprojectmembership)[] | Project memberships within the workspace the bot belongs to. Populated by `listBots` and `getBot`. Empty array if the bot has no project assignments. |
| <a id="roles"></a> `roles?` | `string`[] | - |
| <a id="status"></a> `status` | `string` | - |
| <a id="updatedat"></a> `updatedAt` | `string` | - |

***

### BotApiKeySummary

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="createdat-1"></a> `createdAt` | `string` | - |
| <a id="expiresat"></a> `expiresAt?` | `string` \| `null` | - |
| <a id="id-1"></a> `id` | `string` | - |
| <a id="keyprefix"></a> `keyPrefix` | `string` | - |
| <a id="kind"></a> `kind?` | `"botAccess"` \| `"pat"` \| `"oauthAccess"` \| `"oauthRefresh"` \| `null` | Discriminator. Bot keys mint as 'botAccess'. |
| <a id="lastused"></a> `lastUsed?` | `string` \| `null` | - |
| <a id="name"></a> `name` | `string` | - |
| <a id="scopes"></a> `scopes?` | `string`[] | Granted action verbs. Empty array = unscoped (legacy). |
| <a id="status-1"></a> `status` | `"active"` \| `"revoked"` | - |

***

### BotProjectMembership

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="membershipid-1"></a> `membershipId` | `string` |
| <a id="projectid"></a> `projectId` | `string` |
| <a id="projectname"></a> `projectName` | `string` |
| <a id="roles-1"></a> `roles` | [`BotProjectRole`](#botprojectrole)[] |

***

### CreateBotData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="color-1"></a> `color?` | `string` | Optional hex color from the approved palette. Auto-assigned if omitted. |
| <a id="name-1"></a> `name` | `string` | Display name for the bot. 1–50 characters. |
| <a id="roles-2"></a> `roles` | (`"workspaceAdmin"` \| `"workspaceMember"` \| `"workspaceChatMember"`)[] | Workspace roles to grant the bot. Must be one or more of: workspaceAdmin, workspaceMember, workspaceChatMember. |
| <a id="scopes-1"></a> `scopes?` | `string`[] | Optional API-key scopes. Defaults to [] (legacy — bot key can call any route that isn't yet scope-gated). Once a route is gated by `requireTokenScope` the bot needs the matching scope here for that route to work. |

***

### CreateBotResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bot-1"></a> `bot` | [`Bot`](#bot) | - |
| <a id="rawkey"></a> `rawKey` | `string` | Raw API key, returned ONCE at creation time. Store it immediately — it cannot be retrieved again. |

***

### RotateBotKeyResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="apikey-1"></a> `apiKey` | [`BotApiKeySummary`](#botapikeysummary) | - |
| <a id="rawkey-1"></a> `rawKey` | `string` | New raw API key. Returned once. |

***

### UpdateBotAvatarFileData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="checksum"></a> `checksum` | `string` |
| <a id="name-2"></a> `name` | `string` |
| <a id="sizeinmb"></a> `sizeInMB` | `number` |

***

### UpdateBotAvatarResponse

#### Indexable

```ts
[k: string]: unknown
```

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="asset"></a> `asset?` | \{ \[`k`: `string`\]: `unknown`; `id`: `string`; \} |
| `asset.id` | `string` |
| <a id="signedurldata"></a> `signedUrlData?` | \{ `key`: `string`; `uploadId`: `string`; `urls`: `string`[]; \} |
| `signedUrlData.key` | `string` |
| `signedUrlData.uploadId` | `string` |
| `signedUrlData.urls` | `string`[] |
| <a id="user"></a> `user` | \{ `avatarId`: `string` \| `null`; `id`: `string`; \} |
| `user.avatarId` | `string` \| `null` |
| `user.id` | `string` |

***

### UpdateBotData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="color-2"></a> `color?` | `string` |
| <a id="name-3"></a> `name?` | `string` |

## Type Aliases

### BotProjectRole

```ts
type BotProjectRole = "creator" | "reviewer" | "projectAdmin";
```

## Functions

### default()

```ts
function default(client): {
  createBot: Promise<CreateBotResponse>;
  deleteBot: Promise<void>;
  getBot: Promise<Bot>;
  listBots: Promise<Bot[]>;
  listProjectMemberships: Promise<BotProjectMembership[]>;
  removeProjectMembership: Promise<void>;
  rotateBotKey: Promise<RotateBotKeyResponse>;
  setProjectMembership: Promise<BotProjectMembership>;
  updateBot: Promise<Bot>;
  updateBotAvatar: Promise<UpdateBotAvatarResponse>;
};
```

Bot user administration methods. Used by workspace owners/admins (callers
holding a JWT) to manage bot users in a workspace. Bots themselves cannot
call these endpoints — bot administration is restricted server-side.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createBot()` | (`workspaceId`, `data`) => `Promise`\<[`CreateBotResponse`](#createbotresponse)\> | Create a bot user in a workspace. Returns the new bot and the raw API key (shown only once). |
| `deleteBot()` | (`workspaceId`, `botId`) => `Promise`\<`void`\> | Delete a bot user. Revokes all API keys, removes the workspace membership, and marks the user inactive. |
| `getBot()` | (`workspaceId`, `botId`) => `Promise`\<[`Bot`](#bot)\> | Get a single bot's details, including all of its API key metadata (no secrets). |
| `listBots()` | (`workspaceId`) => `Promise`\<[`Bot`](#bot)[]\> | List bot users in a workspace. |
| `listProjectMemberships()` | (`workspaceId`, `botId`) => `Promise`\<[`BotProjectMembership`](#botprojectmembership)[]\> | List the bot's project memberships within the workspace. |
| `removeProjectMembership()` | ( `workspaceId`, `botId`, `projectId` ) => `Promise`\<`void`\> | Remove the bot's membership on a project. Idempotent. |
| `rotateBotKey()` | (`workspaceId`, `botId`) => `Promise`\<[`RotateBotKeyResponse`](#rotatebotkeyresponse)\> | Revoke the bot's current API key and issue a new one. The new raw key is returned once. |
| `setProjectMembership()` | ( `workspaceId`, `botId`, `projectId`, `data` ) => `Promise`\<[`BotProjectMembership`](#botprojectmembership)\> | Upsert the bot's membership on a project. Replaces roles if a membership already exists; creates one otherwise. Idempotent. |
| `updateBot()` | ( `workspaceId`, `botId`, `data` ) => `Promise`\<[`Bot`](#bot)\> | Update a bot's display name and/or color. |
| `updateBotAvatar()` | ( `workspaceId`, `botId`, `fileData` ) => `Promise`\<[`UpdateBotAvatarResponse`](#updatebotavatarresponse)\> | Request signed URL data to upload a new avatar for the bot. Upload the file with `client.asset.multipartUpload(...)` using the returned `signedUrlData`, then call `client.asset.completeUpload(...)` to finalize. |
