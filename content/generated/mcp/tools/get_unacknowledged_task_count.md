# get_unacknowledged_task_count

> Read-only.

Return the count of tasks assigned to the calling identity that have not yet been acknowledged, scoped to a project. Use as a cheap "anything new for me here?" probe before paging through `list_my_tasks`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
