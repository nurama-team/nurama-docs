# unfollow_chat

> **Mutating** — this tool writes to Nurama.

Stop following a chat. No-op if not currently followed.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
