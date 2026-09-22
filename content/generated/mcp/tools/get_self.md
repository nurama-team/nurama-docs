# get_self

> Read-only.

Get the bot's own public profile — id, displayName, avatar, color, accountType. Use this at startup or when the user asks "who am I?" / "what's my user id?". (Derived from the bot's memberships — the `user` namespace is not bot-reachable.)

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
