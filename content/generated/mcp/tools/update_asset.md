# update_asset

> **Mutating** — this tool writes to Nurama.

Update an asset's name, folder placement, or metadata. Pass only the fields you want to change. Pass `folderId: null` to move the asset to the project root.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetId` | string | yes | UUID of the asset. |
| `name` | string | no | New display name. |
| `folderId` | string \\| null | no | New folder UUID, or `null` to move to the project root. |
| `meta` | object | no | Arbitrary metadata object — merged into existing meta. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "assetId": {
      "type": "string",
      "description": "UUID of the asset."
    },
    "name": {
      "type": "string",
      "description": "New display name."
    },
    "folderId": {
      "type": [
        "string",
        "null"
      ],
      "description": "New folder UUID, or `null` to move to the project root."
    },
    "meta": {
      "type": "object",
      "description": "Arbitrary metadata object — merged into existing meta."
    }
  },
  "required": [
    "assetId"
  ],
  "additionalProperties": false
}
```
