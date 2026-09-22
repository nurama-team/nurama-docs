[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/user

# routes/user

## Interfaces

### FileData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="checksum"></a> `checksum` | `string` |
| <a id="name"></a> `name` | `string` |
| <a id="sizeinmb"></a> `sizeInMB` | `number` |

***

### PreferencesData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="dailytips"></a> `dailyTips?` | \{ `disabled?`: `boolean`; `lastShownDate?`: `string`; \} |
| `dailyTips.disabled?` | `boolean` |
| `dailyTips.lastShownDate?` | `string` |
| <a id="dateformat"></a> `dateFormat?` | `"european"` \| `"american"` \| `"iso"` |
| <a id="dismissed"></a> `dismissed?` | \{ `todos?`: `string`[]; \} |
| `dismissed.todos?` | `string`[] |
| <a id="featureintros"></a> `featureIntros?` | `Record`\<`string`, `string`[]\> |
| <a id="hide"></a> `hide?` | `string`[] |

***

### UpdateUserData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="allowoauthautolink"></a> `allowOauthAutolink?` | `boolean` |
| <a id="color"></a> `color?` | `string` |
| <a id="company"></a> `company?` | `string` |
| <a id="displayname"></a> `displayName?` | `string` |
| <a id="email"></a> `email?` | `string` |
| <a id="firstname"></a> `firstName?` | `string` |
| <a id="lastname"></a> `lastName?` | `string` |
| <a id="middlename"></a> `middleName?` | `string` |
| <a id="password"></a> `password?` | `string` |
| <a id="username"></a> `userName?` | `string` |

***

### UserTodo

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="dismissible"></a> `dismissible` | `boolean` |
| <a id="id"></a> `id` | `string` |

## Functions

### default()

```ts
function default(client): {
  createAvatar: Promise<any>;
  deleteCurrentUser: Promise<void>;
  getSelf: Promise<PublicUser>;
  getTodos: Promise<{
     todos: UserTodo[];
  }>;
  getUser: Promise<PublicUser>;
  markSeen: Promise<User>;
  unmarkSeen: Promise<User>;
  updateAvatar: Promise<any>;
  updatePreferences: Promise<User>;
  updateSelf: Promise<User>;
};
```

Defines user-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the user-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `createAvatar()` | (`fileData`) => `Promise`\<`any`\> | Creates a new avatar for the user. |
| `deleteCurrentUser()` | () => `Promise`\<`void`\> | Deletes the current user. Requires authentication. |
| `getSelf()` | () => `Promise`\<`PublicUser`\> | Retrieves the current user's profile. Requires authentication. **Throws** If no user ID is found in the token. |
| `getTodos()` | () => `Promise`\<\{ `todos`: [`UserTodo`](#usertodo)[]; \}\> | Get the current user's active site-level Todos for the onboarding drawer. Returns only todos whose completion condition isn't met and (for dismissibles) that the user hasn't opted out of. Server computes from live state — no caching on the server side, so a fresh call always reflects ground truth. |
| `getUser()` | (`userId`) => `Promise`\<`PublicUser`\> | Retrieves the public profile of a specific user. Requires authentication. |
| `markSeen()` | (`element`) => `Promise`\<`User`\> | Record that the current user has seen a one-time UI element (welcome video, tutorial coachmark). Idempotent. Returns the updated user. |
| `unmarkSeen()` | (`elements?`) => `Promise`\<`User`\> | Remove one-time UI elements from the current user's `hasSeen` so they display again. Pass specific element keys, or omit to clear ALL. Returns the updated user. |
| `updateAvatar()` | (`fileData`) => `Promise`\<`any`\> | Updates the user's avatar. |
| `updatePreferences()` | (`preferenceData`) => `Promise`\<`User`\> | Updates the user's preferences. |
| `updateSelf()` | (`updateData`) => `Promise`\<`User`\> | Updates the logged-in user's profile. Requires authentication. At least one field must be provided. |
