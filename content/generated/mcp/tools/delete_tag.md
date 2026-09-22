# delete_tag

> **Mutating** — this tool writes to Nurama.

DESTRUCTIVE — confirm with the user before calling. Restate the target (id + a human descriptor) and wait for explicit approval; do not invoke from inferred intent. No undo. Delete a tag from its owning resource (workspace or project). The tag is removed from every asset, folder, task, board, and submission it was applied to in one shot.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `tagId` | string | yes | UUID of the tag. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "string",
      "description": "UUID of the tag."
    }
  },
  "required": [
    "tagId"
  ],
  "additionalProperties": false
}
```
