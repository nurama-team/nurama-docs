# tag_board

> **Mutating** — this tool writes to Nurama.

Apply a tag to a board. The tag must already exist on the board's owning resource (typically the project).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `tagId` | string | yes | UUID of the tag. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    },
    "tagId": {
      "type": "string",
      "description": "UUID of the tag."
    }
  },
  "required": [
    "boardId",
    "tagId"
  ],
  "additionalProperties": false
}
```
