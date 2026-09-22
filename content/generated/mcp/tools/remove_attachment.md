# remove_attachment

> **Mutating** — this tool writes to Nurama.

Remove a single asset attachment from a chat message. The asset itself is NOT deleted — only its link to the message. Use to detach the wrong file after a misclick / wrong reference; for a full asset purge use `delete_asset`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message. |
| `assetId` | string | yes | UUID of the asset to detach from the message. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message."
    },
    "assetId": {
      "type": "string",
      "description": "UUID of the asset to detach from the message."
    }
  },
  "required": [
    "messageId",
    "assetId"
  ],
  "additionalProperties": false
}
```
