# complete_convo

> **Mutating** — this tool writes to Nurama.

End a live conversation for everyone — closes the Daily.co room, stamps `endedAt`, transitions status to `completed`, and triggers recording / transcript post-processing if those features were enabled. Use when wrapping up a huddle. Not destructive (history + recordings stay); for that, use `delete_convo` (Phase F).

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `convoId` | string | yes | UUID of the convo. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "convoId": {
      "type": "string",
      "description": "UUID of the convo."
    }
  },
  "required": [
    "convoId"
  ],
  "additionalProperties": false
}
```
