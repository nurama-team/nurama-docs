# list_my_tasks

> Read-only.

List tasks assigned to the bot user (or, in DANGEROUSLY_USE_USER_JWT mode, to the human user). Use this to answer "what do I have to do?" or to find a taskId before updating status / details. Supports filtering by status, project, board, etc.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | no | Restrict to one project (UUID). |
| `status` | `"pending"` \\| `"complete"` \\| `"cancelled"` | no | Restrict to one task status. |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "Restrict to one project (UUID)."
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "complete",
        "cancelled"
      ],
      "description": "Restrict to one task status."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "additionalProperties": false
}
```
