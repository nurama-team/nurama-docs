# create_task_relation

> **Mutating** — this tool writes to Nurama.

Attach a task to a chat or a chat message — establishes the "this task came from / belongs to this conversation" link that the Nurama web app renders as a task card in the conversation. Prefer the `create_task` + `announce` flow when creating a brand-new task tied to a message in one shot; reach for this when you need to add another relation to an EXISTING task.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task. |
| `resourceId` | string | yes | UUID of the chat or chat-message to link to. |
| `resourceType` | `"chat"` \\| `"chatMessage"` | yes | What kind of resource `resourceId` is. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task."
    },
    "resourceId": {
      "type": "string",
      "description": "UUID of the chat or chat-message to link to."
    },
    "resourceType": {
      "type": "string",
      "enum": [
        "chat",
        "chatMessage"
      ],
      "description": "What kind of resource `resourceId` is."
    }
  },
  "required": [
    "taskId",
    "resourceId",
    "resourceType"
  ],
  "additionalProperties": false
}
```
