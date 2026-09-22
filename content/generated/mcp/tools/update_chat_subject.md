# update_chat_subject

> **Mutating** — this tool writes to Nurama.

Rename a chat. Applies to topic chats and member chats alike. Use after a chat has evolved past its original topic, or when its auto-generated subject is too generic.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat. |
| `subject` | string | yes | The new subject / title. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat."
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "description": "The new subject / title."
    }
  },
  "required": [
    "chatId",
    "subject"
  ],
  "additionalProperties": false
}
```
