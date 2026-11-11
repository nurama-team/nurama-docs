[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/product

# routes/product

## Interfaces

### GetWorkspaceProductsParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="paymentprovider"></a> `paymentProvider?` | `"stripe"` \| `"manualInvoice"` |
| <a id="producttype"></a> `productType?` | `"basePlan"` \| `"addSeat"` \| `"addStorage"` \| `"addCredits"` \| `"enableBoards"` |

## Type Aliases

### ProductResponse

```ts
type ProductResponse = Product;
```

***

### SupportedCurrency

```ts
type SupportedCurrency = "gbp" | "usd" | "eur";
```

## Functions

### default()

```ts
function default(client): {
  getSuggestedCurrency: Promise<{
     country: string | null;
     currency: SupportedCurrency;
     locked?: boolean;
     supported: SupportedCurrency[];
  }>;
  getWorkspaceProducts: Promise<Product[]>;
  listPlans: Promise<Product[]>;
};
```

Defines product-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the product-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `getSuggestedCurrency()` | () => `Promise`\<\{ `country`: `string` \| `null`; `currency`: [`SupportedCurrency`](#supportedcurrency); `locked?`: `boolean`; `supported`: [`SupportedCurrency`](#supportedcurrency)[]; \}\> | Suggested billing currency for the caller, derived server-side from the CDN geo header. A *default* for the currency selector only — the user can override. Falls back to `usd` with no geo header. |
| `getWorkspaceProducts()` | (`workspaceId`, `params?`) => `Promise`\<`Product`[]\> | Retrieves available products for a specific workspace, considering restrictions. Requires authentication and permission. |
| `listPlans()` | () => `Promise`\<`Product`[]\> | The base-plan catalogue. Works signed out: without a session it is the public catalogue (active, unrestricted plans). With one it also has the promo plans restricted to the caller (`restricted: true`) and leaves out a Demo they've already used. Plans carry only their public fields — no `restrictTo`, `notes` or payment-provider ids. |
