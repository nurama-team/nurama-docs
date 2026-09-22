[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/notification

# routes/notification

## Interfaces

### BaseNotificationParams

#### Extended by

- [`GetNotificationsData`](#getnotificationsdata)
- [`GetNewNotificationsData`](#getnewnotificationsdata)
- [`GetNewNotificationCountData`](#getnewnotificationcountdata)
- [`GetUsersLastNotificationsSeenData`](#getuserslastnotificationsseendata)
- [`UpdateUsersLastSeenData`](#updateuserslastseendata)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="channels"></a> `channels` | `string`[] |
| <a id="types"></a> `types?` | `string`[] |

***

### ChannelQuery

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="channels-1"></a> `channels` | `string`[] |
| <a id="types-1"></a> `types?` | `string`[] |

***

### GetNewNotificationCountBulkData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="channelqueries"></a> `channelQueries` | [`ChannelQuery`](#channelquery)[] |

***

### GetNewNotificationCountData

#### Extends

- [`BaseNotificationParams`](#basenotificationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="channels-2"></a> `channels` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`channels`](#channels) |
| <a id="types-2"></a> `types?` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`types`](#types) |

***

### GetNewNotificationsData

#### Extends

- [`BaseNotificationParams`](#basenotificationparams).[`PaginationParams`](#paginationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="channels-3"></a> `channels` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`channels`](#channels) |
| <a id="cursor"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-2) |
| <a id="includecounts"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-2) |
| <a id="includecursorrecord"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-2) |
| <a id="includestartatrecord"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-2) |
| <a id="limit"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-2) |
| <a id="page"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-2) |
| <a id="paginate"></a> `paginate?` | `"cursor"` \| `"index"` | - |
| <a id="paginatereverse"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-2) |
| <a id="startat"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-2) |
| <a id="types-3"></a> `types?` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`types`](#types) |
| <a id="updatelastseen"></a> `updateLastSeen?` | `boolean` | - |

***

### GetNotificationsData

#### Extends

- [`BaseNotificationParams`](#basenotificationparams).[`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="channels-4"></a> `channels` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`channels`](#channels) |
| <a id="createdafter"></a> `createdAfter?` | `number` | - |
| <a id="createdbefore"></a> `createdBefore?` | `number` | - |
| <a id="cursor-1"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-2) |
| <a id="includecounts-1"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-2) |
| <a id="includecursorrecord-1"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-2) |
| <a id="includestartatrecord-1"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-2) |
| <a id="limit-1"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-2) |
| <a id="page-1"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-2) |
| <a id="paginate-1"></a> `paginate?` | `"cursor"` \| `"index"` | - |
| <a id="paginatereverse-1"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-2) |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-1) |
| <a id="startat-1"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-2) |
| <a id="types-4"></a> `types?` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`types`](#types) |

***

### GetUsersLastNotificationsSeenData

#### Extends

- [`BaseNotificationParams`](#basenotificationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="channels-5"></a> `channels` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`channels`](#channels) |
| <a id="types-5"></a> `types?` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`types`](#types) |

***

### PaginationParams

#### Extended by

- [`GetNotificationsData`](#getnotificationsdata)
- [`GetNewNotificationsData`](#getnewnotificationsdata)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="cursor-2"></a> `cursor?` | `string` |
| <a id="includecounts-2"></a> `includeCounts?` | `boolean` |
| <a id="includecursorrecord-2"></a> `includeCursorRecord?` | `boolean` |
| <a id="includestartatrecord-2"></a> `includeStartAtRecord?` | `boolean` |
| <a id="limit-2"></a> `limit?` | `number` |
| <a id="page-2"></a> `page?` | `number` |
| <a id="paginatereverse-2"></a> `paginateReverse?` | `boolean` |
| <a id="startat-2"></a> `startAt?` | `string` |

***

### SortParams

#### Extended by

- [`GetNotificationsData`](#getnotificationsdata)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### UpdateUsersLastSeenData

#### Extends

- [`BaseNotificationParams`](#basenotificationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="channels-6"></a> `channels` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`channels`](#channels) |
| <a id="types-6"></a> `types?` | `string`[] | [`BaseNotificationParams`](#basenotificationparams).[`types`](#types) |

## Type Aliases

### LastSeenResponse

```ts
type LastSeenResponse = {
  channels: string[];
  lastSeen: number;
  types?: string[];
};
```

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="channels-7"></a> `channels` | `string`[] |
| <a id="lastseen"></a> `lastSeen` | `number` |
| <a id="types-7"></a> `types?` | `string`[] |

***

### NotificationCountBulkResponse

```ts
type NotificationCountBulkResponse = {
  channels: string[];
  count: number;
  types?: string[];
}[];
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `channels` | `string`[] |
| `count` | `number` |
| `types?` | `string`[] |

***

### NotificationCountResponse

```ts
type NotificationCountResponse = {
  count: number;
};
```

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="count"></a> `count` | `number` |

***

### PaginatedNotificationResponse

```ts
type PaginatedNotificationResponse = PaginatedResponse<Notification>;
```

***

### PaginatedResponse

```ts
type PaginatedResponse<T> = PaginatedResult | CursorPaginatedResult & {
  results?: T[];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `results?` | `T`[] |

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Functions

### default()

```ts
function default(client): {
  getNewNotificationCount: Promise<NotificationCountResponse>;
  getNewNotificationCountBulk: Promise<NotificationCountBulkResponse>;
  getNewNotifications: Promise<PaginatedNotificationResponse>;
  getNotifications: Promise<PaginatedNotificationResponse>;
  getUsersLastNotificationsSeen: Promise<LastSeenResponse>;
  updateUsersLastSeen: Promise<LastSeenResponse>;
};
```

Defines notification-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the notification-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `getNewNotificationCount()` | (`data`) => `Promise`\<[`NotificationCountResponse`](#notificationcountresponse)\> | Gets the count of new (unread) notifications for the specified channels. |
| `getNewNotificationCountBulk()` | (`data`) => `Promise`\<[`NotificationCountBulkResponse`](#notificationcountbulkresponse)\> | Gets the count of new notifications for multiple channel/type queries in a single request. |
| `getNewNotifications()` | (`data`) => `Promise`\<[`PaginatedNotificationResponse`](#paginatednotificationresponse)\> | Retrieves new notifications since the user's last viewed timestamp for the specified channels. Optionally updates the last viewed timestamp. |
| `getNotifications()` | (`data`) => `Promise`\<[`PaginatedNotificationResponse`](#paginatednotificationresponse)\> | Retrieves notifications for specified channels, with optional filtering and pagination. |
| `getUsersLastNotificationsSeen()` | (`data`) => `Promise`\<[`LastSeenResponse`](#lastseenresponse)\> | Retrieves the last seen timestamp record for the specified channels and optional types. |
| `updateUsersLastSeen()` | (`data`) => `Promise`\<[`LastSeenResponse`](#lastseenresponse)\> | Updates (or creates) the last seen timestamp for the user for the specified channels and optional types. |
