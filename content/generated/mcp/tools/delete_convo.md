# delete_convo

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a live conversation (active or completed). Removes the convo record, its recordings, and transcripts. Prefer `complete_convo` to end a call gracefully — that preserves the recording asset for later review.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `convoId` | string | yes | UUID of the convo. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "convoId": {
      "type": "string",
      "description": "UUID of the convo."
    }
  },
  "required": [
    "convoId"
  ],
  "additionalProperties": false
}
```
