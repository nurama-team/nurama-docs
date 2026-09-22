# update_column

> **Mutating** — this tool writes to Nurama.

Rename, recolor, retag, or reposition a single board column. Pass only the fields that change. Pass `description: null` / `color: null` to clear them. `taskStatus: null` unmaps the column from a lifecycle bucket.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `columnId` | string | yes | UUID of the column. |
| `name` | string | no | New name. |
| `description` | string \\| null | no | New description, or `null` to clear. |
| `color` | string \\| null | no | New hex color, or `null` to clear. |
| `isDefault` | boolean | no | Set true to make this the default landing column. |
| `taskStatus` | `"pending"` \\| `"inProgress"` \\| `"complete"` \\| `"closed"` \\| `null` | no |  |
| `sortOrder` | number | no |  |
| `reviewersCanContribute` | boolean | no |  |

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
      "description": "UUID of the column."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "New name."
    },
    "description": {
      "type": [
        "string",
        "null"
      ],
      "description": "New description, or `null` to clear."
    },
    "color": {
      "type": [
        "string",
        "null"
      ],
      "description": "New hex color, or `null` to clear."
    },
    "isDefault": {
      "type": "boolean",
      "description": "Set true to make this the default landing column."
    },
    "taskStatus": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "pending",
        "inProgress",
        "complete",
        "closed",
        null
      ]
    },
    "sortOrder": {
      "type": "number"
    },
    "reviewersCanContribute": {
      "type": "boolean"
    }
  },
  "required": [
    "boardId",
    "columnId"
  ],
  "additionalProperties": false
}
```
