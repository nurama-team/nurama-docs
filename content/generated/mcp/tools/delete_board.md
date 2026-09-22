# delete_board

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a board. `disposition` controls what happens to the board's tasks:
- `unassign` (BE default): tasks survive, lose their board / column placement.
- `reassign`: tasks move to `targetBoardId` (required) and optionally `targetColumnId`.
- `delete`: tasks AND their chats / messages / attachments are cascade-deleted (after a grace window).
When `disposition` is omitted the BE applies its current default — pass it explicitly when you care.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |
| `disposition` | `"unassign"` \\| `"reassign"` \\| `"delete"` | no | What happens to the tasks. See description above. |
| `targetBoardId` | string | no | Destination board for reassigned tasks. Required when `disposition === "reassign"`. |
| `targetColumnId` | string | no | Destination column on `targetBoardId` for reassigned tasks. Optional; falls back to the board's default column. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    },
    "disposition": {
      "type": "string",
      "enum": [
        "unassign",
        "reassign",
        "delete"
      ],
      "description": "What happens to the tasks. See description above."
    },
    "targetBoardId": {
      "type": "string",
      "description": "Destination board for reassigned tasks. Required when `disposition === \"reassign\"`."
    },
    "targetColumnId": {
      "type": "string",
      "description": "Destination column on `targetBoardId` for reassigned tasks. Optional; falls back to the board's default column."
    }
  },
  "required": [
    "boardId"
  ],
  "additionalProperties": false
}
```
