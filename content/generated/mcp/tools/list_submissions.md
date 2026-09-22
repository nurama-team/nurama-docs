# list_submissions

> Read-only.

List submission packages in a project. Submissions are reviewer-facing virtual folders that bundle published assets for review. Use this to discover `submissionId` values before `get_submission`, or to answer "what has been sent out for review?".

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
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
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
