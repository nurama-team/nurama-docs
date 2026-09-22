# get_new_notification_count

> Read-only.

Return the count of new (unread) notifications across the given channels — the cheapest probe to decide whether it's worth paging through `list_new_notifications`. Optional type filter narrows the count.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | array of string | yes | Channel strings to count from. Examples: `user/<userId>`, `workspace/<workspaceId>`, `project/<projectId>/<visibility>`. |
| `types` | array of string | no | Optional notification type filter. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "channels": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Channel strings to count from. Examples: `user/<userId>`, `workspace/<workspaceId>`, `project/<projectId>/<visibility>`."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional notification type filter."
    }
  },
  "required": [
    "channels"
  ],
  "additionalProperties": false
}
```
