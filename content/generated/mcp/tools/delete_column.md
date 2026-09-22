# delete_column

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a column from a board. If the column has tasks, pass `targetColumnId` to move them to another column on the same board; otherwise the BE rejects the delete to avoid orphaning tasks.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `columnId` | string | yes | UUID of the column to delete. |
| `targetColumnId` | string | no | UUID of the column to migrate this column's tasks into. Required when the column has tasks. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    },
    "columnId": {
      "type": "string",
      "description": "UUID of the column to delete."
    },
    "targetColumnId": {
      "type": "string",
      "description": "UUID of the column to migrate this column's tasks into. Required when the column has tasks."
    }
  },
  "required": [
    "boardId",
    "columnId"
  ],
  "additionalProperties": false
}
```
