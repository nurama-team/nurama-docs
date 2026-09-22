# create_board

> **Mutating** — this tool writes to Nurama.

Create a kanban board in a project. Visibility defaults to creator-only; pass `["creator","reviewer"]` to make it cross-tier. Optionally seed columns inline — otherwise the server creates a default column set you can edit with `add_column` / `update_column`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the owning project. |
| `name` | string | yes | Board name. |
| `description` | string | no | Optional description. |
| `visibility` | array of `"creator"` \\| `"reviewer"` | no | Visibility tiers the board appears in. Defaults to `["creator"]` server-side when omitted. |
| `columns` | array of object | no | Optional inline column seed. Omit to let the server create a default set. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the owning project."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Board name."
    },
    "description": {
      "type": "string",
      "description": "Optional description."
    },
    "visibility": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "creator",
          "reviewer"
        ]
      },
      "description": "Visibility tiers the board appears in. Defaults to `[\"creator\"]` server-side when omitted."
    },
    "columns": {
      "type": "array",
      "description": "Optional inline column seed. Omit to let the server create a default set.",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "color": {
            "type": "string"
          },
          "isDefault": {
            "type": "boolean"
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
            "type": "boolean",
            "description": "When true, reviewer-role users may create tasks in this column on a reviewer-visibility board."
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      }
    }
  },
  "required": [
    "projectId",
    "name"
  ],
  "additionalProperties": false
}
```
