# untag_folder

> **Mutating** — this tool writes to Nurama.

Remove a tag from a folder. No-op if the tag is not currently applied.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `folderId` | string | yes | UUID of the folder. |
| `tagId` | string | yes | UUID of the tag to remove. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "folderId": {
      "type": "string",
      "description": "UUID of the folder."
    },
    "tagId": {
      "type": "string",
      "description": "UUID of the tag to remove."
    }
  },
  "required": [
    "folderId",
    "tagId"
  ],
  "additionalProperties": false
}
```
