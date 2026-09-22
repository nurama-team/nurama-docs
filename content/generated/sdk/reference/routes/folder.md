[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/folder

# routes/folder

## Interfaces

### GetFoldersAssetsParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="chats"></a> `chats?` | `boolean` | - |
| <a id="limit"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-1) |
| <a id="messages"></a> `messages?` | `number` | - |
| <a id="page"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-1) |
| <a id="replies"></a> `replies?` | `number` | - |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-1) |
| <a id="visibility"></a> `visibility?` | `"creator"` \| `"reviewer"` | - |

***

### PaginationParams

#### Extended by

- [`GetFoldersAssetsParams`](#getfoldersassetsparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="limit-1"></a> `limit?` | `number` |
| <a id="page-1"></a> `page?` | `number` |

***

### SortParams

#### Extended by

- [`GetFoldersAssetsParams`](#getfoldersassetsparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### TagFolderData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tagid"></a> `tagId` | `string` |

***

### UntagFolderData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tagid-1"></a> `tagId` | `string` |

***

### UpdateFolderData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="color"></a> `color?` | `string` |
| <a id="name"></a> `name?` | `string` |

***

### UpdateFolderIconData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="checksum"></a> `checksum` | `string` |
| <a id="name-1"></a> `name` | `string` |
| <a id="sizeinmb"></a> `sizeInMB` | `number` |

## Type Aliases

### AssetResponse

```ts
type AssetResponse = Asset;
```

***

### FolderResponse

```ts
type FolderResponse = Folder;
```

***

### PaginatedResponse

```ts
type PaginatedResponse<T> = PaginatedResult | CursorPaginatedResult & {
  results?: T[];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `results?` | `T`[] |

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Functions

### default()

```ts
function default(client): {
  getFolder: Promise<Folder>;
  getFoldersAssets: Promise<PaginatedResponse<Asset>>;
  tagFolder: Promise<Folder>;
  untagFolder: Promise<Folder>;
  updateFolder: Promise<Folder>;
  updateFolderIcon: Promise<any>;
};
```

Defines folder-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the folder-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `getFolder()` | (`folderId`) => `Promise`\<`Folder`\> | Fetch a single folder by id. |
| `getFoldersAssets()` | (`folderId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`Asset`\>\> | List the assets that live directly inside a folder (does not recurse). |
| `tagFolder()` | (`folderId`, `tagData`) => `Promise`\<`Folder`\> | Tags a folder with a specific tag. |
| `untagFolder()` | (`folderId`, `untagData`) => `Promise`\<`Folder`\> | Untags a folder by removing a specific tag. |
| `updateFolder()` | (`folderId`, `data`) => `Promise`\<`Folder`\> | Updates a folder's name and/or color. |
| `updateFolderIcon()` | (`folderId`, `data`) => `Promise`\<`any`\> | Updates a folder's icon. |
