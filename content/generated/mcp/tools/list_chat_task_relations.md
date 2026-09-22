# list_chat_task_relations

> Read-only.

List task relations anchored in a chat — every task that was created from a message in this chat, or otherwise linked to it. Use to answer "what tasks came out of this chat?" before reading the message history itself.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat. |
| `limit` | number | no | Page size (1-50, default 20). |
| `page` | number | no | Page number (index pagination). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    },
    "page": {
      "type": "number",
      "minimum": 1,
      "description": "Page number (index pagination)."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
