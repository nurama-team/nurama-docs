[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/board

# routes/board

## Interfaces

### AddColumnData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="color"></a> `color?` | `string` | - |
| <a id="description"></a> `description?` | `string` | - |
| <a id="isdefault"></a> `isDefault?` | `boolean` | - |
| <a id="name"></a> `name` | `string` | - |
| <a id="reviewerscancontribute"></a> `reviewersCanContribute?` | `boolean` | When true, reviewer-role users may create tasks in this column on a reviewer-visibility board. |
| <a id="sortorder"></a> `sortOrder?` | `number` | - |
| <a id="taskstatus"></a> `taskStatus?` | `"pending"` \| `"inProgress"` \| `"complete"` \| `"closed"` \| `null` | - |

***

### AddExistingTaskData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="columnid"></a> `columnId?` | `string` |
| <a id="taskid"></a> `taskId` | `string` |

***

### CreateBoardData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="columns"></a> `columns?` | \{ `color?`: `string`; `description?`: `string`; `isDefault?`: `boolean`; `name`: `string`; `sortOrder?`: `number`; `taskStatus?`: `"pending"` \| `"inProgress"` \| `"complete"` \| `"closed"` \| `null`; \}[] |
| <a id="description-1"></a> `description?` | `string` |
| <a id="name-1"></a> `name` | `string` |
| <a id="projectid"></a> `projectId` | `string` |
| <a id="visibility"></a> `visibility?` | (`"creator"` \| `"reviewer"`)[] |

***

### CreateBoardTaskData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="announce"></a> `announce?` | \{ `chatId`: `string`; `messageId`: `string`; \} | Optional announce flag. When supplied, after the task is created the server posts a Nu reply in `chatId` threaded under `messageId` with this task as a single taskCard and links them via TaskRelation. Mirrors the same flag on `tasks.bulkCreate`. |
| `announce.chatId` | `string` | - |
| `announce.messageId` | `string` | - |
| <a id="assignedtoid"></a> `assignedToId?` | `string` | - |
| <a id="columnid-1"></a> `columnId?` | `string` | - |
| <a id="description-2"></a> `description?` | `string` | - |
| <a id="subject"></a> `subject` | `string` | - |

***

### LinkTaskData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="linkedtaskid"></a> `linkedTaskId` | `string` |
| <a id="linktype"></a> `linkType?` | `"related"` \| `"blocks"` \| `"blockedBy"` \| `"duplicate"` |

***

### MoveTaskData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="columnid-2"></a> `columnId?` | `string` | Required for same-board moves; optional when `targetBoardId` is set (server defaults to the target board's default column). |
| <a id="sortorder-1"></a> `sortOrder?` | `number` | - |
| <a id="targetboardid"></a> `targetBoardId?` | `string` | When supplied AND different from the URL `boardId`, the server performs a cross-board move — `boardId` and `columnId` are updated together. Omit for the original same-board move. |

***

### ReorderColumnsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="columns-1"></a> `columns` | \{ `id`: `string`; `sortOrder`: `number`; \}[] |

***

### UpdateBoardData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="cascade"></a> `cascade?` | `boolean` | When narrowing visibility, opt into automatic cleanup of dependent tasks, assignees, and relations. If omitted (or false) and dependents exist, the server returns 409 with a structured `errorData.blockers` payload. |
| <a id="description-3"></a> `description?` | `string` \| `null` | - |
| <a id="name-2"></a> `name?` | `string` | - |
| <a id="sortorder-2"></a> `sortOrder?` | `number` | - |
| <a id="status"></a> `status?` | `"active"` \| `"archived"` | - |
| <a id="visibility-1"></a> `visibility?` | (`"creator"` \| `"reviewer"`)[] | - |

***

### UpdateColumnData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="color-1"></a> `color?` | `string` \| `null` | - |
| <a id="description-4"></a> `description?` | `string` \| `null` | - |
| <a id="isdefault-1"></a> `isDefault?` | `boolean` | - |
| <a id="name-3"></a> `name?` | `string` | - |
| <a id="reviewerscancontribute-1"></a> `reviewersCanContribute?` | `boolean` | When true, reviewer-role users may create tasks in this column on a reviewer-visibility board. |
| <a id="sortorder-3"></a> `sortOrder?` | `number` | - |
| <a id="taskstatus-1"></a> `taskStatus?` | `"pending"` \| `"inProgress"` \| `"complete"` \| `"closed"` \| `null` | - |

***

### UpdateTaskDetailsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="assignedtoid-1"></a> `assignedToId?` | `string` \| `null` |
| <a id="description-5"></a> `description?` | `string` \| `null` |
| <a id="subject-1"></a> `subject?` | `string` |

## Functions

### default()

```ts
function default(client): {
  addColumn: Promise<BoardColumn>;
  addExistingTaskToBoard: Promise<Task>;
  createBoard: Promise<Board>;
  createBoardTask: Promise<Task>;
  deleteBoard: Promise<{
     deletedTaskIds: string[];
     disposition: string;
     message: string;
     reassignedTaskIds: string[];
  }>;
  deleteColumn: Promise<void>;
  followBoard: Promise<Board>;
  getBoard: Promise<BoardWithTasks>;
  getBoardTasks: Promise<Task[]>;
  getProjectBoards: Promise<Board[]>;
  getProjectTasks: Promise<any>;
  moveTask: Promise<Task>;
  removeTaskFromBoard: Promise<Task>;
  reorderColumns: Promise<BoardColumn[]>;
  tagBoard: Promise<Board>;
  unfollowBoard: Promise<Board>;
  untagBoard: Promise<Board>;
  updateBoard: Promise<Board>;
  updateColumn: Promise<BoardColumn>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `addColumn()` | (`boardId`, `data`) => `Promise`\<`BoardColumn`\> | Add a column to a board. Appended at the end unless `sortOrder` is provided. |
| `addExistingTaskToBoard()` | (`boardId`, `data`) => `Promise`\<`Task`\> | Attach an existing project task to a board (no new task is created). |
| `createBoard()` | (`data`) => `Promise`\<`Board`\> | Create a new board inside a project. If `columns` are omitted the server seeds the standard four-column layout. |
| `createBoardTask()` | (`boardId`, `data`) => `Promise`\<`Task`\> | Create a task directly on a board. When `announce` is supplied the server also posts a Nu reply in the named chat threaded under the given message, with this task linked via TaskRelation. |
| `deleteBoard()` | (`boardId`, `body?`) => `Promise`\<\{ `deletedTaskIds`: `string`[]; `disposition`: `string`; `message`: `string`; `reassignedTaskIds`: `string`[]; \}\> | Delete a board. `disposition` controls what happens to its tasks: `unassign` (default — tasks survive boardless), `delete`, or `reassign` to another board/column. |
| `deleteColumn()` | ( `boardId`, `columnId`, `targetColumnId?` ) => `Promise`\<`void`\> | Delete a column. If the column holds tasks, pass `targetColumnId` to move them; otherwise the call fails. |
| `followBoard()` | (`boardId`) => `Promise`\<`Board`\> | Follow a board to receive notifications about its tasks. |
| `getBoard()` | (`boardId`) => `Promise`\<`BoardWithTasks`\> | Fetch a board with its columns and tasks populated. |
| `getBoardTasks()` | (`boardId`, `params?`) => `Promise`\<`Task`[]\> | List tasks on a board, optionally narrowed by column / assignee / tag / status / search. |
| `getProjectBoards()` | (`projectId`, `params?`) => `Promise`\<`Board`[]\> | List boards in a project. Filters by visibility, free-text search, and tag ids. |
| `getProjectTasks()` | (`projectId`, `params?`) => `Promise`\<`any`\> | List every task in a project across all boards. Use `boardId: 'unassigned'` to fetch only tasks not yet placed on a board. |
| `moveTask()` | ( `boardId`, `taskId`, `data` ) => `Promise`\<`Task`\> | Move a task to a different column on the same board. |
| `removeTaskFromBoard()` | (`boardId`, `taskId`) => `Promise`\<`Task`\> | Detach a task from a board. The task itself is preserved as boardless. |
| `reorderColumns()` | (`boardId`, `data`) => `Promise`\<`BoardColumn`[]\> | Reorder a board's columns. The request must include every column id. |
| `tagBoard()` | (`boardId`, `tagId`) => `Promise`\<`Board`\> | Attach a tag to a board. |
| `unfollowBoard()` | (`boardId`) => `Promise`\<`Board`\> | Stop following a board. |
| `untagBoard()` | (`boardId`, `tagId`) => `Promise`\<`Board`\> | Detach a tag from a board. |
| `updateBoard()` | (`boardId`, `data`) => `Promise`\<`Board`\> | Update a board's metadata. Set `cascade: true` to opt into automatic cleanup of dependent tasks when narrowing visibility; otherwise the server returns 409 with a `blockers` payload. |
| `updateColumn()` | ( `boardId`, `columnId`, `data` ) => `Promise`\<`BoardColumn`\> | Update column metadata (name, color, task-status mapping, etc.). |
