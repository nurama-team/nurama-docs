[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/auth

# routes/auth

## Interfaces

### ChangePasswordData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="currentpassword"></a> `currentPassword` | `string` |
| <a id="mfatoken"></a> `mfaToken?` | `string` |
| <a id="newpassword"></a> `newPassword` | `string` |

***

### DisableMFAData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="mfatoken-1"></a> `mfaToken` | `string` |

***

### LoginCredentials

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="inviteid"></a> `inviteId?` | `string` | Optional. When signing in to accept an invite, pass the invite id: it only reaches the user through the message sent to that address, so quoting it proves control of the inbox and lifts the email-verification grace block for this login. Credentials are still required. |
| <a id="login"></a> `login` | `string` | - |
| <a id="password"></a> `password` | `string` | - |

***

### LoginRegisterResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tokens"></a> `tokens` | `AuthTokens` |
| <a id="user"></a> `user` | `User` |

***

### RefreshResponse

#### Extends

- `AuthTokens`

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="access"></a> `access` | `Token` | `AuthTokens.access` |
| <a id="refresh"></a> `refresh` | `Token` | `AuthTokens.refresh` |
| <a id="verifymfa"></a> `verifyMfa?` | `Token` | `AuthTokens.verifyMfa` |

***

### RegisterUserData

#### Extends

- `Pick`\<`User`, `"firstName"` \| `"lastName"` \| `"email"`\>

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="email"></a> `email` | `string` | The email address of the user. **Format** email | `Pick.email` |
| <a id="firstname"></a> `firstName` | `string` | The first name of the user. **Min Length** 3 **Max Length** 35 | `Pick.firstName` |
| <a id="lastname"></a> `lastName` | `string` | The last name of the user. **Max Length** 35 | `Pick.lastName` |
| <a id="password-1"></a> `password` | `string` | - | - |

***

### ResetPasswordData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="password-2"></a> `password` | `string` |
| <a id="token"></a> `token` | `string` |

***

### VerifyBackupCodeData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="backupcode"></a> `backupCode` | `string` |

***

### VerifyMFAData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="mfatoken-2"></a> `mfaToken` | `string` |

## Functions

### default()

```ts
function default(client): {
  changePassword: Promise<void>;
  disableMfa: Promise<void>;
  enableMfa: Promise<MFAEnableResponse>;
  exchangeOAuthCode: Promise<OAuthExchangeResponse>;
  forgotPassword: Promise<void>;
  getLinkedOAuthProviders: Promise<LinkedAuthProvider[]>;
  linkOAuthProvider: Promise<LoginRegisterResponse>;
  lockAccount: Promise<void>;
  login: Promise<LoginRegisterResponse>;
  logout: Promise<void>;
  refreshTokens: Promise<RefreshResponse>;
  register: Promise<LoginRegisterResponse>;
  registerGuest: Promise<void>;
  resendVerification: Promise<void>;
  resetPassword: Promise<void>;
  sendVerificationEmail: Promise<void>;
  setPassword: Promise<void>;
  unlinkOAuthProvider: Promise<void>;
  upgradeGuest: Promise<{
     user: User;
  }>;
  verifyBackupCode: Promise<MFAVerifyResponse>;
  verifyEmail: Promise<void>;
  verifyGuest: Promise<LoginRegisterResponse>;
  verifyMfa: Promise<MFAVerifyResponse>;
};
```

Defines authentication-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the authentication methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `changePassword()` | ( `currentPassword`, `newPassword`, `mfaToken?` ) => `Promise`\<`void`\> | Changes the authenticated user's password. Requires current password verification and MFA token if MFA is enabled. All refresh tokens will be invalidated after password change. |
| `disableMfa()` | (`mfaToken`) => `Promise`\<`void`\> | Disables multi-factor authentication for the authenticated user. Requires a current valid MFA token for confirmation. |
| `enableMfa()` | () => `Promise`\<`MFAEnableResponse`\> | Enables multi-factor authentication for the authenticated user. |
| `exchangeOAuthCode()` | (`code`) => `Promise`\<`OAuthExchangeResponse`\> | - |
| `forgotPassword()` | (`email`) => `Promise`\<`void`\> | Forgets a user's password. |
| `getLinkedOAuthProviders()` | () => `Promise`\<`LinkedAuthProvider`[]\> | Gets all OAuth providers linked to the authenticated user's account. |
| `linkOAuthProvider()` | (`provider`) => `Promise`\<[`LoginRegisterResponse`](#loginregisterresponse)\> | Links an OAuth provider to the authenticated user's account. This allows users to sign in with multiple OAuth providers. |
| `lockAccount()` | (`token`) => `Promise`\<`void`\> | Locks a user account using a lock account token. This is used when a user receives a password changed notification for a change they did not initiate, allowing them to immediately secure their account. |
| `login()` | (`credentials`) => `Promise`\<[`LoginRegisterResponse`](#loginregisterresponse)\> | Logs in a user. |
| `logout()` | (`refreshToken`) => `Promise`\<`void`\> | Logs out a user. |
| `refreshTokens()` | (`refreshToken?`) => `Promise`\<[`RefreshResponse`](#refreshresponse)\> | Refreshes user tokens. |
| `register()` | (`userData`) => `Promise`\<[`LoginRegisterResponse`](#loginregisterresponse)\> | Registers a new user. |
| `registerGuest()` | (`data`) => `Promise`\<`void`\> | Registers a guest account for public chat participation. Always returns void (204) regardless of outcome for anti-enumeration. |
| `resendVerification()` | (`email`) => `Promise`\<`void`\> | Public, unauthenticated resend of the verification email keyed by address. For users past the verification grace window who can't log in or call the authed sendVerificationEmail. Always resolves (the server returns 204 regardless of whether the email exists). |
| `resetPassword()` | (`params`) => `Promise`\<`void`\> | Resets a user's password. |
| `sendVerificationEmail()` | () => `Promise`\<`void`\> | Sends a verification email to the authenticated user. |
| `setPassword()` | (`password`, `mfaToken?`) => `Promise`\<`void`\> | Sets a password for an OAuth-only user account. This allows OAuth users to add local authentication as a backup. |
| `unlinkOAuthProvider()` | (`provider`) => `Promise`\<`void`\> | Unlinks an OAuth provider from the authenticated user's account. User must have at least one authentication method remaining (password or another OAuth provider). |
| `upgradeGuest()` | (`data`) => `Promise`\<\{ `user`: `User`; \}\> | Upgrades a guest account to a standard account with a password. Requires the user to be authenticated as a guest. |
| `verifyBackupCode()` | (`backupCode`) => `Promise`\<`MFAVerifyResponse`\> | Verifies an MFA backup code. This is used during login when a user has lost access to their authenticator app. |
| `verifyEmail()` | (`token`) => `Promise`\<`void`\> | Verifies a user's email using the provided token. |
| `verifyGuest()` | (`token`) => `Promise`\<[`LoginRegisterResponse`](#loginregisterresponse)\> | Verifies a guest account using the token from the verification email. Stores auth tokens on success and returns user data. |
| `verifyMfa()` | (`mfaToken`) => `Promise`\<`MFAVerifyResponse`\> | Verifies an MFA token (e.g., TOTP code). This is used both during initial MFA setup and during login challenges. |
