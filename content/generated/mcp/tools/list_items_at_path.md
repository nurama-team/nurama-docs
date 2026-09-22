# list_items_at_path

> Read-only.

List the file-system items (folders and assets, intermingled) at a path in a project's virtual file system. Use this to navigate the project's folder tree. Omit `path` for the root. The path format mirrors `project/{projectId}/{visibility}/folder1/folder2/asset.jpg` — pass the in-project segments only (no leading project/visibility).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` | yes | Which visibility tier of the file system to list. |
| `path` | string | no | Slash-separated path inside the project (omit for root). |
| `limit` | number | no | Page size (1-50, default 20). |

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
      "description": "Which visibility tier of the file system to list."
    },
    "path": {
      "type": "string",
      "description": "Slash-separated path inside the project (omit for root)."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "projectId",
    "visibility"
  ],
  "additionalProperties": false
}
```
