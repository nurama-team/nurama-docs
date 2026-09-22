# list_scope_convos

> Read-only.

List live conversations attached to a scope (a project today) at the given visibility tier(s). Filter by status / participant search. Use to answer "what huddles are running in this project right now?" or to find a recent completed convo before sharing its recording.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `scopeId` | string | yes | UUID of the scope resource — typically a projectId. |
| `visibility` | array of `"creator"` \\| `"reviewer"` | yes | Visibility tier(s) to include. Must be non-empty. |
| `status` | `"active"` \\| `"completed"` \\| `"cancelled"` | no | Filter by lifecycle status. |
| `search` | string | no | Filter by participant name. |
| `limit` | number | no | Page size (1-50, default 20). |
| `cursor` | string | no | Opaque cursor from a prior page. |
| `includeCounts` | boolean | no | When true, include total counts in the response. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "scopeId": {
      "type": "string",
      "description": "UUID of the scope resource — typically a projectId."
    },
    "visibility": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "creator",
          "reviewer"
        ]
      },
      "minItems": 1,
      "description": "Visibility tier(s) to include. Must be non-empty."
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "completed",
        "cancelled"
      ],
      "description": "Filter by lifecycle status."
    },
    "search": {
      "type": "string",
      "description": "Filter by participant name."
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
    },
    "includeCounts": {
      "type": "boolean",
      "description": "When true, include total counts in the response."
    }
  },
  "required": [
    "scopeId",
    "visibility"
  ],
  "additionalProperties": false
}
```
