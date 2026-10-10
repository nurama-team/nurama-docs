# create_task

> **Mutating** — this tool writes to Nurama.

Create a new task on a board. WRITE OPERATION — the task appears under the bot user as creator and is visible to every member who can see the board. If no `columnId` is provided the task lands in the board's default column. Use `list_project_boards` first if you do not know which `boardId` to target. Optional `announce` posts a Nu-style reply in a chat threaded under a referenced message, with the new task rendered as a taskCard and linked via TaskRelation. Use it when the task originated from a specific message and you want the conversation to surface the new task inline.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `boardId` | string | yes | UUID of the destination board. |
| `subject` | string | yes | Short task title shown on the card (≤ 280 chars). |
| `description` | string | no | Optional longer body. Plain text or markdown. |
| `columnId` | string | no | Optional UUID of the column to drop the task into. Defaults to the board's default column. |
| `assignedToId` | string | no | Optional UUID of the user to assign. Must be a member of the project. |
| `announce` | object | no | Optionally announce the new task back into a chat. When supplied, the BE posts a Nu reply in `chatId` threaded under `messageId`, with the new task as a single taskCard, and creates a TaskRelation linking them. Only set this when both fields are known — the bot must be able to see the chat, and the message must exist in it. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "boardId": {
      "type": "string",
      "description": "UUID of the destination board."
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "maxLength": 280,
      "description": "Short task title shown on the card (≤ 280 chars)."
    },
    "description": {
      "type": "string",
      "description": "Optional longer body. Plain text or markdown."
    },
    "columnId": {
      "type": "string",
      "description": "Optional UUID of the column to drop the task into. Defaults to the board's default column."
    },
    "assignedToId": {
      "type": "string",
      "description": "Optional UUID of the user to assign. Must be a member of the project."
    },
    "announce": {
      "type": "object",
      "description": "Optionally announce the new task back into a chat. When supplied, the BE posts a Nu reply in `chatId` threaded under `messageId`, with the new task as a single taskCard, and creates a TaskRelation linking them. Only set this when both fields are known — the bot must be able to see the chat, and the message must exist in it.",
      "properties": {
        "chatId": {
          "type": "string",
          "description": "UUID of the chat where the announcement reply should be posted."
        },
        "messageId": {
          "type": "string",
          "description": "UUID of the message the announcement should thread under (typically the message that motivated the task)."
        }
      },
      "required": [
        "chatId",
        "messageId"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "boardId",
    "subject"
  ],
  "additionalProperties": false
}
```
