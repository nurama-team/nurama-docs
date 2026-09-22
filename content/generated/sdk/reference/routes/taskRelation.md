[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/taskRelation

# routes/taskRelation

## Interfaces

### PaginatedTaskRelations

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="hasnextpage"></a> `hasNextPage?` | `boolean` |
| <a id="hasprevpage"></a> `hasPrevPage?` | `boolean` |
| <a id="limit"></a> `limit` | `number` |
| <a id="page"></a> `page` | `number` |
| <a id="results"></a> `results` | [`TaskRelation`](#taskrelation)[] |
| <a id="totalpages"></a> `totalPages` | `number` |
| <a id="totalresults"></a> `totalResults` | `number` |

***

### TaskRelation

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="asset"></a> `asset?` | `any` |
| <a id="chat"></a> `chat?` | \| \{ `chatType`: `string`; `id`: `string`; `publicId?`: `string` \| `null`; `subject?`: `string` \| `null`; `topicId`: `string`; `topicType`: `string`; `visibility`: `string`; \} \| `null` |
| <a id="createdat"></a> `createdAt` | `string` |
| <a id="creatorid"></a> `creatorId` | `string` |
| <a id="id"></a> `id` | `string` |
| <a id="message"></a> `message?` | \| \{ `assetMentions`: `string`[]; `author`: `any`; `authorId`: `string` \| `null`; `chatId`: `string`; `content`: `string` \| `null`; `createdAt`: `string`; `folderMentions`: `string`[]; `id`: `string`; `mentions`: `string`[]; \} \| `null` |
| <a id="publiclink"></a> `publicLink?` | \| \{ `id`: `string`; `name`: `string`; \} \| `null` |
| <a id="relatedby"></a> `relatedBy?` | `any` |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | [`RelationResourceType`](#relationresourcetype) |
| <a id="submission"></a> `submission?` | \| \{ `id`: `string`; `name`: `string`; \} \| `null` |
| <a id="taskid"></a> `taskId` | `string` |

## Type Aliases

### RelationResourceType

```ts
type RelationResourceType = "chat" | "chatMessage";
```

## Functions

### default()

```ts
function default(client): {
  createTaskRelation: Promise<TaskRelation>;
  deleteTaskRelation: Promise<void>;
  getRelationsForChat: Promise<PaginatedTaskRelations>;
  getRelationsForMessage: Promise<PaginatedTaskRelations>;
  getTaskRelations: Promise<PaginatedTaskRelations>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createTaskRelation()` | (`taskId`, `data`) => `Promise`\<[`TaskRelation`](#taskrelation)\> | Attach a related resource (chat message, chat, etc.) to a task, so the task surface shows the originating context. |
| `deleteTaskRelation()` | (`taskId`, `relationId`) => `Promise`\<`void`\> | Detach a related resource from a task. |
| `getRelationsForChat()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedTaskRelations`](#paginatedtaskrelations)\> | List task relations referencing a chat (reverse lookup). |
| `getRelationsForMessage()` | (`messageId`, `params?`) => `Promise`\<[`PaginatedTaskRelations`](#paginatedtaskrelations)\> | List task relations referencing a specific chat message (reverse lookup). |
| `getTaskRelations()` | (`taskId`, `params?`) => `Promise`\<[`PaginatedTaskRelations`](#paginatedtaskrelations)\> | List the relations attached to a task — chat messages, chats, or other resources that reference this task as context. |
