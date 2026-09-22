# move_task

> **Mutating** — this tool writes to Nurama.

Move a task. For a same-board move, pass `columnId` (the target column on the same board). For a cross-board move, pass `targetBoardId` — `columnId` is then optional (server falls back to the target board's default column). If the resulting column has a `taskStatus` set, the task's top-level status auto-updates to match. At least one of `columnId` or `targetBoardId` is required.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board the task currently belongs to. |
| `taskId` | string | yes | UUID of the task to move. |
| `columnId` | string | no | UUID of the target column. Required for same-board moves. Optional when `targetBoardId` is set (server falls back to the target board's default column). |
| `targetBoardId` | string | no | When set AND different from `boardId`, the task is moved cross-board. The server updates both board and column atomically. |
| `sortOrder` | number | no | Optional explicit sort position within the resulting column. Omit to append to the end. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board the task currently belongs to."
    },
    "taskId": {
      "type": "string",
      "description": "UUID of the task to move."
    },
    "columnId": {
      "type": "string",
      "description": "UUID of the target column. Required for same-board moves. Optional when `targetBoardId` is set (server falls back to the target board's default column)."
    },
    "targetBoardId": {
      "type": "string",
      "description": "When set AND different from `boardId`, the task is moved cross-board. The server updates both board and column atomically."
    },
    "sortOrder": {
      "type": "number",
      "description": "Optional explicit sort position within the resulting column. Omit to append to the end."
    }
  },
  "required": [
    "boardId",
    "taskId"
  ],
  "additionalProperties": false
}
```
