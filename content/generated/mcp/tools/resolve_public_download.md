# resolve_public_download

> Read-only.

Resolve a public-download token (the 10-character code at the end of a nurma.link download URL) to minimal file metadata — `fileName`, `mediaType`, `status`. Use to inspect what a download link points at before handing it to the user. Public endpoint — no auth required, no charge.

## Input

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | string | yes | The 10-character public download token. |

## Input schema

```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The 10-character public download token."
    }
  },
  "required": [
    "token"
  ],
  "additionalProperties": false
}
```
