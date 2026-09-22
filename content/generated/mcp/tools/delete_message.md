# delete_message

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Permanently delete a chat message. The BE marks the message as deleted (preserving feed continuity via a placeholder) and emits a `chatDeleteMessage` event. Replies, reactions, and attachments tied to it are unreachable afterwards.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message to delete. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message to delete."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
