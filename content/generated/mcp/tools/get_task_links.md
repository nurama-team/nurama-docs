# get_task_links

> Read-only.

List every task-link record attached to a single task — i.e. which other tasks it is related to, blocks, is blocked by, or duplicates. Each result includes the link type and the linked task's id. Use this to discover dependency chains before triaging a task or before adding a new link.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task whose links to fetch. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task whose links to fetch."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
