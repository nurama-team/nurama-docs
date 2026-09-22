# create_tag

> **Mutating** — this tool writes to Nurama.

Mint a new tag on a workspace or project. Tags are owned by exactly one resource and visible everywhere it cascades down to. Use BEFORE `tag_task` / `tag_asset` / `tag_folder` / `tag_board` if `list_tags` shows the desired tag does not yet exist. A color is assigned automatically when omitted.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | yes | The tag name (e.g. `urgent`, `q3-launch`). |
| `ownerResourceType` | `"workspace"` \\| `"project"` | yes | The resource that owns this tag — usually `project`. |
| `ownerResourceId` | string | yes | UUID of the owning resource. |
| `color` | string | no | Optional hex color (e.g. `#FF6B35`). Auto-assigned if omitted. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "The tag name (e.g. `urgent`, `q3-launch`)."
    },
    "ownerResourceType": {
      "type": "string",
      "enum": [
        "workspace",
        "project"
      ],
      "description": "The resource that owns this tag — usually `project`."
    },
    "ownerResourceId": {
      "type": "string",
      "description": "UUID of the owning resource."
    },
    "color": {
      "type": "string",
      "description": "Optional hex color (e.g. `#FF6B35`). Auto-assigned if omitted."
    }
  },
  "required": [
    "name",
    "ownerResourceType",
    "ownerResourceId"
  ],
  "additionalProperties": false
}
```
