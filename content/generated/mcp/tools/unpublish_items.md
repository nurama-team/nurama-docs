# unpublish_items

> **Mutating** — this tool writes to Nurama.

Unpublish (remove from reviewer tier) one or more resources. The creator-tier originals are untouched.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | yes | UUID of the project. |
| `resourceIds` | array of string | yes | Asset / folder UUIDs to unpublish. |

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
      "description": "Asset / folder UUIDs to unpublish."
    }
  },
  "required": [
    "projectId",
    "resourceIds"
  ],
  "additionalProperties": false
}
```
