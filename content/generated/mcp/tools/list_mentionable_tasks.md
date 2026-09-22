# list_mentionable_tasks

> Read-only.

List tasks that can be referenced via `{{taskMention:UUID}}` tokens in a message in this chat. Use BEFORE `send_message` when composing a message that should embed task cards. Filtered by the chat's scope, so the resulting message won't reference tasks readers cannot access. Requires the Boards add-on on the workspace.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat the message will be posted in. |
| `search` | string | no | Case-insensitive substring match on task subject. |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat the message will be posted in."
    },
    "search": {
      "type": "string",
      "description": "Case-insensitive substring match on task subject."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
