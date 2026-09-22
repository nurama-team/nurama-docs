# tag_folder

> **Mutating** — this tool writes to Nurama.

Apply a tag to a folder. The tag must already exist on the folder's owning resource (typically the project).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `folderId` | string | yes | UUID of the folder. |
| `tagId` | string | yes | UUID of the tag to apply. |

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
      "description": "UUID of the tag to apply."
    }
  },
  "required": [
    "folderId",
    "tagId"
  ],
  "additionalProperties": false
}
```
