# get_project

> Read-only.

Fetch a single project's metadata — name, slug, description, logo, workspaceId, status. Use this to resolve a `projectId` (from `list_my_memberships`) into something the human will recognise, or to confirm a project belongs to a specific workspace before acting.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
