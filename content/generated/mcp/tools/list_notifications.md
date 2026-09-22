# list_notifications

> Read-only.

List notifications on one or more channels (cursor paginated). `channels` is REQUIRED and uses the same string format as WebSocket subscriptions — `user/<userId>`, `workspace/<workspaceId>`, `project/<projectId>`, `project/<projectId>/<visibility>`, `chat/<chatId>`. Optionally filter by event `types`. Use for "what's new on these channels?" sweeps. Limit defaults to 20.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | array of string | yes | Channel strings to read from. Examples: `user/<userId>` for personal events, `workspace/<workspaceId>` for workspace-wide, `project/<projectId>/<visibility>` for visibility-scoped events. |
| `types` | array of string | no | Optional notification type filter (e.g. `chatMention`, `taskAssigned`). Omit for all types on the listed channels. |
| `limit` | number | no | Page size (1-50, default 20). |
| `cursor` | string | no | Opaque cursor from a prior page. |

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
      "description": "Channel strings to read from. Examples: `user/<userId>` for personal events, `workspace/<workspaceId>` for workspace-wide, `project/<projectId>/<visibility>` for visibility-scoped events."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional notification type filter (e.g. `chatMention`, `taskAssigned`). Omit for all types on the listed channels."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    },
    "cursor": {
      "type": "string",
      "description": "Opaque cursor from a prior page."
    }
  },
  "required": [
    "channels"
  ],
  "additionalProperties": false
}
```
