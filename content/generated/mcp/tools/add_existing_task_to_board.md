# add_existing_task_to_board

> **Mutating** — this tool writes to Nurama.

Attach an existing task to a board (e.g. to move it across boards within the same project, or to re-board a task that was previously unassigned to any board). WRITE OPERATION. The task's board and column references update; its subject/description/assignee stay intact. For moving within the same board's columns, use `move_task` instead.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the destination board. |
| `taskId` | string | yes | UUID of the task to attach. |
| `columnId` | string | no | Optional UUID of a specific column on the destination board. Omit to land in the board's default column. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the destination board."
    },
    "taskId": {
      "type": "string",
      "description": "UUID of the task to attach."
    },
    "columnId": {
      "type": "string",
      "description": "Optional UUID of a specific column on the destination board. Omit to land in the board's default column."
    }
  },
  "required": [
    "boardId",
    "taskId"
  ],
  "additionalProperties": false
}
```
