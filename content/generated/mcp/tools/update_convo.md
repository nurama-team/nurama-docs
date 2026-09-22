# update_convo

> **Mutating** — this tool writes to Nurama.

Rename a convo or update its notes. Pass only the fields that change. Safe to call on active or completed convos.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `convoId` | string | yes | UUID of the convo. |
| `subject` | string | no | New title. |
| `notes` | string | no | New notes / agenda / summary text. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "convoId": {
      "type": "string",
      "description": "UUID of the convo."
    },
    "subject": {
      "type": "string",
      "description": "New title."
    },
    "notes": {
      "type": "string",
      "description": "New notes / agenda / summary text."
    }
  },
  "required": [
    "convoId"
  ],
  "additionalProperties": false
}
```
