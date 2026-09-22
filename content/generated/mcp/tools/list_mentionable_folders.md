# list_mentionable_folders

> Read-only.

List folders the caller can `{{folderMention:UUID}}` in this chat — already scope-filtered to the chat's visibility tier. Use BEFORE `send_message` / `revise_message` when the message references a folder, so the mention renders as a clickable token instead of plain text.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat the mention will be posted in. |
| `limit` | number | no | Page size (1-50, default 20). |
| `search` | string | no | Optional substring match on folder name. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat the mention will be posted in."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    },
    "search": {
      "type": "string",
      "description": "Optional substring match on folder name."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
