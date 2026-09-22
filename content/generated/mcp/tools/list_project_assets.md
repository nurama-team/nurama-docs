# list_project_assets

> Read-only.

Flat list of assets in a project, scoped to one visibility tier. Lighter than `list_project_feed` — no chat metadata, just assets. Use this for inventory queries ("how many assets?") or when you need a raw asset list to scan.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `visibility` | `"creator"` \\| `"reviewer"` | yes | Which visibility tier to read. |
| `limit` | number | no | Page size (1-50, default 20). |
| `search` | string | no | Case-insensitive substring match on asset name. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "visibility": {
      "type": "string",
      "enum": [
        "creator",
        "reviewer"
      ],
      "description": "Which visibility tier to read."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Page size (1-50, default 20)."
    },
    "search": {
      "type": "string",
      "description": "Case-insensitive substring match on asset name."
    }
  },
  "required": [
    "projectId",
    "visibility"
  ],
  "additionalProperties": false
}
```
