# update_project

> **Mutating** — this tool writes to Nurama.

Rename or redescribe a project. Pass `updateSlug: true` if you want the URL slug to be regenerated from the new name (otherwise it stays the same).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `name` | string | no | New project name. |
| `description` | string | no | New project description. |
| `updateSlug` | boolean | no | If true, regenerate the URL slug from the new name. Changes external links. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "New project name."
    },
    "description": {
      "type": "string",
      "description": "New project description."
    },
    "updateSlug": {
      "type": "boolean",
      "description": "If true, regenerate the URL slug from the new name. Changes external links."
    }
  },
  "required": [
    "projectId"
  ],
  "additionalProperties": false
}
```
