# update_tag

> **Mutating** — this tool writes to Nurama.

Rename or recolor a tag. At least one of `name` or `color` must be provided. The change propagates to every resource the tag is applied to.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `tagId` | string | yes | UUID of the tag. |
| `name` | string | no | New tag name. |
| `color` | string | no | New hex color (e.g. `#FF6B35`). |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "string",
      "description": "UUID of the tag."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "New tag name."
    },
    "color": {
      "type": "string",
      "description": "New hex color (e.g. `#FF6B35`)."
    }
  },
  "required": [
    "tagId"
  ],
  "additionalProperties": false
}
```
