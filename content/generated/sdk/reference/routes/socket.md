[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/socket

# routes/socket

## Interfaces

### BaseNotificationEvent

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="changes"></a> `changes?` | \{ `create?`: \{ `resource`: `any`; `resourceId`: `string`; `resourceType`: `string`; \}[]; `delete?`: \{ `resourceId`: `string`; `resourceType`: `string`; \}[]; `update?`: \{ `newResource?`: `any`; `oldResource?`: `any`; `resource`: `any`; `resourceId`: `string`; `resourceType`: `string`; \}[]; \} |
| `changes.create?` | \{ `resource`: `any`; `resourceId`: `string`; `resourceType`: `string`; \}[] |
| `changes.delete?` | \{ `resourceId`: `string`; `resourceType`: `string`; \}[] |
| `changes.update?` | \{ `newResource?`: `any`; `oldResource?`: `any`; `resource`: `any`; `resourceId`: `string`; `resourceType`: `string`; \}[] |
| <a id="channels"></a> `channels` | `string`[] |
| <a id="createdat"></a> `createdAt` | `string` |
| <a id="initiator"></a> `initiator` | `any` |
| <a id="initiatorid"></a> `initiatorId` | `string` \| `null` |
| <a id="initiatortype"></a> `initiatorType` | `"user"` \| `"system"` |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | `string` |
| <a id="tokens"></a> `tokens?` | `Record`\<`string`, `any`\> |
| <a id="type"></a> `type` | `string` |

***

### PublicSocketOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autoreconnect"></a> `autoReconnect?` | `boolean` | Automatically reconnect if connection is lost **Default** `true` |
| <a id="debug"></a> `debug?` | `boolean` | Debug logging **Default** `false` |
| <a id="websocketurl"></a> `websocketURL?` | `string` | Override the WebSocket URL for this specific connection Takes precedence over the client's websocketURL option |

***

### SocketChannel

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="channel"></a> `channel` | `string` | Channel path |
| <a id="listeners"></a> `listeners` | `Record`\<`string`, `Set`\<(`event`) => `void`\>\> | Event listeners |
| <a id="socket"></a> `socket` | [`SocketInterface`](#socketinterface) | Socket.IO instance |

***

### SocketInterface

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="connected"></a> `connected` | `boolean` |
| <a id="disconnect"></a> `disconnect` | () => `void` |
| <a id="emit"></a> `emit` | (`event`, ...`args`) => `void` |
| <a id="off"></a> `off` | (`event`) => `void` |
| <a id="on"></a> `on` | (`event`, `listener`) => `void` |
| <a id="timeout"></a> `timeout` | (`ms`) => \{ `emit`: (`event`, ...`args`) => `void`; \} |

***

### SocketOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autoreconnect-1"></a> `autoReconnect?` | `boolean` | Automatically reconnect if connection is lost **Default** `true` |
| <a id="autoreconnectontokenexpiry"></a> `autoReconnectOnTokenExpiry?` | `boolean` | Automatically attempt to reconnect if token expires **Default** `true` |
| <a id="autorefresh"></a> `autoRefresh?` | `boolean` | Automatically handle token refresh **Default** `true` |
| <a id="debug-1"></a> `debug?` | `boolean` | Debug logging **Default** `false` |
| <a id="websocketurl-1"></a> `websocketURL?` | `string` | Override the WebSocket URL for this specific connection Takes precedence over the client's websocketURL option |

## Type Aliases

### SocketMethods

```ts
type SocketMethods = ReturnType<typeof default>;
```

## Functions

### default()

```ts
function default(client): {
  connect: (channel, options) => Promise<SocketChannel>;
  connectPublic: (publicToken, options) => Promise<SocketChannel>;
  disconnect: (channel) => Promise<void>;
  disconnectAll: () => Promise<void>;
  emit: (channel, event, data?) => void;
  emitWithAck: (channel, event, data, timeoutMs) => Promise<boolean>;
  isConnected: (channel) => boolean;
  onReconnect: (channel, callback) => void;
  onReconnectFailed: (channel, callback) => void;
  subscribe: <T>(channel, event, callback) => Promise<void>;
  subscribePublic: <T>(publicToken, event, callback) => Promise<void>;
  unsubscribe: (channel, event, callback?) => void;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `connect()` | (`channel`, `options`) => `Promise`\<[`SocketChannel`](#socketchannel)\> | Connect to a socket channel |
| `connectPublic()` | (`publicToken`, `options`) => `Promise`\<[`SocketChannel`](#socketchannel)\> | Connect to a public socket channel without authentication |
| `disconnect()` | (`channel`) => `Promise`\<`void`\> | Disconnect from a socket channel |
| `disconnectAll()` | () => `Promise`\<`void`\> | Disconnect from all channels |
| `emit()` | (`channel`, `event`, `data?`) => `void` | Emit an event to a connected channel |
| `emitWithAck()` | (`channel`, `event`, `data`, `timeoutMs`) => `Promise`\<`boolean`\> | Emit an event with a timeout-bounded server acknowledgement. Resolves `true` if the server acks within `timeoutMs`, `false` on timeout or transport error. Use it to actively verify a channel's liveness when `socket.connected` may be stale — most notably after a backgrounded tab returns to focus, where the flag can remain `true` for up to socket.io's own heartbeat window (~25–45s) even after the underlying TCP transport has died. Relies on socket.io v4's `socket.timeout(ms).emit(ev, data, cb)` pattern: the server acknowledges the event via its trailing callback; if no ack arrives within `timeoutMs` the callback receives an Error. |
| `isConnected()` | (`channel`) => `boolean` | Check if connected to a channel |
| `onReconnect()` | (`channel`, `callback`) => `void` | Register a callback for when the channel reconnects — a socket.io transport-level reconnect, or the token-refresh reconnect. Use it to recover any gap of server->client messages missed while the connection was down; socket.io does not replay those. Dispatched from the 'reconnect' handler in connect() and from the token-refresh path. |
| `onReconnectFailed()` | (`channel`, `callback`) => `void` | Register a callback for when Socket.IO exhausts all reconnection attempts |
| `subscribe()` | \<`T`\>(`channel`, `event`, `callback`) => `Promise`\<`void`\> | Subscribe to an event on a channel |
| `subscribePublic()` | \<`T`\>(`publicToken`, `event`, `callback`) => `Promise`\<`void`\> | Subscribe to an event on a public channel Automatically connects to the public channel if not already connected |
| `unsubscribe()` | (`channel`, `event`, `callback?`) => `void` | Stop listening for an event on a channel. If `callback` is provided, only that specific listener is removed; otherwise every listener for that event is cleared. |
