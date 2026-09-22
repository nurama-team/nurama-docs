# follow_chat

> **Mutating** — this tool writes to Nurama.

Start following a chat — opts the caller in to real-time notifications for every new message in it. Use when the bot needs to react to ongoing activity in a chat it doesn't already participate in.

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
