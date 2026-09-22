# get_chat

> Read-only.

Fetch the metadata for a single chat: chatType (`topic` / `member` / `submission`), topicType (`project` / `asset` / `task` / etc.), topicId, visibility, and participant ids. Use this when you have a chatId and need to know what the chat is about before reading messages or replying.

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
