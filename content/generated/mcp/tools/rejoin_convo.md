# rejoin_convo

> **Mutating** — this tool writes to Nurama.

Re-enter a convo as an already-active participant. Returns a fresh Daily.co meeting token without firing "user joined" notifications. Use after a page refresh, network drop, or device switch — never as a substitute for `join_convo` when entering for the first time.

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
