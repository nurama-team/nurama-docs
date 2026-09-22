# unfollow_task

> **Mutating** — this tool writes to Nurama.

Have the calling user stop following a task — no further notifications about its activity. WRITE OPERATION but personal — only affects the calling user's notification subscriptions.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to unfollow. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to unfollow."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
