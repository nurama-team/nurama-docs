# get_asset_files

> Read-only.

Get the file records of one functionType for an asset (e.g. `thumbnail`, `original`, `media`, `transcode-*`). Use this to discover the storage path and signed URLs needed to link to or download an asset variant. Different functionTypes return different file shapes.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetId` | string | yes | UUID of the asset. |
| `functionType` | string | yes | File function type — typically `thumbnail`, `original`, or `media`. Asset-type-specific values exist too. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "assetId": {
      "type": "string",
      "description": "UUID of the asset."
    },
    "functionType": {
      "type": "string",
      "description": "File function type — typically `thumbnail`, `original`, or `media`. Asset-type-specific values exist too."
    }
  },
  "required": [
    "assetId",
    "functionType"
  ],
  "additionalProperties": false
}
```
