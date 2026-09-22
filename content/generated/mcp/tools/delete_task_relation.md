# delete_task_relation

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Remove a task↔chat or task↔message relation. The task itself and the linked chat / message survive — only the link goes away. Look the relation up first with `list_task_relations` to get its `relationId`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task. |
| `relationId` | string | yes | UUID of the relation row to delete (from `list_task_relations`). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task."
    },
    "relationId": {
      "type": "string",
      "description": "UUID of the relation row to delete (from `list_task_relations`)."
    }
  },
  "required": [
    "taskId",
    "relationId"
  ],
  "additionalProperties": false
}
```
