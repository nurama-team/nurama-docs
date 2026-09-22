# update_ai_chat_topic

> **Mutating** — this tool writes to Nurama.

Rename an AI chat topic or toggle its archived state. `workspaceId` is required — the request is rejected if the topic does not belong to that workspace. Pass only the fields that change.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `topicId` | string | yes | UUID of the AI chat topic. |
| `workspaceId` | string | yes | UUID of the workspace the topic lives under. |
| `title` | string | no | New title. |
| `archived` | boolean | no | Pass true to archive; false to unarchive. |

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
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "description": "New title."
    },
    "archived": {
      "type": "boolean",
      "description": "Pass true to archive; false to unarchive."
    }
  },
  "required": [
    "topicId",
    "workspaceId"
  ],
  "additionalProperties": false
}
```
