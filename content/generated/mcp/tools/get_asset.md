# get_asset

> Read-only.

Fetch a single asset's metadata by id — name, mediaType, sizeInBytes, status, tags, chats, etc. For just the file URLs (thumbnail / original / media variant), use `get_asset_files`. For multiple assets, use `list_project_assets` or `list_project_feed`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetId` | string | yes | UUID of the asset. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "assetId": {
      "type": "string",
      "description": "UUID of the asset."
    }
  },
  "required": [
    "assetId"
  ],
  "additionalProperties": false
}
```
