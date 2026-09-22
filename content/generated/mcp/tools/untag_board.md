# untag_board

> **Mutating** — this tool writes to Nurama.

Remove a tag from a board. No-op if the tag is not currently applied.

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
