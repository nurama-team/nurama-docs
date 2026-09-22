# create_member_chat

> **Mutating** — this tool writes to Nurama.

Start a private member chat — 1:1 DM (one memberId) or group chat (multiple memberIds). The chat is scoped to a resource (workspace / project / social), which controls who is allowed to participate. The caller is automatically a participant; do not include the caller's own userId in `memberIds`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `scopeType` | `"project"` \\| `"workspace"` \\| `"social"` | yes | What kind of resource scopes the chat. |
| `scopeId` | string | yes | UUID of the scope resource. |
| `memberIds` | array of string | yes | Invitee UUIDs (do not include the caller). For a 1:1 DM, pass exactly one. |
| `subject` | string | no | Optional title. Auto-generated from members when omitted. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "scopeType": {
      "type": "string",
      "enum": [
        "project",
        "workspace",
        "social"
      ],
      "description": "What kind of resource scopes the chat."
    },
    "scopeId": {
      "type": "string",
      "description": "UUID of the scope resource."
    },
    "memberIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Invitee UUIDs (do not include the caller). For a 1:1 DM, pass exactly one."
    },
    "subject": {
      "type": "string",
      "description": "Optional title. Auto-generated from members when omitted."
    }
  },
  "required": [
    "scopeType",
    "scopeId",
    "memberIds"
  ],
  "additionalProperties": false
}
```
