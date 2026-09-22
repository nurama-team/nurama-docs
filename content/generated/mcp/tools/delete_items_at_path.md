# delete_items_at_path

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete items from a project at the given paths under the given visibility tier. Each path can resolve to an asset or a folder. Returns a count of removed items. Deleting a folder may also delete everything inside it.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` | yes | Which visibility tier the paths live under. |
| `itemPaths` | array of string | yes | Visibility-relative paths to delete (e.g. `folder/asset.jpg`). |

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
      "description": "Which visibility tier the paths live under."
    },
    "itemPaths": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Visibility-relative paths to delete (e.g. `folder/asset.jpg`)."
    }
  },
  "required": [
    "projectId",
    "visibility",
    "itemPaths"
  ],
  "additionalProperties": false
}
```
