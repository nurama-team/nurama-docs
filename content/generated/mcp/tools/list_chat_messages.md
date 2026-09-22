# list_chat_messages

> Read-only.

List recent messages in a chat, newest first. Use this to read context before composing a reply, to summarise a discussion, or to find the messageId for a follow-up tool. Default cap is 20 messages; raise only when summarising long threads.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat to read. |
| `limit` | number | no | Number of messages (1-50, default 20). |
| `excludeReplies` | boolean | no | When true, skip threaded replies and return only top-level messages. Default true. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat to read."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Number of messages (1-50, default 20)."
    },
    "excludeReplies": {
      "type": "boolean",
      "description": "When true, skip threaded replies and return only top-level messages. Default true."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
