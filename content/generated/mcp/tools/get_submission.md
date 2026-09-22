# get_submission

> Read-only.

Fetch a single submission package by id, including its metadata. Use this after `list_submissions` to drill into one submission's contents.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project the submission belongs to. |
| `submissionId` | string | yes | UUID of the submission. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project the submission belongs to."
    },
    "submissionId": {
      "type": "string",
      "description": "UUID of the submission."
    }
  },
  "required": [
    "projectId",
    "submissionId"
  ],
  "additionalProperties": false
}
```
