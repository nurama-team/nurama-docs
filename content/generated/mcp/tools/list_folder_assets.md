# list_folder_assets

> Read-only.

List the assets directly inside a folder. Does not recurse into sub-folders — for hierarchy walks, use `list_items_at_path`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `folderId` | string | yes | UUID of the folder. |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "folderId": {
      "type": "string",
      "description": "UUID of the folder."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "folderId"
  ],
  "additionalProperties": false
}
```
