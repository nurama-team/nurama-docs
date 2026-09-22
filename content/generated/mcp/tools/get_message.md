# get_message

> Read-only.

Fetch a single chat message by id, including attachments, mentions, and reply metadata. Use this when a chat / search surfaced a messageId you need full detail on (typical case: looking up the message the user is replying to before crafting a response).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the chat message. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the chat message."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
