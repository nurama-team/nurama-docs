# add_column

> **Mutating** — this tool writes to Nurama.

Append a new column to a board. `taskStatus` maps the column to a canonical lifecycle bucket — pass null to leave it unmapped. `reviewersCanContribute` only matters on reviewer-tier boards; safe to omit on creator-only boards.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `name` | string | yes | Column name. |
| `description` | string | no | Optional description. |
| `color` | string | no | Optional hex color. |
| `isDefault` | boolean | no | When true, new tasks land here by default. |
| `taskStatus` | `"pending"` \\| `"inProgress"` \\| `"complete"` \\| `"closed"` \\| `null` | no | Canonical lifecycle bucket this column represents. |
| `sortOrder` | number | no | Position among columns. |
| `reviewersCanContribute` | boolean | no | Reviewer-role users may add tasks here on reviewer-visibility boards. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Column name."
    },
    "description": {
      "type": "string",
      "description": "Optional description."
    },
    "color": {
      "type": "string",
      "description": "Optional hex color."
    },
    "isDefault": {
      "type": "boolean",
      "description": "When true, new tasks land here by default."
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
      ],
      "description": "Canonical lifecycle bucket this column represents."
    },
    "sortOrder": {
      "type": "number",
      "description": "Position among columns."
    },
    "reviewersCanContribute": {
      "type": "boolean",
      "description": "Reviewer-role users may add tasks here on reviewer-visibility boards."
    }
  },
  "required": [
    "boardId",
    "name"
  ],
  "additionalProperties": false
}
```
