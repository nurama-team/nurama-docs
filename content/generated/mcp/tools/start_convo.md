# start_convo

> **Mutating** — this tool writes to Nurama.

Start a new live conversation (video or audio huddle) anchored in a chat. The chat gets a system message announcing the convo and participants get notified. Use when the bot needs to spin up a real-time room — for ad-hoc reviews, design syncs, or anytime async chat is no longer enough.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chatId` | string | yes | UUID of the chat hosting the convo. |
| `chatType` | `"topic"` \\| `"member"` \\| `"submission"` | yes | Type of chat the convo is anchored in. |
| `convoType` | `"video"` \\| `"audio"` | yes | Convo modality. |
| `subject` | string | no | Optional title for the convo. |
| `notes` | string | no | Optional agenda / starting notes. |
| `sendEmailNotification` | boolean | no | If true, host-chat participants get an email notification in addition to the in-app one. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "string",
      "description": "UUID of the chat hosting the convo."
    },
    "chatType": {
      "type": "string",
      "enum": [
        "topic",
        "member",
        "submission"
      ],
      "description": "Type of chat the convo is anchored in."
    },
    "convoType": {
      "type": "string",
      "enum": [
        "video",
        "audio"
      ],
      "description": "Convo modality."
    },
    "subject": {
      "type": "string",
      "description": "Optional title for the convo."
    },
    "notes": {
      "type": "string",
      "description": "Optional agenda / starting notes."
    },
    "sendEmailNotification": {
      "type": "boolean",
      "description": "If true, host-chat participants get an email notification in addition to the in-app one."
    }
  },
  "required": [
    "chatId",
    "chatType",
    "convoType"
  ],
  "additionalProperties": false
}
```
