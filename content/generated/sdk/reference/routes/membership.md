[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/membership

# routes/membership

## Interfaces

### AddRemoveRoleData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="membershipid"></a> `membershipId` | `string` |
| <a id="role"></a> `role` | `string` |

***

### GetLastSeenData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="userids"></a> `userIds` | `string`[] |

***

### GetLastSeenResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="results"></a> `results` | [`LastSeenResult`](#lastseenresult)[] |

***

### GetProjectMembershipParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="limit"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-2) |
| <a id="namesearch"></a> `nameSearch?` | `string` \| `null` | - |
| <a id="page"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-2) |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-2) |

***

### GetWorkspaceMembershipParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="isbillable"></a> `isBillable?` | `boolean` | - |
| <a id="limit-1"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-2) |
| <a id="namesearch-1"></a> `nameSearch?` | `string` \| `null` | - |
| <a id="page-1"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-2) |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-2) |

***

### LastSeenResult

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="lastseen"></a> `lastSeen` | `string` \| `null` |
| <a id="resourceid"></a> `resourceId` | `string` |
| <a id="resourcetype"></a> `resourceType` | `"project"` \| `"workspace"` |
| <a id="userid"></a> `userId` | `string` |

***

### PaginationParams

#### Extended by

- [`GetWorkspaceMembershipParams`](#getworkspacemembershipparams)
- [`GetProjectMembershipParams`](#getprojectmembershipparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="limit-2"></a> `limit?` | `number` |
| <a id="page-2"></a> `page?` | `number` |

***

### SortParams

#### Extended by

- [`GetWorkspaceMembershipParams`](#getworkspacemembershipparams)
- [`GetProjectMembershipParams`](#getprojectmembershipparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-2"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

## Type Aliases

### MembershipResponse

```ts
type MembershipResponse = Membership;
```

***

### MentionableUserResponse

```ts
type MentionableUserResponse = Mentionable;
```

***

### PaginatedMembershipResponse

```ts
type PaginatedMembershipResponse = MembershipReport;
```

## Functions

### default()

```ts
function default(client): {
  addRole: Promise<Membership>;
  deleteMembership: Promise<void>;
  getMyMemberships: Promise<Membership[]>;
  getProjectLastSeen: Promise<GetLastSeenResponse>;
  getProjectMemberships: Promise<MembershipReport>;
  getProjectMentionableUsers: Promise<Mentionable[]>;
  getWorkspaceLastSeen: Promise<GetLastSeenResponse>;
  getWorkspaceMemberships: Promise<MembershipReport>;
  leaveResource: Promise<void>;
  removeRole: Promise<Membership>;
};
```

Defines membership-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the membership-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `addRole()` | (`data`) => `Promise`\<`Membership`\> | Adds a role to an existing membership record. Requires permission to add roles. |
| `deleteMembership()` | (`membershipId`) => `Promise`\<`void`\> | Deletes a specific membership record by its ID. Requires specific permissions to delete others' memberships. |
| `getMyMemberships()` | () => `Promise`\<`Membership`[]\> | Retrieves the membership records for the currently authenticated user. |
| `getProjectLastSeen()` | (`projectId`, `data`) => `Promise`\<[`GetLastSeenResponse`](#getlastseenresponse)\> | Retrieves resource-specific last seen timestamps for multiple users in a project. Requires permission to get project members. |
| `getProjectMemberships()` | (`projectId`, `params?`) => `Promise`\<`MembershipReport`\> | Retrieves memberships associated with a specific project. Requires permission based on user's role in the project/workspace. |
| `getProjectMentionableUsers()` | (`projectId`, `visibility`) => `Promise`\<`Mentionable`[]\> | Retrieves a list of users mentionable within a project based on visibility. Requires permission to get mentionable users. |
| `getWorkspaceLastSeen()` | (`workspaceId`, `data`) => `Promise`\<[`GetLastSeenResponse`](#getlastseenresponse)\> | Retrieves resource-specific last seen timestamps for multiple users in a workspace. Requires permission to get workspace members. |
| `getWorkspaceMemberships()` | (`workspaceId`, `params?`) => `Promise`\<`MembershipReport`\> | Retrieves memberships associated with a specific workspace. Requires permission to get workspace members. |
| `leaveResource()` | (`resourceId`) => `Promise`\<`void`\> | Allows the authenticated user to leave a resource (delete their own membership). Cannot be used to remove ownership roles. |
| `removeRole()` | (`data`) => `Promise`\<`Membership`\> | Removes a role from an existing membership record. Requires permission to remove roles. Cannot remove ownership roles. |
