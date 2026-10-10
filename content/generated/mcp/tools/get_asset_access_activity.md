# get_asset_access_activity

> Read-only.

Read play / download access metrics for a single asset (totals + time-series). Use this for "who has watched / downloaded this?" or "how active is this asset?" Same data the FE Access tab renders.

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
