# create_asset_short_link

> **Mutating** — this tool writes to Nurama.

Mint a deep-linkable short URL for an asset. Returns `{ shortLink, shortUrl }`. Optionally scope to a `creator` or `reviewer` view so the link lands the recipient on the right tier.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetId` | string | yes | UUID of the asset. |
| `visibility` | `"creator"` \\| `"reviewer"` | no | Optional visibility scope for the link. Omit to use the default for the asset. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "assetId": {
      "type": "string",
      "description": "UUID of the asset."
    },
    "visibility": {
      "type": "string",
      "enum": [
        "creator",
        "reviewer"
      ],
      "description": "Optional visibility scope for the link. Omit to use the default for the asset."
    }
  },
  "required": [
    "assetId"
  ],
  "additionalProperties": false
}
```
