# list_project_mentionable_users

> Read-only.

List users who can be @-mentioned in a project chat at the given visibility tier. Use BEFORE `send_message` when the message should `{{mention:UUID}}` someone — filters out members who cannot see the visibility tier you're writing in.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` \\| `"all"` | yes | Visibility tier filter. `all` returns every mentionable user across tiers. |

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
        "reviewer",
        "all"
      ],
      "description": "Visibility tier filter. `all` returns every mentionable user across tiers."
    }
  },
  "required": [
    "projectId",
    "visibility"
  ],
  "additionalProperties": false
}
```
