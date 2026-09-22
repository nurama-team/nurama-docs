# get_chat_by_topic_id

> Read-only.

Resolve a topic id (asset, project, task, public) + visibility into the chat that hangs off it. Returns the chat with its `chatId`. Use this when you have an asset / task / project id but not the chatId — the inverse of `get_chat`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `topicId` | string | yes | UUID of the topic resource (asset / project / task / public). |
| `topicType` | `"project"` \\| `"asset"` \\| `"public"` \\| `"task"` | yes | What kind of resource the topicId points at. |
| `visibility` | `"creator"` \\| `"reviewer"` \\| `"public"` | yes | Which visibility tier of the chat to fetch. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "topicId": {
      "type": "string",
      "description": "UUID of the topic resource (asset / project / task / public)."
    },
    "topicType": {
      "type": "string",
      "enum": [
        "project",
        "asset",
        "public",
        "task"
      ],
      "description": "What kind of resource the topicId points at."
    },
    "visibility": {
      "type": "string",
      "enum": [
        "creator",
        "reviewer",
        "public"
      ],
      "description": "Which visibility tier of the chat to fetch."
    }
  },
  "required": [
    "topicId",
    "topicType",
    "visibility"
  ],
  "additionalProperties": false
}
```
