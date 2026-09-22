[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/config

# routes/config

## Interfaces

### ConfigMethods

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="getconfig"></a> `getConfig` | () => `Promise`\<`any`\> |

## Functions

### default()

```ts
function default(client): ConfigMethods;
```

Creates methods related to configuration endpoints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

[`ConfigMethods`](#configmethods)

An object with configuration-related methods.
