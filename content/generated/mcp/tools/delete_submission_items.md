# delete_submission_items

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Remove paths from a submission. The underlying source assets in the creator tier are NOT touched — this only unbinds them from the submission. Returns a count of removed items.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `submissionId` | string | yes | UUID of the submission. |
| `itemPaths` | array of string | yes | Submission-relative item paths to remove. |

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
      "description": "Submission-relative item paths to remove."
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
