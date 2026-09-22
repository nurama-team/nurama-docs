# unarchive_member_chat

> **Mutating** — this tool writes to Nurama.

Restore an archived member chat to the active list.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the member chat. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the member chat."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
