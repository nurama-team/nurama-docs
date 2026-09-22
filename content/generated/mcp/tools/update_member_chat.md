# update_member_chat

> **Mutating** — this tool writes to Nurama.

Update a member chat's subject or color. Pass only the fields that change. For topic chats (auto-created project / asset chats) use `update_chat_subject` instead.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the member chat. |
| `subject` | string | no | New title. |
| `color` | string | no | New hex color (e.g. `#FF6B35`). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the member chat."
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "description": "New title."
    },
    "color": {
      "type": "string",
      "description": "New hex color (e.g. `#FF6B35`)."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
