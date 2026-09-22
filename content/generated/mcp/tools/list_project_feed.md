# list_project_feed

> Read-only.

List recent assets in a project, scoped to one visibility tier (`creator` or `reviewer`). Use this to answer "what is happening in project X?" or to find an asset id to reference in a follow-up tool. Pick the tier matching the user's intent — `creator` for unpublished work-in-progress, `reviewer` for published assets visible to reviewer-tier accounts. Each result includes recent-message metadata when present.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. Get it from list_my_memberships if unknown. |
| `visibility` | `"creator"` \\| `"reviewer"` | yes | Which visibility tier of the feed to read. |
| `limit` | number | no | Number of assets to return (1-20, default 10). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project. Get it from list_my_memberships if unknown."
    },
    "visibility": {
      "type": "string",
      "enum": [
        "creator",
        "reviewer"
      ],
      "description": "Which visibility tier of the feed to read."
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 20,
      "description": "Number of assets to return (1-20, default 10)."
    }
  },
  "required": [
    "projectId",
    "visibility"
  ],
  "additionalProperties": false
}
```
