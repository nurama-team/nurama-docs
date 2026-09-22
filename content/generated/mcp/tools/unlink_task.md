# unlink_task

> **Mutating** — this tool writes to Nurama.

Remove an existing relationship between two tasks. WRITE OPERATION. The relationship is symmetric — the link is removed regardless of which direction it was originally created in.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of one task in the relationship. |
| `linkedTaskId` | string | yes | UUID of the other task in the relationship. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of one task in the relationship."
    },
    "linkedTaskId": {
      "type": "string",
      "description": "UUID of the other task in the relationship."
    }
  },
  "required": [
    "taskId",
    "linkedTaskId"
  ],
  "additionalProperties": false
}
```
