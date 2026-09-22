# revise_message

> **Mutating** — this tool writes to Nurama.

Edit a chat message. Pass only the fields that change; omit to leave them as-is. `content` accepts the same mention/quote token syntax as `send_message`. Use to fix typos, retract a mistaken claim, or rewrite a bot reply after a tool result lands.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message to revise. |
| `content` | string | no | New body. Same token syntax as `send_message` (`{{mention:UUID}}`, `{{assetMention:UUID}}`, etc.). |
| `mentions` | array of string | no | User UUIDs referenced via `{{mention:UUID}}`. |
| `assetMentions` | array of string | no | Asset UUIDs referenced via `{{assetMention:UUID}}`. |
| `folderMentions` | array of string | no | Folder UUIDs referenced via `{{folderMention:UUID}}`. |
| `taskMentions` | array of string | no | Task UUIDs referenced via `{{taskMention:UUID}}`. |
| `quotes` | array of string | no | Message UUIDs being quoted. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message to revise."
    },
    "content": {
      "type": "string",
      "description": "New body. Same token syntax as `send_message` (`{{mention:UUID}}`, `{{assetMention:UUID}}`, etc.)."
    },
    "mentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "User UUIDs referenced via `{{mention:UUID}}`."
    },
    "assetMentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Asset UUIDs referenced via `{{assetMention:UUID}}`."
    },
    "folderMentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Folder UUIDs referenced via `{{folderMention:UUID}}`."
    },
    "taskMentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Task UUIDs referenced via `{{taskMention:UUID}}`."
    },
    "quotes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Message UUIDs being quoted."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
