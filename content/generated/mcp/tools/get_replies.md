# get_replies

> Read-only.

Load the threaded replies under one message. `list_chat_messages` excludes replies by default; use this to drill into a specific thread.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | string | yes | UUID of the parent message. |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "UUID of the parent message."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "required": [
    "messageId"
  ],
  "additionalProperties": false
}
```
