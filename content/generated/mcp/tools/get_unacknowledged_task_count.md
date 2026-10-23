# get_unacknowledged_task_count

> Read-only.

Return the count of @mentions of the calling identity that have not yet been acknowledged, as `{ total, creator, reviewer }`, in one project or, with no `projectId`, across every project. Use as a cheap "anything new for me?" probe before paging through `list_my_mentions`.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `projectId` | string | no | UUID of the project. Omit to count across every project. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "UUID of the project. Omit to count across every project."
    }
  },
  "additionalProperties": false
}
```
