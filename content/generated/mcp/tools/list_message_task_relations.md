# list_message_task_relations

> Read-only.

List task relations attached to one chat message — every task that was created from this message or otherwise linked to it. Use after `get_message` when you need to know whether the message already produced tasks before suggesting `create_task` again.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the message. |
| `limit` | number | no | Page size (1-50, default 20). |
| `page` | number | no | Page number (index pagination). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the message."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    },
    "page": {
      "type": "number",
      "minimum": 1,
      "description": "Page number (index pagination)."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
