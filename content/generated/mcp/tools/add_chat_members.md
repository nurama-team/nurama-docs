# add_chat_members

> **Mutating** — this tool writes to Nurama.

Invite users to a member chat — turns a 1:1 DM into a group chat, or grows an existing group. Look up valid invitees first with `get_addable_chat_members` to avoid passing users outside the chat's scope.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the member chat. |
| `memberIds` | array of string | yes | UUIDs of users to invite. |

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
      "description": "UUIDs of users to invite."
    }
  },
  "required": [
    "chatId",
    "memberIds"
  ],
  "additionalProperties": false
}
```
