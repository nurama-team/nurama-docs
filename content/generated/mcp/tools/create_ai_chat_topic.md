# create_ai_chat_topic

> **Mutating** — this tool writes to Nurama.

Create a new (empty) AI chat topic — one of Nu's LLM-assistant conversations. After this resolves, post the first user message via `send_message` against the returned `topic.chatId`; Nurama recognises the chat as an AI chat and routes the message to the assistant. Pre-flight: workspace needs the AI add-on and `aiChatEnabled` resolved true; AI calls also charge credits from the workspace pool.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `workspaceId` | string | yes | UUID of the workspace. Required for every scope. |
| `scopeType` | `"workspace"` \\| `"project"` \\| `"social"` | yes | Topic scope. `workspace` = cross-project; `project` = bound to one project; `social` = personal. |
| `scopeId` | string | no | UUID of the workspace or project. Required when `scopeType` is `workspace` or `project`; omit for `social`. |
| `title` | string | no | Optional title. Auto-named from first user message when omitted. |

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
      "description": "Topic scope. `workspace` = cross-project; `project` = bound to one project; `social` = personal."
    },
    "scopeId": {
      "type": "string",
      "description": "UUID of the workspace or project. Required when `scopeType` is `workspace` or `project`; omit for `social`."
    },
    "title": {
      "type": "string",
      "description": "Optional title. Auto-named from first user message when omitted."
    }
  },
  "required": [
    "workspaceId",
    "scopeType"
  ],
  "additionalProperties": false
}
```
