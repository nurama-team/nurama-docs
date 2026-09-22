[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/device

# routes/device

## Functions

### default()

```ts
function default(client): {
  deleteDevice: Promise<void>;
  getDevice: Promise<Device>;
  getUserDevices: Promise<Device[]>;
  registerDevice: Promise<Device>;
  updateDevice: Promise<Device>;
};
```

Defines device-related methods for the NuramaClient.
Handles device registration and management for push notifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the device-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `deleteDevice()` | (`deviceId`) => `Promise`\<`void`\> | Delete a device. Users can only delete their own devices. Requires authentication. **Example** `await client.device.deleteDevice('507f1f77bcf86cd799439011');` |
| `getDevice()` | (`deviceId`) => `Promise`\<`Device`\> | Get a specific device by ID. Users can only access their own devices. Requires authentication. **Example** `const device = await client.device.getDevice('507f1f77bcf86cd799439011');` |
| `getUserDevices()` | (`filters?`) => `Promise`\<`Device`[]\> | Get all devices for the authenticated user. Requires authentication. **Example** `const devices = await client.device.getUserDevices({ status: 'active' });` |
| `registerDevice()` | (`deviceData`) => `Promise`\<`Device`\> | Register a new device for push notifications. If the same push token is registered again, the existing device will be updated. Requires authentication. **Example** `const device = await client.device.registerDevice({ deviceType: 'ios', pushToken: 'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]', bundleId: 'com.nurama.mobile', deviceInfo: { appVersion: '1.0.0', osVersion: '17.0', deviceModel: 'iPhone 15', deviceName: "John's iPhone" } });` |
| `updateDevice()` | (`deviceId`, `updateData`) => `Promise`\<`Device`\> | Update device information. Users can only update their own devices. Requires authentication. **Example** `const device = await client.device.updateDevice('507f1f77bcf86cd799439011', { deviceInfo: { appVersion: '1.1.0' }, status: 'active' });` |
