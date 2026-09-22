# archive_member_chat

> **Mutating** — this tool writes to Nurama.

Archive a member chat — hides it from the active list without losing history. Use when a DM / group chat has run its course. Recover with `unarchive_member_chat`.

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
