# list_task_relations

> Read-only.

List the chat / message relations attached to a task. Each row tells you which chat or chat-message this task was spawned from or links to. Use to answer "where did this task come from?" or "what discussions reference it?" — complementary to `get_task_links` (task↔task) and `list_task_events` (audit log).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task. |
| `limit` | number | no | Page size (1-50, default 20). |
| `page` | number | no | Page number (index pagination). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    },
    "page": {
      "type": "number",
      "minimum": 1,
      "description": "Page number (index pagination)."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
