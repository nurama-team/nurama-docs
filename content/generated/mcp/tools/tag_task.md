# tag_task

> **Mutating** — this tool writes to Nurama.

Attach a project-scoped tag to a task. WRITE OPERATION. The tag must already exist in the project; this tool does not create new tags. To see what tags exist, fetch the project's tag catalogue via the FE (no dedicated MCP tool yet).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to tag. |
| `tagId` | string | yes | UUID of the project-scoped tag to apply. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to tag."
    },
    "tagId": {
      "type": "string",
      "description": "UUID of the project-scoped tag to apply."
    }
  },
  "required": [
    "taskId",
    "tagId"
  ],
  "additionalProperties": false
}
```
