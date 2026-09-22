# join_convo

> **Mutating** — this tool writes to Nurama.

Join an active live conversation. Returns the convo + a Daily.co meeting token the client uses to enter the room. Sends "user joined" notifications to other participants. Use `rejoin_convo` instead for page-refresh / reconnect flows so notifications are not re-fired.

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
