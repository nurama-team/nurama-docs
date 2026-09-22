[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/settings

# routes/settings

## Interfaces

### EffectiveSettings

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="emailnotifications"></a> `emailNotifications` | `Record`\<`string`, `any`\> |
| <a id="sounds"></a> `sounds` | `Record`\<`string`, `any`\> |
| <a id="systemnotifications"></a> `systemNotifications` | `Record`\<`string`, `any`\> |

***

### ResourceSettings

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="emailnotifications-1"></a> `emailNotifications?` | `Record`\<`string`, `any`\> |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | `"project"` \| `"workspace"` |
| <a id="sounds-1"></a> `sounds?` | `Record`\<`string`, `any`\> |
| <a id="systemnotifications-1"></a> `systemNotifications?` | `Record`\<`string`, `any`\> |

***

### ResourceSettingsOverrides

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="emailnotifications-2"></a> `emailNotifications?` | \{ `dailySummary?`: `boolean` \| `null`; `newFollowing?`: `boolean` \| `null`; `newFollowingActiveInterval?`: `number` \| `null`; `newMention?`: `boolean` \| `null`; `newMentionActiveInterval?`: `number` \| `null`; `publishedAsset?`: `boolean` \| `null`; `sendEmailNotifications?`: `boolean` \| `null`; \} |
| `emailNotifications.dailySummary?` | `boolean` \| `null` |
| `emailNotifications.newFollowing?` | `boolean` \| `null` |
| `emailNotifications.newFollowingActiveInterval?` | `number` \| `null` |
| `emailNotifications.newMention?` | `boolean` \| `null` |
| `emailNotifications.newMentionActiveInterval?` | `number` \| `null` |
| `emailNotifications.publishedAsset?` | `boolean` \| `null` |
| `emailNotifications.sendEmailNotifications?` | `boolean` \| `null` |
| <a id="sounds-2"></a> `sounds?` | \{ `alerts?`: `boolean` \| `null`; `mentions?`: `boolean` \| `null`; `playSounds?`: `boolean` \| `null`; `privateMessages?`: `boolean` \| `null`; \} |
| `sounds.alerts?` | `boolean` \| `null` |
| `sounds.mentions?` | `boolean` \| `null` |
| `sounds.playSounds?` | `boolean` \| `null` |
| `sounds.privateMessages?` | `boolean` \| `null` |
| <a id="systemnotifications-2"></a> `systemNotifications?` | \{ `alerts?`: `boolean` \| `null`; `mentions?`: `boolean` \| `null`; `privateMessages?`: `boolean` \| `null`; `showSystemNotifications?`: `boolean` \| `null`; \} |
| `systemNotifications.alerts?` | `boolean` \| `null` |
| `systemNotifications.mentions?` | `boolean` \| `null` |
| `systemNotifications.privateMessages?` | `boolean` \| `null` |
| `systemNotifications.showSystemNotifications?` | `boolean` \| `null` |

## Functions

### default()

```ts
function default(client): {
  cleanupOrphanedSettings: Promise<{
     message: string;
     removedCount: number;
  }>;
  getAllResourceSettings: Promise<{
     resourceSettings: ResourceSettings[];
  }>;
  getEffectiveSettings: Promise<EffectiveSettings>;
  getResourceSettings: Promise<
     | ResourceSettings
     | {
     message: string;
  }>;
  resetResourceSettings: Promise<{
     message: string;
  }>;
  updateResourceSettings: Promise<{
     message: string;
     settings: ResourceSettings;
  }>;
};
```

Defines settings-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the settings-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `cleanupOrphanedSettings()` | () => `Promise`\<\{ `message`: `string`; `removedCount`: `number`; \}\> | Cleanup orphaned settings (settings for resources user no longer has access to). Requires authentication. |
| `getAllResourceSettings()` | () => `Promise`\<\{ `resourceSettings`: [`ResourceSettings`](#resourcesettings)[]; \}\> | Get all resource settings for current user. Requires authentication. |
| `getEffectiveSettings()` | ( `resourceType`, `resourceId`, `workspaceId?` ) => `Promise`\<[`EffectiveSettings`](#effectivesettings)\> | Get effective (resolved) settings for a resource with full cascade. Requires authentication. |
| `getResourceSettings()` | (`resourceType`, `resourceId`) => `Promise`\< \| [`ResourceSettings`](#resourcesettings) \| \{ `message`: `string`; \}\> | Get raw resource settings (overrides only, not cascaded). Requires authentication. |
| `resetResourceSettings()` | (`resourceType`, `resourceId`) => `Promise`\<\{ `message`: `string`; \}\> | Reset resource settings to inherit from parent/global. Requires authentication. |
| `updateResourceSettings()` | ( `resourceType`, `resourceId`, `settings` ) => `Promise`\<\{ `message`: `string`; `settings`: [`ResourceSettings`](#resourcesettings); \}\> | Update resource-specific settings. Requires authentication. |
