# acknowledge_task

> **Mutating** — this tool writes to Nurama.

Toggle the calling user's acknowledgement of a task (mark as seen, or un-mark). WRITE OPERATION but personal — only affects the calling user's view, not visible to others. Use when the user says "mark this as read" or "I've seen this".

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to acknowledge. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to acknowledge."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
