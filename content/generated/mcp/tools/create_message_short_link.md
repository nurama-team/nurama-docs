# create_message_short_link

> **Mutating** — this tool writes to Nurama.

Mint a deep-linkable short URL for a chat message. Returns `{ code, shortUrl }`. Use whenever you need to surface a specific message in another context (a task, an email, another chat) — the link jumps the recipient directly to the message in its chat.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message to link. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message to link."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
