# untag_asset

> **Mutating** — this tool writes to Nurama.

Remove a tag from an asset. No-op if the tag is not currently applied.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetId` | string | yes | UUID of the asset. |
| `tagId` | string | yes | UUID of the tag to remove. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "assetId": {
      "type": "string",
      "description": "UUID of the asset."
    },
    "tagId": {
      "type": "string",
      "description": "UUID of the tag to remove."
    }
  },
  "required": [
    "assetId",
    "tagId"
  ],
  "additionalProperties": false
}
```
