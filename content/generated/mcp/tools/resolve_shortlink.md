# resolve_shortlink

> Read-only.

Resolve a Nurama short-link code (the trailing segment of a https://nurma.link/... URL) to its target resource (asset / project / task / chat / message) with ids and visibility tier. Use whenever a user pastes a short link — call this first, then drill into the resolved resource id.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | string | yes | The short-link code, e.g. `AbCd1234`. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "The short-link code, e.g. `AbCd1234`."
    }
  },
  "required": [
    "code"
  ],
  "additionalProperties": false
}
```
