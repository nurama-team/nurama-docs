# list_my_member_chats

> Read-only.

List the caller's member chats — 1:1 DMs and group chats. Cursor paginated. Filter by scope, subject, member name, or archived state. Use to answer "what private chats am I in?" or to find a specific DM before posting in it.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `scopeId` | string | no | Limit to member chats scoped to this resource (workspace / project / social). |
| `subjectSearch` | string | no | Substring match on chat subject. |
| `memberSearch` | string | no | Substring match on participant names. |
| `archived` | boolean | no | When true, include archived chats. Defaults to active-only when omitted. |
| `recentMessages` | number | no | Include up to N recent messages per chat (0-50, default 0). |
| `limit` | number | no | Page size (1-50, default 20). |
| `cursor` | string | no | Opaque cursor from a prior page. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "scopeId": {
      "type": "string",
      "description": "Limit to member chats scoped to this resource (workspace / project / social)."
    },
    "subjectSearch": {
      "type": "string",
      "description": "Substring match on chat subject."
    },
    "memberSearch": {
      "type": "string",
      "description": "Substring match on participant names."
    },
    "archived": {
      "type": "boolean",
      "description": "When true, include archived chats. Defaults to active-only when omitted."
    },
    "recentMessages": {
      "type": "number",
      "minimum": 0,
      "maximum": 50,
      "description": "Include up to N recent messages per chat (0-50, default 0)."
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
  "additionalProperties": false
}
```
