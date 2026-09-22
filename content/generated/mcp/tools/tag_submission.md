# tag_submission

> **Mutating** — this tool writes to Nurama.

Apply a tag to a submission. The tag must already exist on the project.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `submissionId` | string | yes | UUID of the submission. |
| `tagId` | string | yes | UUID of the tag. |

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
    "tagId": {
      "type": "string",
      "description": "UUID of the tag."
    }
  },
  "required": [
    "projectId",
    "submissionId",
    "tagId"
  ],
  "additionalProperties": false
}
```
