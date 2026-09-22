[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/credits

# routes/credits

## Interfaces

### GetBalanceResponse

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="balance"></a> `balance` | `number` | Total spendable balance — sum of planBalance + purchasedBalance. |
| <a id="haspriortopup"></a> `hasPriorTopUp?` | `boolean` | True when the workspace has at least one prior manual top-up (`subscriptionGrant` order). Powers the FE auto-top-up enable gate — users must top up manually once before auto top-up can be enabled. |
| <a id="planbalance"></a> `planBalance` | `number` | Plan-granted credits for the current billing cycle. Refreshed (SET, not added) on every Stripe renewal. Unspent plan credits do NOT carry over. |
| <a id="purchasedbalance"></a> `purchasedBalance` | `number` | Purchased credits — accumulated from one-off top-ups, auto-top-ups, admin grants. Carries over indefinitely. |

***

### UsageReportIntegrationRow

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="billedcredits"></a> `billedCredits` | `number` |
| <a id="callcount"></a> `callCount` | `number` |
| <a id="integrationpoint"></a> `integrationPoint` | `string` |

***

### UsageReportParams

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="enddate"></a> `endDate?` | `string` | ISO date string. Server defaults to "now" when omitted. |
| <a id="integrationpoint-1"></a> `integrationPoint?` | `string` | Narrow the per-user breakdown to a single integration point. |
| <a id="startdate"></a> `startDate?` | `string` | ISO date string. Server defaults to 30 days ago when omitted. |
| <a id="userid"></a> `userId?` | `string` | Narrow the per-integration breakdown to a single user's calls. |

***

### UsageReportResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="byintegration"></a> `byIntegration` | [`UsageReportIntegrationRow`](#usagereportintegrationrow)[] |
| <a id="byuser"></a> `byUser` | [`UsageReportUserRow`](#usagereportuserrow)[] |
| <a id="filters"></a> `filters` | \{ `endDate`: `string`; `integrationPoint`: `string` \| `null`; `startDate`: `string`; `userId`: `string` \| `null`; \} |
| `filters.endDate` | `string` |
| `filters.integrationPoint` | `string` \| `null` |
| `filters.startDate` | `string` |
| `filters.userId` | `string` \| `null` |
| <a id="total"></a> `total` | \{ `billedCredits`: `number`; `callCount`: `number`; `tokensIn`: `number`; `tokensOut`: `number`; \} |
| `total.billedCredits` | `number` |
| `total.callCount` | `number` |
| `total.tokensIn` | `number` |
| `total.tokensOut` | `number` |

***

### UsageReportUserRow

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="avatar"></a> `avatar` | `unknown` |
| <a id="billedcredits-1"></a> `billedCredits` | `number` |
| <a id="callcount-1"></a> `callCount` | `number` |
| <a id="color"></a> `color` | `string` \| `null` |
| <a id="displayname"></a> `displayName` | `string` \| `null` |
| <a id="userid-1"></a> `userId` | `string` |

## Functions

### default()

```ts
function default(client): {
  getBalance: Promise<GetBalanceResponse>;
  getUsageReport: Promise<UsageReportResponse>;
};
```

Service-agnostic Nurama Credit balance + usage endpoints.

The `/v1/credits/*` route shape and SDK namespace are deliberately
decoupled from any single service's naming so future services (convos,
etc.) can draw from the same balance without callers having to know
where the spend originated. Today the metered data is AI-only because
AI is the only service that's metered, but the contract is stable.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `getBalance()` | (`workspaceId`) => `Promise`\<[`GetBalanceResponse`](#getbalanceresponse)\> | Get the workspace's spendable credit balance. |
| `getUsageReport()` | (`workspaceId`, `params?`) => `Promise`\<[`UsageReportResponse`](#usagereportresponse)\> | Get the workspace's credit usage report. Same shape as the AI usage report — today the data is AI-only because AI is the only service that's metered. |
