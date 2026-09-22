# get_board

> Read-only.

Fetch a single board with its columns and tasks grouped per column. Use this to discover the `columnId` values you need for `move_task` or `create_task`, or to render a full board state. For just the task list without column structure, use `get_board_tasks`. For the project's board list, use `list_project_boards`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the board. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the board."
    }
  },
  "required": [
    "boardId"
  ],
  "additionalProperties": false
}
```
