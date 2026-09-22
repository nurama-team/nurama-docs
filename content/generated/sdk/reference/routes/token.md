[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/token

# routes/token

## Interfaces

### CreateTokenData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="expiresat"></a> `expiresAt?` | `string` \| `null` | Optional ISO date. Null / omitted = non-expiring. |
| <a id="name"></a> `name` | `string` | Customer-facing label. 1–80 characters. |
| <a id="scopes"></a> `scopes` | [`TokenScope`](#tokenscope)[] | At least one scope. Validated against the backend registry. |

***

### CreateTokenResponse

The shape returned by `listTokens` and (without the `token` field)
the metadata half of `createToken`. Never includes the raw secret —
that is shown exactly once at creation time and is the caller's
responsibility to capture.

#### Extends

- [`TokenSummary`](#tokensummary)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt` | `string` | - | [`TokenSummary`](#tokensummary).[`createdAt`](#createdat-1) |
| <a id="expiresat-1"></a> `expiresAt?` | `string` \| `null` | - | [`TokenSummary`](#tokensummary).[`expiresAt`](#expiresat-2) |
| <a id="id"></a> `id` | `string` | - | [`TokenSummary`](#tokensummary).[`id`](#id-1) |
| <a id="kind"></a> `kind` | [`TokenKind`](#tokenkind) | - | [`TokenSummary`](#tokensummary).[`kind`](#kind-1) |
| <a id="lastused"></a> `lastUsed?` | `string` \| `null` | - | [`TokenSummary`](#tokensummary).[`lastUsed`](#lastused-1) |
| <a id="name-1"></a> `name` | `string` | - | [`TokenSummary`](#tokensummary).[`name`](#name-2) |
| <a id="prefix"></a> `prefix` | `string` | - | [`TokenSummary`](#tokensummary).[`prefix`](#prefix-1) |
| <a id="scopes-1"></a> `scopes` | [`TokenScope`](#tokenscope)[] | - | [`TokenSummary`](#tokensummary).[`scopes`](#scopes-2) |
| <a id="token"></a> `token` | `string` | The raw secret. Returned ONLY in this response. The server keeps a one-way hash and cannot recover this value — the customer must capture it immediately (typical pattern: reveal-once modal with a copy button). | - |

***

### TokenSummary

The shape returned by `listTokens` and (without the `token` field)
the metadata half of `createToken`. Never includes the raw secret —
that is shown exactly once at creation time and is the caller's
responsibility to capture.

#### Extended by

- [`CreateTokenResponse`](#createtokenresponse)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="createdat-1"></a> `createdAt` | `string` |
| <a id="expiresat-2"></a> `expiresAt?` | `string` \| `null` |
| <a id="id-1"></a> `id` | `string` |
| <a id="kind-1"></a> `kind` | [`TokenKind`](#tokenkind) |
| <a id="lastused-1"></a> `lastUsed?` | `string` \| `null` |
| <a id="name-2"></a> `name` | `string` |
| <a id="prefix-1"></a> `prefix` | `string` |
| <a id="scopes-2"></a> `scopes` | [`TokenScope`](#tokenscope)[] |

## Type Aliases

### TokenKind

```ts
type TokenKind = "pat" | "oauthAccess" | "oauthRefresh" | "botAccess";
```

Personal Access Token kinds. v1 only mints `pat`; the rest are
reserved for the future OAuth grant flow and are listed here so
downstream code can switch on the kind without importing a server-
side enum.

***

### TokenScope

```ts
type TokenScope = 
  | "chat:read"
  | "chat:write"
  | "tasks:read"
  | "tasks:write"
  | "assets:read"
  | "assets:write"
  | "projects:read"
  | "workspaces:read";
```

Granted action verbs on a token. Mirrors the backend's
`@config/tokenScopes` registry; adding a scope on the BE means
adding it here too (or callers fall back to `string` when they
accept arbitrary scopes from configuration).

## Functions

### default()

```ts
function default(client): {
  createToken: Promise<CreateTokenResponse>;
  deleteToken: Promise<void>;
  listTokens: Promise<TokenSummary[]>;
};
```

Personal Access Token surface — auth-gated, owner-scoped. Any
logged-in user can mint, list, and revoke their own tokens; there
is no admin-on-behalf surface here (admins managing bot keys do
that via the `bot` methods).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createToken()` | (`data`) => `Promise`\<[`CreateTokenResponse`](#createtokenresponse)\> | Mint a new Personal Access Token for the calling user. The raw secret is in the response's `token` field — store it immediately, it cannot be retrieved again. |
| `deleteToken()` | (`tokenId`) => `Promise`\<`void`\> | Revoke one of the caller's Personal Access Tokens. The revocation is immediate — the token will return 401 on the very next request. |
| `listTokens()` | () => `Promise`\<[`TokenSummary`](#tokensummary)[]\> | List the caller's Personal Access Tokens. Bot-access keys held by the same user (rare but possible — admin who's also a bot owner) are filtered out server-side and surface via the bot management screens instead. |
