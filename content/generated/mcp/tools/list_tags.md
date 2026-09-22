# list_tags

> Read-only.

List every tag defined for an owner resource — project or workspace. Use this to discover `tagId` values before calling `tag_task`, `tag_board`, or similar — there is no other way to enumerate tags. Tags are scoped to their owner resource: a project's tags only apply to that project, a workspace's tags to that workspace.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `ownerResourceType` | `"project"` \\| `"workspace"` | yes | Which resource type owns the tags. |
| `ownerResourceId` | string | yes | UUID of the owner resource. |
| `search` | string | no | Optional case-insensitive substring match on the tag name. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "ownerResourceType": {
      "type": "string",
      "enum": [
        "project",
        "workspace"
      ],
      "description": "Which resource type owns the tags."
    },
    "ownerResourceId": {
      "type": "string",
      "description": "UUID of the owner resource."
    },
    "search": {
      "type": "string",
      "description": "Optional case-insensitive substring match on the tag name."
    }
  },
  "required": [
    "ownerResourceType",
    "ownerResourceId"
  ],
  "additionalProperties": false
}
```
