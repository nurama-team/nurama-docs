# highlight_message

> **Mutating** — this tool writes to Nurama.

Pin / highlight a message in its chat — surfaces it in the highlights list and visually flags it in the timeline. Use to mark a decision, an answer, or a key piece of context worth preserving.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message to highlight. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message to highlight."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
