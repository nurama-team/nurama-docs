# list_my_mentions

> Read-only.

List chat messages that mention the calling user, across every chat the user can see. The most natural trigger feed for "what have I been asked?". Sorted newest-first by the API. Each result includes the chat + message context.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | number | no | Page size (1-50, default 20). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    }
  },
  "additionalProperties": false
}
```
