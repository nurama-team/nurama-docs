# get_convo

> Read-only.

Fetch a single live conversation (video / audio huddle) by id. Returns subject, status, host chat reference, participants, recordings / transcripts (asset refs only, no signed URLs), timing. Use this to inspect a finished convo before linking its recording into a chat, or to confirm a convo is still active before joining.

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
