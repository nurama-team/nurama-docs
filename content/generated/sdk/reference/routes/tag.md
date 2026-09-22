[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/tag

# routes/tag

## Interfaces

### CreateTagData

Data required to create a new tag

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="color"></a> `color?` | `string` | Optional hex color code for the tag. If not provided, a color will be assigned automatically |
| <a id="name"></a> `name` | `string` | The name of the tag |
| <a id="ownerresourceid"></a> `ownerResourceId` | `string` | The ID of the resource that will own this tag |
| <a id="ownerresourcetype"></a> `ownerResourceType` | `TagOwnerResourceType` | The type of resource that will own this tag |

***

### GetTagsParams

Parameters for getting tags for a resource

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="name-1"></a> `name?` | `string` | Filter tags by partial name match (case-insensitive) |
| <a id="sortby"></a> `sortBy?` | `"createdAt"` \| `"updatedAt"` \| `"name"` | Sort tags by field |

***

### UpdateTagData

Data for updating an existing tag

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="color-1"></a> `color?` | `string` | The new hex color code for the tag |
| <a id="name-2"></a> `name?` | `string` | The new name for the tag |

## Type Aliases

### Tags

```ts
type Tags = Tag[];
```

Array of tags

## Functions

### default()

```ts
function default(client): {
  createTag: Promise<Tag>;
  deleteTag: Promise<Tag>;
  getTags: Promise<Tags>;
  updateTag: Promise<Tag>;
};
```

Defines tag-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the tag-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `createTag()` | (`tagData`) => `Promise`\<`Tag`\> | Creates a new tag for a specific resource. |
| `deleteTag()` | (`tagId`) => `Promise`\<`Tag`\> | Deletes a tag permanently. |
| `getTags()` | ( `ownerResourceType`, `ownerResourceId`, `params?` ) => `Promise`\<[`Tags`](#tags)\> | Retrieves all tags for a specific resource. |
| `updateTag()` | (`tagId`, `updateData`) => `Promise`\<`Tag`\> | Updates an existing tag. |
