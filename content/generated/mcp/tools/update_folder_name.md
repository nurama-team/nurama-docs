# update_folder_name

> **Mutating** — this tool writes to Nurama.

Rename a folder. The folder's path-based FileSystem entry is updated atomically, so child assets stay reachable under the new name.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `folderId` | string | yes | UUID of the folder. |
| `name` | string | yes | New folder name. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "folderId": {
      "type": "string",
      "description": "UUID of the folder."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "New folder name."
    }
  },
  "required": [
    "folderId",
    "name"
  ],
  "additionalProperties": false
}
```
