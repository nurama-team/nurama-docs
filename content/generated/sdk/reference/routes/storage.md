[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/storage

# routes/storage

## Interfaces

### ChartDataEntry

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="averagesizeinbytes"></a> `averageSizeInBytes` | `number` |
| <a id="period"></a> `period` | `string` |

***

### GetStorageChartParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="aggregationperiod"></a> `aggregationPeriod?` | `"month"` \| `"year"` \| `"day"` \| `"week"` |
| <a id="enddate"></a> `endDate?` | `number` |
| <a id="startdate"></a> `startDate?` | `number` |

***

### StorageRecord

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="id"></a> `id` | `string` |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | [`ResourceType`](#resourcetype-1) |
| <a id="sizeinbytes"></a> `sizeInBytes` | `number` |

## Type Aliases

### ChartDataResponse

```ts
type ChartDataResponse = ChartDataEntry[];
```

***

### ResourceType

```ts
type ResourceType = "user" | "workspace" | "project" | "chat" | "asset";
```

***

### StorageMethods

```ts
type StorageMethods = ReturnType<typeof default>;
```

## Functions

### default()

```ts
function default(client): {
  getStorageChart: Promise<ChartDataResponse>;
  getStorageRecord: Promise<StorageRecord>;
};
```

Defines storage-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the storage-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `getStorageChart()` | ( `resourceType`, `resourceId`, `params?` ) => `Promise`\<[`ChartDataResponse`](#chartdataresponse)\> | Retrieves storage usage chart data for a specific resource. Requires authentication and permission. |
| `getStorageRecord()` | (`resourceType`, `resourceId`) => `Promise`\<[`StorageRecord`](#storagerecord)\> | Retrieves the latest storage record for a specific resource. Requires authentication and permission. |
