# list_project_memberships

> Read-only.

List every user who has any membership in this project, with their roles. Use this to answer "who's on this project?", to validate an `assignedToId` before `create_task` / `update_task_details`, or to discover userIds for mentions.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
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
