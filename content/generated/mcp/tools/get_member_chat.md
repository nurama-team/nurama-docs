# get_member_chat

> Read-only.

Fetch a single member chat (DM / group chat) by id. Returns subject, color, scope, members, archived state. Use to verify a member chat exists and the caller participates in it before posting via `send_message`.

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
