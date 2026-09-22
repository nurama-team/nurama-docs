# list_ai_chat_topics

> Read-only.

List the caller's AI chat topics (Nu — Nurama's LLM assistant — conversations, separate from project chats). Each topic is scoped: `workspace` topics span every project in the workspace; `project` topics are bound to one project; `social` topics are personal (no resource backing). Topics are private to their creator. Messages inside a topic flow through the regular `list_chat_messages` against `topic.chatId`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `workspaceId` | string | yes | UUID of the workspace. Required for every scope. |
| `scopeType` | `"workspace"` \\| `"project"` \\| `"social"` | yes | Topic scope. |
| `scopeId` | string | no | UUID of the workspace or project the topic is scoped to. Required when `scopeType` is `workspace` or `project`; omit for `social`. |
| `archived` | boolean | no | Include archived topics. Defaults to active-only. |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "workspaceId": {
      "type": "string",
      "description": "UUID of the workspace. Required for every scope."
    },
    "scopeType": {
      "type": "string",
      "enum": [
        "workspace",
        "project",
        "social"
      ],
      "description": "Topic scope."
    },
    "scopeId": {
      "type": "string",
      "description": "UUID of the workspace or project the topic is scoped to. Required when `scopeType` is `workspace` or `project`; omit for `social`."
    },
    "archived": {
      "type": "boolean",
      "description": "Include archived topics. Defaults to active-only."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "workspaceId",
    "scopeType"
  ],
  "additionalProperties": false
}
```
