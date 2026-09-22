# delete_folder

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a folder. The folder's assets and sub-folders are not auto-deleted — they remain in the project but lose their parent reference (i.e. surface at the visibility root). For a full cascade delete, walk the contents first with `list_items_at_path` and delete the assets explicitly.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `folderId` | string | yes | UUID of the folder. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "folderId": {
      "type": "string",
      "description": "UUID of the folder."
    }
  },
  "required": [
    "folderId"
  ],
  "additionalProperties": false
}
```
