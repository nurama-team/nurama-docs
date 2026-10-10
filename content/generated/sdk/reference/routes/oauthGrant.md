[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/oauthGrant

# routes/oauthGrant

## Interfaces

### OAuthGrantSummary

One application a user has authorised over OAuth.

A grant is the record of consent: the scopes approved, and the tie binding
every token issued under it. Revoking one withdraws the application's
access.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="clientid"></a> `clientId` | `string` \| `null` | - |
| <a id="clientname"></a> `clientName` | `string` \| `null` | The application's name. Chosen by the application itself when `verified` is false — treat it as display text from an untrusted source, never as identification. |
| <a id="expiresat"></a> `expiresAt` | `string` \| `null` | - |
| <a id="grantedat"></a> `grantedAt` | `string` | - |
| <a id="grantid"></a> `grantId` | `string` | Opaque identifier; pass to `revokeGrant`. |
| <a id="scopes"></a> `scopes` | `string`[] | Scopes the user approved, from the backend's token-scope registry. |
| <a id="verified"></a> `verified` | `boolean` | Whether Nurama configured this application. False for one that registered itself through Dynamic Client Registration: it picked its own name and nobody reviewed it. |

## Functions

### default()

```ts
function default(client): {
  listGrants: Promise<OAuthGrantSummary[]>;
  revokeGrant: Promise<void>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `listGrants()` | () => `Promise`\<[`OAuthGrantSummary`](#oauthgrantsummary)[]\> | List the applications the caller has authorised, newest first. Expired grants are omitted by the server. |
| `revokeGrant()` | (`grantId`) => `Promise`\<`void`\> | Withdraw an application's access: the grant and every token issued under it. An access token already in flight stays valid until it expires, so revocation is not instantaneous for a request under way. |
