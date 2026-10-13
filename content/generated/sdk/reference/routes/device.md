[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/device

# routes/device

## Functions

### default()

```ts
function default(client): {
  deleteDevice: Promise<void>;
  endLiveActivity: Promise<void>;
  getDevice: Promise<Device>;
  getUserDevices: Promise<Device[]>;
  registerDevice: Promise<Device>;
  registerLiveActivity: Promise<LiveActivityRegistration>;
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
| `endLiveActivity()` | (`activityId`) => `Promise`\<`void`\> | Stop following an upload Live Activity (the app ended it). Requires authentication. |
| `getDevice()` | (`deviceId`) => `Promise`\<`Device`\> | Get a specific device by ID. Users can only access their own devices. Requires authentication. **Example** `const device = await client.device.getDevice('507f1f77bcf86cd799439011');` |
| `getUserDevices()` | (`filters?`) => `Promise`\<`Device`[]\> | Get all devices for the authenticated user. Requires authentication. **Example** `const devices = await client.device.getUserDevices({ status: 'active' });` |
| `registerDevice()` | (`deviceData`) => `Promise`\<`Device`\> | Register a new device for push notifications. If the same push token is registered again, the existing device will be updated. Requires authentication. **Example** `const device = await client.device.registerDevice({ deviceType: 'ios', pushToken: 'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]', bundleId: 'com.nurama.mobile', deviceInfo: { appVersion: '1.0.0', osVersion: '17.0', deviceModel: 'iPhone 15', deviceName: "John's iPhone" } });` |
| `registerLiveActivity()` | (`activityId`, `body`) => `Promise`\<`LiveActivityRegistration`\> | Register or refresh an iOS upload Live Activity, so the API carries it on by push through post-processing while the app is suspended. Send the activity's push token and the app's view of the batch; send it again as the batch changes. Requires authentication. |
| `updateDevice()` | (`deviceId`, `updateData`) => `Promise`\<`Device`\> | Update device information. Users can only update their own devices. Requires authentication. **Example** `const device = await client.device.updateDevice('507f1f77bcf86cd799439011', { deviceInfo: { appVersion: '1.1.0' }, status: 'active' });` |
