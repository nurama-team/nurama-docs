# list_project_tasks

> Read-only.

List tasks across a project, with optional filters by board, column, status, assignee, or substring search on the subject. Use this to answer "what tasks are open?", to find a taskId for a follow-up tool, or to triage a board.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `boardId` | string | no | Restrict to tasks on a specific board. Pass the string "unassigned" for tasks not on any board. |
| `status` | `"pending"` \\| `"inProgress"` \\| `"complete"` \\| `"closed"` | no | Restrict to one task status. |
| `assignedToId` | string | no | Restrict to tasks assigned to a single user (UUID). |
| `search` | string | no | Case-insensitive substring match on the task subject. |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "boardId": {
      "type": "string",
      "description": "Restrict to tasks on a specific board. Pass the string \"unassigned\" for tasks not on any board."
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
      "description": "Restrict to tasks assigned to a single user (UUID)."
    },
    "search": {
      "type": "string",
      "description": "Case-insensitive substring match on the task subject."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
