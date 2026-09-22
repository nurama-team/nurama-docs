# remove_task_from_board

> **Mutating** — this tool writes to Nurama.

Detach a task from its board without deleting the task. WRITE OPERATION. After this call the Task row survives but its boardId/columnId are cleared — it becomes a free-standing task (mention-style). Use this when you want to take a task off a board but keep it around (e.g. for re-boarding later). To actually delete a task, no MCP tool exists yet — do it in the UI.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board the task currently belongs to. |
| `taskId` | string | yes | UUID of the task to detach. |

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
      "description": "UUID of the task to detach."
    }
  },
  "required": [
    "boardId",
    "taskId"
  ],
  "additionalProperties": false
}
```
