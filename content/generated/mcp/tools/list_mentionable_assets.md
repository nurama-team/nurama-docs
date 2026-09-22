# list_mentionable_assets

> Read-only.

List assets that can be referenced via `{{assetMention:UUID}}` tokens in a message in this chat. Use this BEFORE `send_message` when composing a message that should embed asset chips — it filters by what the chat's scope can see, so the resulting message won't reference an asset the readers cannot access.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat the message will be posted in. |
| `search` | string | no | Case-insensitive substring match on asset name. |
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
      "description": "Case-insensitive substring match on asset name."
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
