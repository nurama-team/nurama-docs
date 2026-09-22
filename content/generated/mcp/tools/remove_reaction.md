# remove_reaction

> **Mutating** — this tool writes to Nurama.

Remove the caller's reaction from a message. No-op if the caller hasn't reacted.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
