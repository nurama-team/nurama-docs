[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/invite

# routes/invite

## Interfaces

### GetInvitesToResourceParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="status"></a> `status?` | [`InviteStatus`](#invitestatus) \| [`InviteStatus`](#invitestatus)[] |

***

### GetUsersInvitesParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="invitetype"></a> `inviteType?` | `"all"` \| `"inviter"` \| `"invitee"` |
| <a id="status-1"></a> `status?` | [`InviteStatus`](#invitestatus) \| [`InviteStatus`](#invitestatus)[] |

***

### InviteUserToResourceData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="additionalroles"></a> `additionalRoles?` | `string`[] | Optional workspace-level roles granted alongside the primary role (subset of the backend `additionalRoles`, e.g. workspaceChatMember, workspaceAdmin). Applied to the workspace membership on accept. |
| <a id="inviteeemail"></a> `inviteeEmail` | `string` | - |
| <a id="resourceid"></a> `resourceId` | `string` | - |
| <a id="resourcetype"></a> `resourceType` | `string` | - |
| <a id="role"></a> `role` | `string` | - |

## Type Aliases

### AcceptInviteResponse

```ts
type AcceptInviteResponse = {
  invite: Invite;
  membership: Membership;
};
```

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="invite"></a> `invite` | `Invite` |
| <a id="membership"></a> `membership` | `Membership` |

***

### InviteResponse

```ts
type InviteResponse = Invite;
```

***

### InviteStatus

```ts
type InviteStatus = "active" | "canceled" | "accepted";
```

***

### PaginatedInvitesResponse

```ts
type PaginatedInvitesResponse = 
  | PaginatedResponse<Invite>
  | {
  invitee: Invite[];
  inviter: Invite[];
}
  | Invite[];
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
  acceptInvite: Promise<AcceptInviteResponse>;
  cancelInvite: Promise<Invite>;
  getInviteById: Promise<Invite>;
  getInvites: Promise<PaginatedInvitesResponse>;
  getInvitesForResource: Promise<Invite[]>;
  inviteUser: Promise<Invite>;
  resendInvite: Promise<Invite>;
};
```

Defines invite-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the invite-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `acceptInvite()` | (`inviteId`) => `Promise`\<[`AcceptInviteResponse`](#acceptinviteresponse)\> | Accept an invite for the authenticated user. Creates the membership. |
| `cancelInvite()` | (`inviteId`) => `Promise`\<`Invite`\> | Revoke a pending invite. |
| `getInviteById()` | (`inviteId`) => `Promise`\<`Invite`\> | Look up an invite by id. Public — no auth — so the recipient can preview the invite (target resource, role, inviter) before signing up or logging in. |
| `getInvites()` | (`params?`) => `Promise`\<[`PaginatedInvitesResponse`](#paginatedinvitesresponse)\> | List invites the current user has issued (pending, accepted, expired). |
| `getInvitesForResource()` | (`resourceId`, `params?`) => `Promise`\<`Invite`[]\> | List pending invites attached to a workspace or project resource. |
| `inviteUser()` | (`data`) => `Promise`\<`Invite`\> | Invite a user (by email) to a workspace or project at a given role. Triggers an invitation email; the recipient accepts via the link. |
| `resendInvite()` | (`inviteId`) => `Promise`\<`Invite`\> | Re-send a pending invite email (does not extend or reissue the token). |
