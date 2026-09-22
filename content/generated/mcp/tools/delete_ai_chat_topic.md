# delete_ai_chat_topic

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Soft-delete an AI chat topic. The topic, its underlying chat, and every attachment asset scoped to that chat are marked `pendingDelete` immediately and disappear from listings; the stored files and records are then removed asynchronously. There is no in-app undo — the caller may remove the topic from any local list immediately.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `topicId` | string | yes | UUID of the AI chat topic. |
| `workspaceId` | string | yes | UUID of the workspace the topic lives under. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "topicId": {
      "type": "string",
      "description": "UUID of the AI chat topic."
    },
    "workspaceId": {
      "type": "string",
      "description": "UUID of the workspace the topic lives under."
    }
  },
  "required": [
    "topicId",
    "workspaceId"
  ],
  "additionalProperties": false
}
```
