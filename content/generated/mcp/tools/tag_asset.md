# tag_asset

> **Mutating** — this tool writes to Nurama.

Apply a tag to an asset. The tag must already exist on the asset's owning resource (typically the project) — see `list_tags` / `create_tag` to look up or mint one.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `assetId` | string | yes | UUID of the asset. |
| `tagId` | string | yes | UUID of the tag to apply. |

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
      "description": "UUID of the tag to apply."
    }
  },
  "required": [
    "assetId",
    "tagId"
  ],
  "additionalProperties": false
}
```
