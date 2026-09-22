# get_workspace

> Read-only.

Fetch a single workspace's metadata by id — name, slug, color, description, settings (including AI feature toggles), status. Use this to surface workspace-level info or to inspect which AI features are enabled before attempting AI-gated actions.

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
