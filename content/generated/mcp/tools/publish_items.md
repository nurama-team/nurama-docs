# publish_items

> **Mutating** — this tool writes to Nurama.

Publish (creator → reviewer tier) one or more resources by id. Optionally trigger reviewer notification emails. Use to surface a batch of finished assets / folders to the reviewer tier in one go.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `resourceIds` | array of string | yes | Asset / folder UUIDs to publish. |
| `basePath` | string | no | Optional reviewer-tier destination path. Defaults to mirroring the creator-tier path. |
| `sendEmailNotification` | boolean | no | If true, reviewers receive an email notification. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project."
    },
    "resourceIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Asset / folder UUIDs to publish."
    },
    "basePath": {
      "type": "string",
      "description": "Optional reviewer-tier destination path. Defaults to mirroring the creator-tier path."
    },
    "sendEmailNotification": {
      "type": "boolean",
      "description": "If true, reviewers receive an email notification."
    }
  },
  "required": [
    "projectId",
    "resourceIds"
  ],
  "additionalProperties": false
}
```
