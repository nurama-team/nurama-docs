# remove_chat_members

> **Mutating** — this tool writes to Nurama.

Remove users from a member chat. Removed users lose access immediately but message history is preserved for remaining members. To leave a chat yourself, pass the caller's own userId in `memberIds`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the member chat. |
| `memberIds` | array of string | yes | UUIDs of users to remove. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the member chat."
    },
    "memberIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "UUIDs of users to remove."
    }
  },
  "required": [
    "chatId",
    "memberIds"
  ],
  "additionalProperties": false
}
```
