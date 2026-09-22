# update_board

> **Mutating** — this tool writes to Nurama.

Rename, redescribe, retier, archive, or reorder a board. Pass only the fields that change. Pass `description: null` to clear it. When narrowing `visibility` would orphan tasks, set `cascade: true` to authorize the cleanup — without it the server returns 409 with `errorData.blockers`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `name` | string | no | New name. |
| `description` | string \\| null | no | New description, or `null` to clear it. |
| `visibility` | array of `"creator"` \\| `"reviewer"` | no | New visibility tier set. |
| `status` | `"active"` \\| `"archived"` | no | Lifecycle status. |
| `sortOrder` | number | no | New ordering position among project boards. |
| `cascade` | boolean | no | Authorize automatic cleanup of dependents when narrowing visibility. Default false; the server 409s if cleanup would be required. |

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
      "description": "New name."
    },
    "description": {
      "type": [
        "string",
        "null"
      ],
      "description": "New description, or `null` to clear it."
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
      "description": "New visibility tier set."
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "archived"
      ],
      "description": "Lifecycle status."
    },
    "sortOrder": {
      "type": "number",
      "description": "New ordering position among project boards."
    },
    "cascade": {
      "type": "boolean",
      "description": "Authorize automatic cleanup of dependents when narrowing visibility. Default false; the server 409s if cleanup would be required."
    }
  },
  "required": [
    "boardId"
  ],
  "additionalProperties": false
}
```
