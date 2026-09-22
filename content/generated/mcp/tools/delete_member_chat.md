# delete_member_chat

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a member chat (DM or group). Every participant loses access; message history goes with it. Prefer `archive_member_chat` for "hide from the active list but keep the history" — that's reversible.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the member chat. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the member chat."
    }
  },
  "required": [
    "chatId"
  ],
  "additionalProperties": false
}
```
