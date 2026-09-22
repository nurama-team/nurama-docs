[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/subscription

# routes/subscription

## Interfaces

### CreateWorkspaceOrderParams

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="amountinminor"></a> `amountInMinor?` | `number` | Customer-chosen purchase amount in the subscription's currency MINOR unit (pence for GBP, cents for USD, yen for JPY, etc.). Required for variable-amount products (currently only the AI add-on, `productType: 'enableAi'`). Server enforces a per-currency minimum. |
| <a id="productid"></a> `productId` | `string` | - |
| <a id="quantity"></a> `quantity` | `number` | - |

***

### GetSubscriptionOrdersParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="limit"></a> `limit?` | `number` |
| <a id="page"></a> `page?` | `number` |
| <a id="sortby"></a> `sortBy?` | `string` |

***

### GetSubscriptionsParams

#### Extends

- [`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="limit-1"></a> `limit?` | `number` | - |
| <a id="page-1"></a> `page?` | `number` | - |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-1) |
| <a id="status"></a> `status?` | [`SubscriptionStatus`](#subscriptionstatus) | - |

***

### ResourceLimits

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="totalcredits"></a> `totalCredits` | `number` |
| <a id="totalseats"></a> `totalSeats` | `number` |
| <a id="totalstorageinbytes"></a> `totalStorageInBytes` | `number` |

***

### RoleSeatUsage

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="limit-2"></a> `limit` | `number` \| `null` | Plan cap for this seat type, or `null` when the plan is unlimited for it. |
| <a id="used"></a> `used` | `number` | Distinct users occupying this seat type across the workspace + projects. |

***

### RoleUsage

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="creators"></a> `creators` | [`RoleSeatUsage`](#roleseatusage) |
| <a id="reviewers"></a> `reviewers` | [`RoleSeatUsage`](#roleseatusage) |

***

### SeatUsage

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="availableseats"></a> `availableSeats` | `number` |
| <a id="totalseats-1"></a> `totalSeats` | `number` |
| <a id="usedseats"></a> `usedSeats` | `number` |

***

### SortParams

#### Extended by

- [`GetSubscriptionsParams`](#getsubscriptionsparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### StorageUsage

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="availablestorageinbytes"></a> `availableStorageInBytes` | `number` |
| <a id="totalstorageinbytes-1"></a> `totalStorageInBytes` | `number` |
| <a id="usedstorageinbytes"></a> `usedStorageInBytes` | `number` |

## Type Aliases

### PlanChangeWarning

```ts
type PlanChangeWarning = 
  | {
  capability: string;
  type: "capabilityRemoved";
}
  | {
  currency: string;
  currentSeats: number;
  period: "month" | "year";
  total: number | null;
  type: "seatMigration";
  unitPrice: number | null;
};
```

Soft warnings returned by a plan swap / dry-run. STRUCTURED (not localized
strings) so your app can render localized copy from these values.

***

### SubscriptionStatus

```ts
type SubscriptionStatus = 
  | "active"
  | "pending"
  | "canceled"
  | "expired"
  | "pastDue"
  | "paused"
  | "paymentFailed"
  | "unpaid";
```

## Functions

### default()

```ts
function default(client): {
  cancelWorkspaceSubscription: Promise<any>;
  createWorkspaceOrder: Promise<any>;
  getResourceLimits: Promise<ResourceLimits>;
  getRoleUsage: Promise<RoleUsage>;
  getSeatUsage: Promise<SeatUsage>;
  getStorageUsage: Promise<StorageUsage>;
  getUserSubscriptions: Promise<Subscription[]>;
  getWorkspaceOrders: Promise<any[]>;
  getWorkspaceSubscription: Promise<Subscription>;
  getWorkspaceUsageSummary: Promise<{
     billableSeatCount: number;
     storageUsedInBytes: number;
  }>;
  resumeWorkspaceSubscription: Promise<any>;
  swapWorkspacePlan: Promise<{
     subscription: Subscription | null;
     warnings: PlanChangeWarning[];
  }>;
};
```

Defines subscription-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the subscription-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `cancelWorkspaceSubscription()` | (`workspaceId`) => `Promise`\<`any`\> | Cancels the subscription for a specific workspace. Requires authentication and permission. |
| `createWorkspaceOrder()` | (`workspaceId`, `orderData`) => `Promise`\<`any`\> | Creates a subscription order for a specific workspace. Requires authentication and permission. |
| `getResourceLimits()` | (`resourceId`) => `Promise`\<[`ResourceLimits`](#resourcelimits)\> | Retrieves the resource limits (e.g., storage, seats) for a specific resource (typically workspace). Requires authentication. |
| `getRoleUsage()` | (`resourceId`) => `Promise`\<[`RoleUsage`](#roleusage)\> | Retrieves per-role (creator / reviewer) seat usage and caps for a workspace. `limit` is `null` when the plan is unlimited for that seat type. Requires authentication. |
| `getSeatUsage()` | (`resourceId`) => `Promise`\<[`SeatUsage`](#seatusage)\> | Retrieves the seat usage for a specific resource (typically workspace). Requires authentication. |
| `getStorageUsage()` | (`resourceId`) => `Promise`\<[`StorageUsage`](#storageusage)\> | Retrieves the storage usage for a specific resource (typically workspace). Requires authentication. |
| `getUserSubscriptions()` | (`params?`) => `Promise`\<`Subscription`[]\> | Retrieves all subscriptions owned by the currently authenticated user. Requires authentication. |
| `getWorkspaceOrders()` | (`workspaceId`, `params?`) => `Promise`\<`any`[]\> | Retrieves subscription orders for a specific workspace. Requires authentication and permission. |
| `getWorkspaceSubscription()` | (`workspaceId`) => `Promise`\<`Subscription`\> | Retrieves the active subscription for a specific workspace. Requires authentication and permission. |
| `getWorkspaceUsageSummary()` | (`workspaceId`) => `Promise`\<\{ `billableSeatCount`: `number`; `storageUsedInBytes`: `number`; \}\> | Retrieves the workspace usage summary (billable seats and storage used). Requires authentication and subscription management permission. |
| `resumeWorkspaceSubscription()` | (`workspaceId`) => `Promise`\<`any`\> | Reverse a scheduled (period-end) cancellation, keeping the workspace's subscription on its normal renewal cycle. Only valid while the subscription is still active with a pending cancellation; a fully lapsed subscription can't be resumed (the owner must re-subscribe). Requires authentication and permission. |
| `swapWorkspacePlan()` | (`workspaceId`, `params`) => `Promise`\<\{ `subscription`: `Subscription` \| `null`; `warnings`: [`PlanChangeWarning`](#planchangewarning)[]; \}\> | Swap the workspace's active basePlan line for a different basePlan product. Same code path both upgrades and downgrades; the API's pre-flight capacity check is what distinguishes a permitted change from a refused one. Pass `dryRun: true` to get the pre-flight verdict without mutating. On over-allocation the API returns 400 `planCapacityInsufficient` with `errorData.violations: [{ resource, current, newLimit }]`, surfaced via the SDK's normal error path. On success, returns the updated subscription plus a `warnings[]` array of feature-gate capabilities the destination plan does NOT include (suitable for showing as a confirmation notice). |
