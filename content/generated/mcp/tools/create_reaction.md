# create_reaction

> **Mutating** — this tool writes to Nurama.

Add an emoji reaction to a message. One reaction per user per message — calling again replaces the previous reaction. Use to acknowledge ("👍"), flag for follow-up ("🔁"), or signal status quickly without writing a reply.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message to react to. |
| `emoji` | string | yes | Single emoji character or short emoji shortcode. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message to react to."
    },
    "emoji": {
      "type": "string",
      "description": "Single emoji character or short emoji shortcode."
    }
  },
  "required": [
    "messageId",
    "emoji"
  ],
  "additionalProperties": false
}
```
