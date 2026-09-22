[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/version

# routes/version

## Interfaces

### CommitResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="buildcommit"></a> `buildCommit` | `string` |

***

### HealthStatus

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="memory"></a> `memory` | `Record`\<`string`, `unknown`\> | - |
| <a id="postgres"></a> `postgres` | \{ \[`key`: `string`\]: `unknown`; `status`: `"connected"` \| `"disconnected"`; \} | - |
| `postgres.status` | `"connected"` \| `"disconnected"` | - |
| <a id="reason"></a> `reason?` | `string` | Present when status is `degraded` or `unhealthy`. |
| <a id="status"></a> `status` | `"healthy"` \| `"degraded"` \| `"unhealthy"` | - |
| <a id="timestamp"></a> `timestamp` | `number` | Epoch milliseconds when the check ran. |
| <a id="uptime"></a> `uptime` | `number` | Process uptime in seconds. |

## Type Aliases

### VersionMethods

```ts
type VersionMethods = ReturnType<typeof default>;
```

## Functions

### default()

```ts
function default(client): {
  getCommitHash: Promise<CommitResponse>;
  getHealth: Promise<HealthStatus>;
};
```

Defines version-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the version-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `getCommitHash()` | () => `Promise`\<[`CommitResponse`](#commitresponse)\> | Retrieves the latest git commit hash of the deployed application. This is a public endpoint and does not require authentication. |
| `getHealth()` | () => `Promise`\<[`HealthStatus`](#healthstatus)\> | Retrieves the API health report (database connectivity, memory, uptime). Public endpoint. Resolves normally for `healthy` and `degraded`; the API responds 503 for `unhealthy`, which surfaces as a thrown error with `status: 503` and the report on `data`. |
