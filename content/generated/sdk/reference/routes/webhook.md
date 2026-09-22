[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/webhook

# routes/webhook

## Interfaces

### CreateWebhookData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="events"></a> `events` | [`WebhookEvent`](#webhookevent)[] | - |
| <a id="expiresat"></a> `expiresAt?` | `string` \| `null` | Optional ISO timestamp. Must be in the future when set. |
| <a id="name"></a> `name` | `string` | - |
| <a id="url"></a> `url` | `string` | - |

***

### CreateWebhookResponse

#### Extended by

- [`RotateWebhookSecretResponse`](#rotatewebhooksecretresponse)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="signingsecret"></a> `signingSecret` | `string` | The HMAC signing secret. Returned ONLY here (and from `rotateWebhookSecret`). The server keeps the ciphertext on the row and cannot recover the plaintext later — the customer must capture it now or rotate. |
| <a id="subscription"></a> `subscription` | [`WebhookSubscription`](#webhooksubscription) | - |

***

### ListDeliveriesParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="cursor"></a> `cursor?` | `string` |
| <a id="limit"></a> `limit?` | `number` |
| <a id="status"></a> `status?` | [`WebhookAttemptStatus`](#webhookattemptstatus-1) |

***

### ListDeliveriesResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="items"></a> `items` | [`WebhookAttempt`](#webhookattempt)[] |
| <a id="nextcursor"></a> `nextCursor` | `string` \| `null` |

***

### RotateWebhookSecretResponse

#### Extends

- [`CreateWebhookResponse`](#createwebhookresponse)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="signingsecret-1"></a> `signingSecret` | `string` | The HMAC signing secret. Returned ONLY here (and from `rotateWebhookSecret`). The server keeps the ciphertext on the row and cannot recover the plaintext later — the customer must capture it now or rotate. | [`CreateWebhookResponse`](#createwebhookresponse).[`signingSecret`](#signingsecret) |
| <a id="subscription-1"></a> `subscription` | [`WebhookSubscription`](#webhooksubscription) | - | [`CreateWebhookResponse`](#createwebhookresponse).[`subscription`](#subscription) |

***

### TestWebhookResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="message"></a> `message` | `string` |
| <a id="queued"></a> `queued` | `true` |

***

### UpdateWebhookData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="events-1"></a> `events?` | [`WebhookEvent`](#webhookevent)[] | - |
| <a id="expiresat-1"></a> `expiresAt?` | `string` \| `null` | Pass null to clear an existing expiry; pass a future ISO date to set / extend. |
| <a id="name-1"></a> `name?` | `string` | - |
| <a id="status-1"></a> `status?` | `"active"` \| `"paused"` | - |
| <a id="url-1"></a> `url?` | `string` | - |

***

### WebhookAttempt

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="attempt"></a> `attempt` | `number` |
| <a id="createdat"></a> `createdAt` | `string` |
| <a id="deliveredat"></a> `deliveredAt?` | `string` \| `null` |
| <a id="errormessage"></a> `errorMessage?` | `string` \| `null` |
| <a id="id"></a> `id` | `string` |
| <a id="maxattempts"></a> `maxAttempts` | `number` |
| <a id="nextretryat"></a> `nextRetryAt?` | `string` \| `null` |
| <a id="notificationid"></a> `notificationId` | `string` |
| <a id="responsebody"></a> `responseBody?` | `string` \| `null` |
| <a id="responsecode"></a> `responseCode?` | `number` \| `null` |
| <a id="responseheaders"></a> `responseHeaders?` | `Record`\<`string`, `any`\> \| `null` |
| <a id="scheduledat"></a> `scheduledAt` | `string` |
| <a id="signaturev1"></a> `signatureV1` | `string` |
| <a id="startedat"></a> `startedAt?` | `string` \| `null` |
| <a id="status-2"></a> `status` | [`WebhookAttemptStatus`](#webhookattemptstatus-1) |
| <a id="subscriptionid"></a> `subscriptionId` | `string` |
| <a id="updatedat"></a> `updatedAt` | `string` |

***

### WebhookSubscription

Public shape of a webhook subscription. Never includes the signing
secret or the encrypted ciphertext — those are server-only fields.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="appid"></a> `appId?` | `string` \| `null` | - |
| <a id="createdat-1"></a> `createdAt` | `string` | - |
| <a id="createdbyid"></a> `createdById` | `string` | - |
| <a id="events-2"></a> `events` | [`WebhookEvent`](#webhookevent)[] | - |
| <a id="expiresat-2"></a> `expiresAt?` | `string` \| `null` | Optional expiration. When set and in the past, the worker stops fanning new attempts to this subscription, and any in-flight attempts DLQ with a clear reason rather than retrying. Null = no expiry; the subscription delivers indefinitely until manually paused or deleted. |
| <a id="failedoutat"></a> `failedOutAt?` | `string` \| `null` | - |
| <a id="failedoutreason"></a> `failedOutReason?` | `string` \| `null` | - |
| <a id="id-1"></a> `id` | `string` | - |
| <a id="lastdeliveryat"></a> `lastDeliveryAt?` | `string` \| `null` | - |
| <a id="lastfailureat"></a> `lastFailureAt?` | `string` \| `null` | - |
| <a id="lastsuccessat"></a> `lastSuccessAt?` | `string` \| `null` | - |
| <a id="name-2"></a> `name` | `string` | - |
| <a id="status-3"></a> `status` | [`WebhookSubscriptionStatus`](#webhooksubscriptionstatus-1) | - |
| <a id="updatedat-1"></a> `updatedAt` | `string` | - |
| <a id="url-2"></a> `url` | `string` | - |
| <a id="workspaceid"></a> `workspaceId` | `string` | - |

## Type Aliases

### WebhookAttemptStatus

```ts
type WebhookAttemptStatus = "pending" | "inflight" | "succeeded" | "failed" | "dlq";
```

***

### WebhookEvent

```ts
type WebhookEvent = 
  | "task.created"
  | "task.updated"
  | "task.deleted"
  | "chat.message.created"
  | "asset.published"
  | "webhook.test";
```

Wire-format webhook event names. New events are added over time, and
payloads only ever gain fields, so receivers pinned to a specific event
name keep working as the contract grows.

***

### WebhookSubscriptionStatus

```ts
type WebhookSubscriptionStatus = "active" | "paused" | "failedOut";
```

## Functions

### default()

```ts
function default(client): {
  createWebhook: Promise<CreateWebhookResponse>;
  deleteWebhook: Promise<void>;
  getWebhook: Promise<WebhookSubscription>;
  listWebhookDeliveries: Promise<ListDeliveriesResponse>;
  listWebhooks: Promise<WebhookSubscription[]>;
  replayWebhookDelivery: Promise<{
     attempt: WebhookAttempt;
  }>;
  rotateWebhookSecret: Promise<RotateWebhookSecretResponse>;
  testWebhook: Promise<TestWebhookResponse>;
  updateWebhook: Promise<WebhookSubscription>;
};
```

Outbound webhook subscription management. Admin-gated server-side
by `canManageWebhooks`. All operations are workspace-scoped — there
is no app-owned surface here yet (Phase 3 / OAuth).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createWebhook()` | (`workspaceId`, `data`) => `Promise`\<[`CreateWebhookResponse`](#createwebhookresponse)\> | Create a webhook subscription. The signing secret is in the response's `secret` field — store it immediately, it cannot be retrieved again. **Requires** `canManageWebhooks` on the workspace. |
| `deleteWebhook()` | (`workspaceId`, `webhookId`) => `Promise`\<`void`\> | Delete a webhook subscription. In-flight deliveries continue to the receiver until they exhaust retries; no new deliveries fire. **Requires** `canManageWebhooks` on the workspace. |
| `getWebhook()` | (`workspaceId`, `webhookId`) => `Promise`\<[`WebhookSubscription`](#webhooksubscription)\> | Fetch a single webhook subscription by id. **Requires** `canManageWebhooks` on the workspace. |
| `listWebhookDeliveries()` | ( `workspaceId`, `webhookId`, `params?` ) => `Promise`\<[`ListDeliveriesResponse`](#listdeliveriesresponse)\> | Paginated list of delivery attempts for a webhook subscription. Useful for diagnosing failures (HTTP status, response body snippet, retry timing). **Requires** `canManageWebhooks` on the workspace. |
| `listWebhooks()` | (`workspaceId`) => `Promise`\<[`WebhookSubscription`](#webhooksubscription)[]\> | List webhook subscriptions in a workspace. Secrets are never returned. **Requires** `canManageWebhooks` on the workspace. |
| `replayWebhookDelivery()` | ( `workspaceId`, `webhookId`, `attemptId` ) => `Promise`\<\{ `attempt`: [`WebhookAttempt`](#webhookattempt); \}\> | Re-fire a specific past delivery attempt. Useful for confirming a receiver fix without waiting for the next real event. **Requires** `canManageWebhooks` on the workspace. |
| `rotateWebhookSecret()` | (`workspaceId`, `webhookId`) => `Promise`\<[`RotateWebhookSecretResponse`](#rotatewebhooksecretresponse)\> | Generate a new HMAC signing secret for a subscription and return it once. The old secret is invalidated immediately. **Requires** `canManageWebhooks` on the workspace. |
| `testWebhook()` | (`workspaceId`, `webhookId`) => `Promise`\<[`TestWebhookResponse`](#testwebhookresponse)\> | Fire a synthetic `webhook.test` delivery to the subscription's URL. The receiver gets a small payload they can use to verify their HMAC + parsing setup. Returns immediately; check the delivery log for the outcome. |
| `updateWebhook()` | ( `workspaceId`, `webhookId`, `data` ) => `Promise`\<[`WebhookSubscription`](#webhooksubscription)\> | Update a webhook subscription's url, event filter, or active state. **Requires** `canManageWebhooks` on the workspace. |
