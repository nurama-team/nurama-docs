# list_project_boards

> Read-only.

List the boards in a project, optionally filtered to one visibility tier. Use this to discover boardIds before listing tasks or creating a task in a specific board.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` | no | Restrict to one visibility tier. Omit to return all boards visible to the bot. |
| `search` | string | no | Optional case-insensitive substring match on the board name. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "visibility": {
      "type": "string",
      "enum": [
        "creator",
        "reviewer"
      ],
      "description": "Restrict to one visibility tier. Omit to return all boards visible to the bot."
    },
    "search": {
      "type": "string",
      "description": "Optional case-insensitive substring match on the board name."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
