# get_addable_chat_members

> Read-only.

List users who can be invited to a member chat — already filtered by chat scope (workspace / project / social) and excluding current members. Use BEFORE `add_chat_members` so you only pass valid invitee UUIDs and skip a server-side 403.

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
