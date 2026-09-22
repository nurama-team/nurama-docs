# update_task_details

> **Mutating** — this tool writes to Nurama.

Update a task's subject, description, or assignee. WRITE OPERATION — every other project member sees the change immediately. Pass only the fields you want to change. To CLEAR a field (description or assignee), pass it as null explicitly — omitting it leaves the current value alone.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `taskId` | string | yes | UUID of the task to update. |
| `subject` | string | no | New task title (≤ 280 chars). Omit to leave unchanged. |
| `description` | string \\| null | no | New description, plain text or markdown. Pass null to clear. Omit to leave unchanged. |
| `assignedToId` | string \\| null | no | UUID of the new assignee. Pass null to unassign. Omit to leave unchanged. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "taskId": {
      "type": "string",
      "description": "UUID of the task to update."
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "maxLength": 280,
      "description": "New task title (≤ 280 chars). Omit to leave unchanged."
    },
    "description": {
      "type": [
        "string",
        "null"
      ],
      "description": "New description, plain text or markdown. Pass null to clear. Omit to leave unchanged."
    },
    "assignedToId": {
      "type": [
        "string",
        "null"
      ],
      "description": "UUID of the new assignee. Pass null to unassign. Omit to leave unchanged."
    }
  },
  "required": [
    "taskId"
  ],
  "additionalProperties": false
}
```
