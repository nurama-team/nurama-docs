# get_folder

> Read-only.

Fetch a single folder's metadata by id — name, parent folderId, path, owner project, etc. For the folder's contents, use `list_folder_assets`. For project-root folder listing, use `list_items_at_path`.

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
