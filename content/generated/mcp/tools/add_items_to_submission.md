# add_items_to_submission

> **Mutating** — this tool writes to Nurama.

Add creator-tier paths to an existing submission. Optionally place them under a destination path within the submission so the receiving reviewers see a consistent folder structure.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `submissionId` | string | yes | UUID of the submission. |
| `itemPaths` | array of string | yes | Creator-tier project paths to include. |
| `destinationPath` | string | no | Optional sub-path within the submission to nest the items under. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "submissionId": {
      "type": "string",
      "description": "UUID of the submission."
    },
    "itemPaths": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Creator-tier project paths to include."
    },
    "destinationPath": {
      "type": "string",
      "description": "Optional sub-path within the submission to nest the items under."
    }
  },
  "required": [
    "projectId",
    "submissionId",
    "itemPaths"
  ],
  "additionalProperties": false
}
```
