# download_assets

> Read-only.

Mint signed download URLs for one or more assets — the same URLs the FE uses for the "Download" affordance. Use when the user asks for downloadable links to share. URLs expire after a few minutes; treat them as ephemeral.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetIds` | array of string | yes | Array of asset UUIDs to mint URLs for. |

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
      "description": "Array of asset UUIDs to mint URLs for."
    }
  },
  "required": [
    "assetIds"
  ],
  "additionalProperties": false
}
```
