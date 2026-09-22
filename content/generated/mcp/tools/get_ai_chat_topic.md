# get_ai_chat_topic

> Read-only.

Fetch a single AI chat topic by id. Returns the topic metadata (title, scope, archived state) plus its backing `chatId` — use that chatId with `list_chat_messages` to read the conversation, and with `send_message` to continue it.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `topicId` | string | yes | UUID of the AI chat topic. |
| `workspaceId` | string | yes | UUID of the workspace the topic lives under. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "topicId": {
      "type": "string",
      "description": "UUID of the AI chat topic."
    },
    "workspaceId": {
      "type": "string",
      "description": "UUID of the workspace the topic lives under."
    }
  },
  "required": [
    "topicId",
    "workspaceId"
  ],
  "additionalProperties": false
}
```
