# list_new_notifications

> Read-only.

List notifications NEW since the caller's last-seen timestamp on the given channels. Lighter than `list_notifications` for "what changed since I last looked?" sweeps. Pass `updateLastSeen: true` to advance the cursor so the next call only returns newer ones; pass false (or omit) to peek without consuming.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | array of string | yes | Channel strings to read from. Examples: `user/<userId>`, `workspace/<workspaceId>`, `project/<projectId>/<visibility>`. |
| `types` | array of string | no | Optional notification type filter. |
| `updateLastSeen` | boolean | no | When true, advance the last-seen cursor so future calls only return newer items. |
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
      "description": "Channel strings to read from. Examples: `user/<userId>`, `workspace/<workspaceId>`, `project/<projectId>/<visibility>`."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional notification type filter."
    },
    "updateLastSeen": {
      "type": "boolean",
      "description": "When true, advance the last-seen cursor so future calls only return newer items."
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
