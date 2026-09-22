# update_task_status

> **Mutating** — this tool writes to Nurama.

Set a task's top-level status to `pending`, `complete`, or `cancelled`. WRITE OPERATION — visible to every project member and recorded in the task's event log. Use this when the user asks to "close", "complete", or "cancel" a task. To move a task between columns on a board without changing status (e.g. To Do → In Progress, both pending), use `move_task` instead.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to update. |
| `status` | `"pending"` \\| `"complete"` \\| `"cancelled"` | yes | New top-level status. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to update."
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "complete",
        "cancelled"
      ],
      "description": "New top-level status."
    }
  },
  "required": [
    "taskId",
    "status"
  ],
  "additionalProperties": false
}
```
