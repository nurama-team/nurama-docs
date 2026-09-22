[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/task

# routes/task

## Interfaces

### AcknowledgeAllTasksResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="acknowledged"></a> `acknowledged` | `number` | Number of tasks that were acknowledged by this call. |
| <a id="unacknowledgedcount"></a> `unacknowledgedCount` | [`UnacknowledgedTaskCountResponse`](#unacknowledgedtaskcountresponse) | The user's remaining unacknowledged count for the project (should be all-zero). |

***

### BulkCreateTaskResult

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="clientid"></a> `clientId` | `string` |
| <a id="error"></a> `error?` | \{ `code`: `string`; `message`: `string`; \} |
| `error.code` | `string` |
| `error.message` | `string` |
| <a id="status"></a> `status` | `"error"` \| `"created"` |
| <a id="task"></a> `task?` | `Task` |

***

### BulkCreateTasksRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="announce"></a> `announce?` | \{ `chatId`: `string`; `messageId`: `string`; \} | When present, the server posts a single Nu reply in the chat after the batch creates, threaded as `replyToId = messageId` and carrying every newly-created task as a taskCard. Replaces the standalone `ai.announceTasksFromMessage` endpoint we shipped previously. |
| `announce.chatId` | `string` | - |
| `announce.messageId` | `string` | - |
| <a id="projectid"></a> `projectId` | `string` | - |
| <a id="tasks"></a> `tasks` | [`BulkTaskDraft`](#bulktaskdraft)[] | - |

***

### BulkCreateTasksResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="announce-1"></a> `announce?` | \{ `messageId`: `string` \| `null`; `posted`: `boolean`; \} |
| `announce.messageId` | `string` \| `null` |
| `announce.posted` | `boolean` |
| <a id="results"></a> `results` | [`BulkCreateTaskResult`](#bulkcreatetaskresult)[] |

***

### BulkTaskDraft

One task draft in a `bulkCreate` request.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assignedtoid"></a> `assignedToId?` | `string` | - |
| <a id="boardid"></a> `boardId` | `string` | - |
| <a id="clientid-1"></a> `clientId` | `string` | Caller-assigned id; echoed back in `results` so the caller can map a per-task outcome onto the originating draft. |
| <a id="columnid"></a> `columnId?` | `string` | - |
| <a id="description"></a> `description?` | `string` \| `null` | - |
| <a id="subject"></a> `subject` | `string` | - |
| <a id="tagids"></a> `tagIds?` | `string`[] | - |

***

### GetTaskEventsParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="eventtype"></a> `eventType?` | `string` |
| <a id="limit"></a> `limit?` | `number` |
| <a id="page"></a> `page?` | `number` |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### GetTasksBaseParams

#### Extends

- [`SortParams`](#sortparams)

#### Extended by

- [`GetTasksIndexParams`](#gettasksindexparams)
- [`GetTasksCursorParams`](#gettaskscursorparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="acknowledged-1"></a> `acknowledged?` | `boolean` | - |
| <a id="creatorid"></a> `creatorId?` | `string` | - |
| <a id="limit-1"></a> `limit?` | `number` | - |
| <a id="projectid-1"></a> `projectId?` | `string` | - |
| <a id="relatedtoid"></a> `relatedToId?` | `string` | - |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-4) |
| <a id="visibility"></a> `visibility?` | [`TaskVisibility`](#taskvisibility) | - |

***

### GetTasksCursorParams

#### Extends

- [`GetTasksBaseParams`](#gettasksbaseparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="acknowledged-2"></a> `acknowledged?` | `boolean` | [`GetTasksBaseParams`](#gettasksbaseparams).[`acknowledged`](#acknowledged-1) |
| <a id="creatorid-1"></a> `creatorId?` | `string` | [`GetTasksBaseParams`](#gettasksbaseparams).[`creatorId`](#creatorid) |
| <a id="cursor"></a> `cursor?` | `string` | - |
| <a id="includecounts"></a> `includeCounts?` | `boolean` | - |
| <a id="includecursorrecord"></a> `includeCursorRecord?` | `boolean` | - |
| <a id="includestartatrecord"></a> `includeStartAtRecord?` | `boolean` | - |
| <a id="limit-2"></a> `limit?` | `number` | [`GetTasksBaseParams`](#gettasksbaseparams).[`limit`](#limit-1) |
| <a id="paginate"></a> `paginate` | `"cursor"` | - |
| <a id="paginatereverse"></a> `paginateReverse?` | `boolean` | - |
| <a id="projectid-2"></a> `projectId?` | `string` | [`GetTasksBaseParams`](#gettasksbaseparams).[`projectId`](#projectid-1) |
| <a id="relatedtoid-1"></a> `relatedToId?` | `string` | [`GetTasksBaseParams`](#gettasksbaseparams).[`relatedToId`](#relatedtoid) |
| <a id="sort-2"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`GetTasksBaseParams`](#gettasksbaseparams).[`sort`](#sort-1) |
| <a id="startat"></a> `startAt?` | `string` | - |
| <a id="visibility-1"></a> `visibility?` | [`TaskVisibility`](#taskvisibility) | [`GetTasksBaseParams`](#gettasksbaseparams).[`visibility`](#visibility) |

***

### GetTasksIndexParams

#### Extends

- [`GetTasksBaseParams`](#gettasksbaseparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="acknowledged-3"></a> `acknowledged?` | `boolean` | [`GetTasksBaseParams`](#gettasksbaseparams).[`acknowledged`](#acknowledged-1) |
| <a id="createdafter"></a> `createdAfter?` | `string` \| `number` | - |
| <a id="createdbefore"></a> `createdBefore?` | `string` \| `number` | - |
| <a id="creatorid-2"></a> `creatorId?` | `string` | [`GetTasksBaseParams`](#gettasksbaseparams).[`creatorId`](#creatorid) |
| <a id="limit-3"></a> `limit?` | `number` | [`GetTasksBaseParams`](#gettasksbaseparams).[`limit`](#limit-1) |
| <a id="page-1"></a> `page?` | `number` | - |
| <a id="paginate-1"></a> `paginate?` | `"index"` | - |
| <a id="projectid-3"></a> `projectId?` | `string` | [`GetTasksBaseParams`](#gettasksbaseparams).[`projectId`](#projectid-1) |
| <a id="relatedtoid-2"></a> `relatedToId?` | `string` | [`GetTasksBaseParams`](#gettasksbaseparams).[`relatedToId`](#relatedtoid) |
| <a id="sort-3"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`GetTasksBaseParams`](#gettasksbaseparams).[`sort`](#sort-1) |
| <a id="visibility-2"></a> `visibility?` | [`TaskVisibility`](#taskvisibility) | [`GetTasksBaseParams`](#gettasksbaseparams).[`visibility`](#visibility) |

***

### SortParams

#### Extended by

- [`GetTasksBaseParams`](#gettasksbaseparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-4"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### TaskEvent

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="actor"></a> `actor` | [`TaskEventActor`](#taskeventactor-1) \| `null` |
| <a id="createdat"></a> `createdAt` | `string` |
| <a id="detail"></a> `detail?` | `Record`\<`string`, `unknown`\> |
| <a id="eventtype-1"></a> `eventType` | `string` |
| <a id="id"></a> `id` | `string` |
| <a id="projectid-4"></a> `projectId` | `string` |
| <a id="taskid"></a> `taskId` | `string` |

***

### TaskEventActor

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="avatar"></a> `avatar?` | `unknown` |
| <a id="color"></a> `color?` | `string` |
| <a id="displayname"></a> `displayName?` | `string` |
| <a id="firstname"></a> `firstName?` | `string` |
| <a id="id-1"></a> `id` | `string` |
| <a id="lastname"></a> `lastName?` | `string` |

***

### UnacknowledgedTaskCountResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="creator"></a> `creator` | `number` |
| <a id="reviewer"></a> `reviewer` | `number` |
| <a id="total"></a> `total` | `number` |

***

### UpdateTaskStatusData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="status-1"></a> `status` | [`TaskStatus`](#taskstatus) |

## Type Aliases

### GetTaskEventsResponse

```ts
type GetTaskEventsResponse = PaginatedResponse<TaskEvent>;
```

***

### GetTasksParams

```ts
type GetTasksParams = 
  | GetTasksIndexParams
  | GetTasksCursorParams;
```

***

### GetTasksResponse

```ts
type GetTasksResponse = PaginatedResponse<Task>;
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

***

### TaskStatus

```ts
type TaskStatus = "pending" | "complete" | "cancelled";
```

***

### TaskVisibility

```ts
type TaskVisibility = "creator" | "reviewer";
```

## Functions

### default()

```ts
function default(client): {
  acknowledgeAllTasks: Promise<AcknowledgeAllTasksResponse>;
  acknowledgeTask: Promise<Task>;
  bulkCreate: Promise<BulkCreateTasksResponse>;
  deleteTask: Promise<void>;
  followTask: Promise<Task>;
  getMyTasks: Promise<GetTasksResponse>;
  getTaskEvents: Promise<GetTaskEventsResponse>;
  getTaskLinks: Promise<TaskLink[]>;
  getUnacknowledgedTaskCount: Promise<UnacknowledgedTaskCountResponse>;
  linkTask: Promise<TaskLink>;
  tagTask: Promise<Task>;
  unfollowTask: Promise<Task>;
  unlinkTask: Promise<void>;
  untagTask: Promise<Task>;
  updateTaskDetails: Promise<Task>;
  updateTaskStatus: Promise<Task>;
};
```

Defines task-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the task-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `acknowledgeAllTasks()` | (`projectId`) => `Promise`\<[`AcknowledgeAllTasksResponse`](#acknowledgealltasksresponse)\> | Acknowledge every unacknowledged mention-task the current user has in a project. Idempotent server-side. |
| `acknowledgeTask()` | (`taskId`) => `Promise`\<`Task`\> | Toggles the acknowledgement status of a specific task. Requires authentication and permission. |
| `bulkCreate()` | (`data`) => `Promise`\<[`BulkCreateTasksResponse`](#bulkcreatetasksresponse)\> | Bulk-create one or more tasks under a single project in a single round-trip. Per-task partial success is returned in `results[]`; if `announce` is set and at least one task creates, the server also posts a Nu reply linking the new tasks back to the source message and rendering them as inline taskCards. |
| `deleteTask()` | (`taskId`) => `Promise`\<`void`\> | Permanently delete a task. Gated server-side by `canRemove{Visibility}BoardTask` for at least one of the parent board's visibility tiers (see `boardPermission('Remove', 'BoardTask')`). Returns void; the server responds with 204 No Content. |
| `followTask()` | (`taskId`) => `Promise`\<`Task`\> | Add the calling user to a task's `followers` list. Idempotent server-side — following an already-followed task is a no-op and still returns the current task. |
| `getMyTasks()` | (`params?`) => `Promise`\<[`GetTasksResponse`](#gettasksresponse)\> | Retrieves tasks assigned to the currently authenticated user. Supports filtering, sorting, and both index and cursor pagination. |
| `getTaskEvents()` | (`taskId`, `params?`) => `Promise`\<[`GetTaskEventsResponse`](#gettaskeventsresponse)\> | Retrieves the event log for a specific task. Returns paginated events in reverse chronological order with populated actor info. |
| `getTaskLinks()` | (`taskId`) => `Promise`\<`TaskLink`[]\> | List the tasks linked to a task, with the relation type of each link. **Throws** 'taskId is required.' when `taskId` is falsy. |
| `getUnacknowledgedTaskCount()` | (`projectId`) => `Promise`\<[`UnacknowledgedTaskCountResponse`](#unacknowledgedtaskcountresponse)\> | Retrieves the count of unacknowledged tasks for the current user within a specific project. Requires authentication. |
| `linkTask()` | (`taskId`, `data`) => `Promise`\<`TaskLink`\> | Link two tasks with a typed relation (related, blocks, blockedBy, duplicate). The link is symmetrical: both tasks reflect the relationship. **Throws** 'taskId is required.' or 'linkedTaskId is required.'. |
| `tagTask()` | (`taskId`, `tagId`) => `Promise`\<`Task`\> | Attach a project tag to a task. **Throws** 'taskId is required.' or 'tagId is required.'. |
| `unfollowTask()` | (`taskId`) => `Promise`\<`Task`\> | Remove the calling user from a task's `followers` list. Idempotent server-side — unfollowing a task you don't follow is a no-op and still returns the current task. |
| `unlinkTask()` | (`taskId`, `linkedTaskId`) => `Promise`\<`void`\> | Remove a task-to-task link. **Throws** 'taskId is required.' or 'linkedTaskId is required.'. |
| `untagTask()` | (`taskId`, `tagId`) => `Promise`\<`Task`\> | Detach a project tag from a task. **Throws** 'taskId is required.' or 'tagId is required.'. |
| `updateTaskDetails()` | (`taskId`, `data`) => `Promise`\<`Task`\> | Update a board task's subject, description, assignee or status. Requires the boards capability and board-task write permission. **Throws** 'taskId is required.' when `taskId` is falsy. |
| `updateTaskStatus()` | (`taskId`, `data`) => `Promise`\<`Task`\> | Updates the status of a specific task. Requires authentication and permission. |
