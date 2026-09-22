# list_my_memberships

> Read-only.

List every workspace, project, and chat the bot user is a member of, with the roles granted on each. Call this first when the user asks "what can you see?" or you need to discover which projectId / workspaceId to use for a follow-up tool. Returns a flat array; the same bot user can be a member of many resources at different role tiers.

## Input

_This tool takes no arguments._

## Input schema

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```
