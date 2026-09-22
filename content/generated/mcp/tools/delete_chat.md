# delete_chat

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a topic chat (a project chat or asset chat). All messages, attachments, summaries, and follower state go with it. For member chats / DMs use `delete_member_chat` instead. Auto-created topic chats sometimes re-spawn — deleting them is rarely the right move; consider `update_chat_subject` first.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the topic chat. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the topic chat."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
