[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/workspace

# routes/workspace

## Interfaces

### CreateWorkspaceData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="description"></a> `description?` | `string` |
| <a id="name"></a> `name` | `string` |

***

### FileData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="checksum"></a> `checksum` | `string` |
| <a id="name-1"></a> `name` | `string` |
| <a id="sizeinmb"></a> `sizeInMB` | `number` |

***

### SortParams

#### Indexable

```ts
[key: string]: -1 | 1
```

***

### UpdateWorkspaceData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="description-1"></a> `description?` | `string` |
| <a id="name-2"></a> `name?` | `string` |
| <a id="updateslug"></a> `updateSlug?` | `boolean` |

## Functions

### default()

```ts
function default(client): {
  createIcon: Promise<any>;
  createLogo: Promise<any>;
  createWorkspace: Promise<any>;
  deleteWorkspace: Promise<any>;
  getWorkspace: Promise<any>;
  listProjects: Promise<any[]>;
  listWorkspaces: Promise<any[]>;
  updateIcon: Promise<any>;
  updateLogo: Promise<any>;
  updateSetting: Promise<any>;
  updateWorkspace: Promise<any>;
};
```

Defines workspace-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the workspace methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `createIcon()` | (`workspaceId`, `fileData`) => `Promise`\<`any`\> | Request signed URL data to upload a workspace icon (the small square shown in sidebars and tabs — distinct from the logo). |
| `createLogo()` | (`workspaceId`, `fileData`) => `Promise`\<`any`\> | Request signed URL data to upload a workspace logo. Caller then multipart-uploads the file using the returned `signedUrlData` and calls `client.asset.completeUpload(...)` to finalize. |
| `createWorkspace()` | (`data`) => `Promise`\<`any`\> | Creates a new workspace. Requires authentication. |
| `deleteWorkspace()` | (`workspaceId`) => `Promise`\<`any`\> | Soft-delete a workspace. All nested resources (projects, chats, assets) become inaccessible; bytes are reclaimed by the cleanup cron. |
| `getWorkspace()` | (`workspaceId`) => `Promise`\<`any`\> | Retrieves a specific workspace by its ID. Requires authentication. |
| `listProjects()` | (`workspaceId`) => `Promise`\<`any`[]\> | List the projects inside a workspace that the calling user has access to. |
| `listWorkspaces()` | (`sortParams?`) => `Promise`\<`any`[]\> | Lists all workspaces the authenticated user has access to. Requires authentication. |
| `updateIcon()` | (`workspaceId`, `fileData`) => `Promise`\<`any`\> | Request signed URL data to replace the workspace icon. Same upload shape as `createIcon`. |
| `updateLogo()` | (`workspaceId`, `fileData`) => `Promise`\<`any`\> | Request signed URL data to replace the workspace logo. Same upload shape as `createLogo`; existing logo is replaced once `completeUpload` lands. |
| `updateSetting()` | ( `workspaceId`, `settingName`, `value` ) => `Promise`\<`any`\> | Toggle a single workspace boolean setting (e.g. an `enableX` feature flag). |
| `updateWorkspace()` | (`workspaceId`, `updateData`) => `Promise`\<`any`\> | Update workspace metadata (name, description, etc.). |
