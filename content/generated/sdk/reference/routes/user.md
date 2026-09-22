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

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="dailytips"></a> `dailyTips?` | \{ `disabled?`: `boolean`; `lastShownDate?`: `string`; \} | Daily-tips carousel state. `disabled` opts out entirely; `lastShownDate` (local `YYYY-MM-DD`) gates the once-per-day rule cumulatively across workspaces and devices. Merged one level deep by the server. |
| `dailyTips.disabled?` | `boolean` | - |
| `dailyTips.lastShownDate?` | `string` | - |
| <a id="dateformat"></a> `dateFormat?` | `"european"` \| `"american"` \| `"iso"` | Preferred date display format. Seeded at registration from the registrant's country (European unless month-first, e.g. the US → american); European is the fallback when unset. User-overridable, incl. ISO (YYYY-MM-DD). |
| <a id="dismissed"></a> `dismissed?` | \{ `todos?`: `string`[]; \} | Per-user UX dismissals — anything the user has explicitly opted out of seeing again. The server merges this object one level deep, so a write to one `dismissed.*` key preserves its siblings. For each inner array the server treats the value as the full list — callers should merge the new id into the existing array before sending. |
| `dismissed.todos?` | `string`[] | - |
| <a id="featureintros"></a> `featureIntros?` | `Record`\<`string`, `string`[]\> | Per-project feature-intro tutorials the user has seen, keyed by project id. Merged one level deep by the server. |
| <a id="hide"></a> `hide?` | `string`[] | - |

***

### UpdateUserData

Fields accepted when updating the current user's profile.

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

Structural shape only — the response carries no display strings. Map
`id` to your own localized title, description and action label; the
API stays language-agnostic.

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
