# get_public_download_url

> Read-only.

Return a signed download URL for a public-download token — what a `nurma.link` page actually redirects to when the user clicks Download. Use to fetch the underlying file programmatically when you only have the public token. Public endpoint — no auth required.

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
