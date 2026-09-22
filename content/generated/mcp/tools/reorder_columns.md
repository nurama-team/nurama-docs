# reorder_columns

> **Mutating** — this tool writes to Nurama.

Bulk-assign new sort orders to columns on a board. Pass every column you want to position; columns omitted from the array keep their current order. Use after `add_column` when the new column should not land at the end, or when reorganizing a board's flow.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `columns` | array of object | yes | Columns and their new sort positions. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    },
    "columns": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "UUID of the column."
          },
          "sortOrder": {
            "type": "number",
            "description": "New position (lower = earlier)."
          }
        },
        "required": [
          "id",
          "sortOrder"
        ],
        "additionalProperties": false
      },
      "description": "Columns and their new sort positions."
    }
  },
  "required": [
    "boardId",
    "columns"
  ],
  "additionalProperties": false
}
```
