# untag_task

> **Mutating** — this tool writes to Nurama.

Remove a project-scoped tag from a task. WRITE OPERATION. Tag stays alive in the project — only the association with this task is removed.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to untag. |
| `tagId` | string | yes | UUID of the tag to detach. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to untag."
    },
    "tagId": {
      "type": "string",
      "description": "UUID of the tag to detach."
    }
  },
  "required": [
    "taskId",
    "tagId"
  ],
  "additionalProperties": false
}
```
