# create_folder

> **Mutating** — this tool writes to Nurama.

Create a folder inside a project. The folder lives under a specific visibility tier and an optional base path; pass `basePath` to nest inside an existing folder hierarchy. Returns the new folder record.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` | yes | Visibility tier the folder lives under. |
| `name` | string | yes | Folder name. |
| `basePath` | string | no | Optional parent path (e.g. `parent/sub`). Omit to create at the visibility root. |
| `color` | string | no | Optional hex color (e.g. `#FF6B35`). |

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
      "description": "Visibility tier the folder lives under."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Folder name."
    },
    "basePath": {
      "type": "string",
      "description": "Optional parent path (e.g. `parent/sub`). Omit to create at the visibility root."
    },
    "color": {
      "type": "string",
      "description": "Optional hex color (e.g. `#FF6B35`)."
    }
  },
  "required": [
    "projectId",
    "visibility",
    "name"
  ],
  "additionalProperties": false
}
```
