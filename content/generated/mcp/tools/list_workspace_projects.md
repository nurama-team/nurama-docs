# list_workspace_projects

> Read-only.

List every project in a workspace the bot can see — name, slug, id, status. Use to discover projects before drilling in with `get_project`, `list_project_assets`, `list_project_tasks`, etc.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `workspaceId` | string | yes | UUID of the workspace. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "workspaceId": {
      "type": "string",
      "description": "UUID of the workspace."
    }
  },
  "required": [
    "workspaceId"
  ],
  "additionalProperties": false
}
```
