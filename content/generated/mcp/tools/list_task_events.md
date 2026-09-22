# list_task_events

> Read-only.

List the audit / activity events for a single task — status changes, assignments, column moves, comments, etc. Use this to understand the history of a task before acting on it, or to write a summary of recent activity.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task whose events to fetch. |
| `eventType` | string | no | Optional filter by event type (e.g. "statusChange", "assigned"). |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task whose events to fetch."
    },
    "eventType": {
      "type": "string",
      "description": "Optional filter by event type (e.g. \"statusChange\", \"assigned\")."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
