[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/payment

# routes/payment

## Interfaces

### ManualCheckoutRequest

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="billingperiod"></a> `billingPeriod` | `"month"` \| `"year"` |
| <a id="currency"></a> `currency` | `"usd"` \| `"gbp"` |
| <a id="productid"></a> `productId` | `string` |
| <a id="resourceid"></a> `resourceId` | `string` |

***

### StripeCheckoutRequest

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="billingperiod-1"></a> `billingPeriod` | `"month"` \| `"year"` |
| <a id="currency-1"></a> `currency` | `"usd"` \| `"gbp"` |
| <a id="productid-1"></a> `productId` | `string` |
| <a id="resourceid-1"></a> `resourceId` | `string` |

***

### StripeCheckoutResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="url"></a> `url` | `string` |

***

### StripeCustomerResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="customerid"></a> `customerId` | `string` |

***

### StripePortalResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="url-1"></a> `url` | `string` |

## Functions

### default()

```ts
function default(client): {
  createManualCheckout: Promise<any>;
  createStripeCheckout: Promise<StripeCheckoutResponse>;
  createStripeCustomer: Promise<StripeCustomerResponse>;
  getStripePortalUrl: Promise<StripePortalResponse>;
};
```

Defines payment-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the payment-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `createManualCheckout()` | (`checkoutData`) => `Promise`\<`any`\> | Create a manual subscription without Stripe processing. Requires authentication and permission. |
| `createStripeCheckout()` | (`checkoutData`) => `Promise`\<[`StripeCheckoutResponse`](#stripecheckoutresponse)\> | Create a Stripe subscription checkout session. Requires authentication and permission. |
| `createStripeCustomer()` | () => `Promise`\<[`StripeCustomerResponse`](#stripecustomerresponse)\> | Create a new Stripe customer for the authenticated user. Requires authentication and permission. |
| `getStripePortalUrl()` | () => `Promise`\<[`StripePortalResponse`](#stripeportalresponse)\> | Generate a URL for the Stripe customer portal for subscription management. Requires authentication and permission. |
