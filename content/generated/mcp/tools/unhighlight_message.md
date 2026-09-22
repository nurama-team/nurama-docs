# unhighlight_message

> **Mutating** — this tool writes to Nurama.

Remove the highlight / pin from a message. No-op if not currently highlighted.

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
