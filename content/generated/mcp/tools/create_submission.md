# create_submission

> **Mutating** — this tool writes to Nurama.

Bundle a set of items at given creator-tier paths into a submission for reviewer review. Submissions are immutable snapshots — they freeze the included paths at creation time. Optionally start empty and add items later with `add_items_to_submission`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `subject` | string | no | Subject / title of the submission. |
| `description` | string | no | Optional longer description. |
| `version` | string | no | Optional version label (e.g. `v1`, `2026.03`). |
| `itemPaths` | array of string | no | Project paths to include (e.g. `creator/folder1/asset.jpg`). Omit to start empty. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "subject": {
      "type": "string",
      "description": "Subject / title of the submission."
    },
    "description": {
      "type": "string",
      "description": "Optional longer description."
    },
    "version": {
      "type": "string",
      "description": "Optional version label (e.g. `v1`, `2026.03`)."
    },
    "itemPaths": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Project paths to include (e.g. `creator/folder1/asset.jpg`). Omit to start empty."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
