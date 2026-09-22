# update_submission

> **Mutating** — this tool writes to Nurama.

Rename / redescribe / re-version a submission. Pass only the fields that change.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `submissionId` | string | yes | UUID of the submission. |
| `subject` | string | no |  |
| `description` | string | no |  |
| `version` | string | no |  |

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
    "subject": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "version": {
      "type": "string"
    }
  },
  "required": [
    "projectId",
    "submissionId"
  ],
  "additionalProperties": false
}
```
