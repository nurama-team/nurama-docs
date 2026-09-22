# leave_convo

> **Mutating** — this tool writes to Nurama.

Leave a convo while it stays active for the other participants. The caller is removed from `activeParticipants` but remains in `allParticipants` for audit. Use to end the bot's presence without ending the call.

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
