# repair_assets

> **Mutating** — this tool writes to Nurama.

Re-trigger post-processing (thumbnails, transcoding, metadata extraction) for one or more assets. Use when an asset is stuck in a pending state, has a missing thumbnail, or its post-processing previously failed. Does not re-upload — the original file is reused.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetIds` | array of string | yes | One or more asset UUIDs to repair. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "assetIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "One or more asset UUIDs to repair."
    }
  },
  "required": [
    "assetIds"
  ],
  "additionalProperties": false
}
```
