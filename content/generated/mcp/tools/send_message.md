# send_message

> **Mutating** — this tool writes to Nurama.

Post a new chat message as the bot user. WRITE OPERATION — this is visible to every other participant in the chat and appears under the bot's identity in the audit log. For `@mentions` of human users, pass their userIds in `mentions`. For asset references that should render as clickable chips, pass asset UUIDs in `assetMentions` AND embed the literal token `{{assetMention:UUID}}` in the message content where each chip should appear.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the destination chat. |
| `content` | string | yes | Message body. Plain text + markdown + `{{assetMention:UUID}}` / `{{mention:USER_UUID}}` tokens. |
| `mentions` | array of string | no | UUIDs of users referenced via `{{mention:UUID}}` tokens in content. Must match what is embedded in the text. |
| `assetMentions` | array of string | no | UUIDs of assets referenced via `{{assetMention:UUID}}` tokens. Required for the chip renderer to find the asset. |
| `folderMentions` | array of string | no | UUIDs of folders referenced via `{{folderMention:UUID}}` tokens in the content. Required for the chip renderer to find the folder. |
| `taskMentions` | array of string | no | UUIDs of board tasks referenced via `{{taskMention:UUID}}` tokens. Requires the Boards add-on on the workspace; without it the message is rejected. |
| `quotes` | array of string | no | UUIDs of prior messages to inline-quote at the top of this one. Renders as a quoted-preview block above the body. |
| `replyToId` | string | no | UUID of a message this is a threaded reply to. Omit to post as a top-level message. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the destination chat."
    },
    "content": {
      "type": "string",
      "minLength": 1,
      "description": "Message body. Plain text + markdown + `{{assetMention:UUID}}` / `{{mention:USER_UUID}}` tokens."
    },
    "mentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUIDs of users referenced via `{{mention:UUID}}` tokens in content. Must match what is embedded in the text."
    },
    "assetMentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUIDs of assets referenced via `{{assetMention:UUID}}` tokens. Required for the chip renderer to find the asset."
    },
    "folderMentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUIDs of folders referenced via `{{folderMention:UUID}}` tokens in the content. Required for the chip renderer to find the folder."
    },
    "taskMentions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUIDs of board tasks referenced via `{{taskMention:UUID}}` tokens. Requires the Boards add-on on the workspace; without it the message is rejected."
    },
    "quotes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUIDs of prior messages to inline-quote at the top of this one. Renders as a quoted-preview block above the body."
    },
    "replyToId": {
      "type": "string",
      "description": "UUID of a message this is a threaded reply to. Omit to post as a top-level message."
    }
  },
  "required": [
    "chatId",
    "content"
  ],
  "additionalProperties": false
}
```
