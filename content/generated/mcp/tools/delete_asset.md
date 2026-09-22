# delete_asset

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete an asset and its stored files (the original upload and every derivative such as thumbnails and transcodes). The asset is removed from feeds, folders, submissions, and chat attachments.

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
