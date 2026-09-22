# follow_task

> **Mutating** — this tool writes to Nurama.

Have the calling user follow a task — they will receive notifications about future activity on it. WRITE OPERATION but personal — only affects the calling user's notification subscriptions.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to follow. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to follow."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
