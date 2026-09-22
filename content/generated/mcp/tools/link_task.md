# link_task

> **Mutating** — this tool writes to Nurama.

Create a relationship between two tasks (related, blocks, blockedBy, duplicate). WRITE OPERATION. Both tasks must be visible to the bot. Use this when the user wants to track dependencies between tasks ("X is blocked by Y", "Z duplicates W").

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the source task — the one the relationship lives on. |
| `linkedTaskId` | string | yes | UUID of the target task being linked. |
| `linkType` | `"related"` \\| `"blocks"` \\| `"blockedBy"` \\| `"duplicate"` | no | Relationship type. Defaults to `related` if omitted. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the source task — the one the relationship lives on."
    },
    "linkedTaskId": {
      "type": "string",
      "description": "UUID of the target task being linked."
    },
    "linkType": {
      "type": "string",
      "enum": [
        "related",
        "blocks",
        "blockedBy",
        "duplicate"
      ],
      "description": "Relationship type. Defaults to `related` if omitted."
    }
  },
  "required": [
    "taskId",
    "linkedTaskId"
  ],
  "additionalProperties": false
}
```
