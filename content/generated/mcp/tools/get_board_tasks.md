# get_board_tasks

> Read-only.

List tasks on one specific board, with optional column / status / assignee / tag filters. Use this when you already know the board you care about. For tasks across an entire project, use `list_project_tasks`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `columnId` | string | no | Restrict to one column on the board. |
| `status` | `"pending"` \\| `"inProgress"` \\| `"complete"` \\| `"closed"` | no | Restrict to one task status. |
| `assignedToId` | string | no | Restrict to tasks assigned to one user. |
| `search` | string | no | Case-insensitive substring match on the task subject. |
| `tags` | array of string | no | Restrict to tasks carrying any of these tag UUIDs. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    },
    "columnId": {
      "type": "string",
      "description": "Restrict to one column on the board."
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "inProgress",
        "complete",
        "closed"
      ],
      "description": "Restrict to one task status."
    },
    "assignedToId": {
      "type": "string",
      "description": "Restrict to tasks assigned to one user."
    },
    "search": {
      "type": "string",
      "description": "Case-insensitive substring match on the task subject."
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Restrict to tasks carrying any of these tag UUIDs."
    }
  },
  "required": [
    "boardId"
  ],
  "additionalProperties": false
}
```
