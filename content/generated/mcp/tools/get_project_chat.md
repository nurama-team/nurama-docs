# get_project_chat

> Read-only.

Resolve the project-level chat for one visibility tier (creator or reviewer). Returns the chat with its `chatId` — needed before `list_chat_messages` or `send_message` against the project chat. Per-project there is one creator chat and one reviewer chat; this single tool covers both.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` | yes | Which tier of the project chat to fetch. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "visibility": {
      "type": "string",
      "enum": [
        "creator",
        "reviewer"
      ],
      "description": "Which tier of the project chat to fetch."
    }
  },
  "required": [
    "projectId",
    "visibility"
  ],
  "additionalProperties": false
}
```
