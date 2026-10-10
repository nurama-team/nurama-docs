[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/joinLink

# routes/joinLink

## Interfaces

### GetJoinLinksParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="projectid"></a> `projectId` | `string` |

***

### JoinLinksListResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="results"></a> `results` | `JoinLink`[] |

## Type Aliases

### JoinLinkResponse

```ts
type JoinLinkResponse = JoinLink;
```

## Functions

### default()

```ts
function default(client): {
  approveJoinRequest: Promise<ApproveJoinRequestResponse>;
  createJoinLink: Promise<JoinLink>;
  createResourceBan: Promise<ResourceBan>;
  getJoinByToken: Promise<JoinLinkPreview>;
  getJoinLinks: Promise<JoinLinksListResponse>;
  getJoinRequests: Promise<ListJoinRequestsResponse>;
  getMyJoinRequests: Promise<ListMyJoinRequestsResponse>;
  getResourceBans: Promise<ListBansResponse>;
  joinByToken: Promise<RedeemJoinLinkResult>;
  liftResourceBan: Promise<ResourceBan>;
  rejectJoinRequest: Promise<RejectJoinRequestResponse>;
  rollJoinLink: Promise<JoinLink>;
  updateJoinLink: Promise<JoinLink>;
  updateJoinRequestCooldown: Promise<ProjectJoinRequest>;
};
```

Defines join-link ("invite link") methods for the NuramaClient. A join link
lets people join a project via a shareable URL; management is gated by the
caller's grant authority and the workspace plan's per-mode capability
(enforced server-side).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the join-link methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `approveJoinRequest()` | (`requestId`, `projectId`) => `Promise`\<`ApproveJoinRequestResponse`\> | Approve a request and admit the person. Seats and the link's remaining uses are re-checked here, not when the request was made — a queue outlives the capacity that existed when it was filled, so approval can legitimately fail on a seat limit. |
| `createJoinLink()` | (`data`) => `Promise`\<`JoinLink`\> | Create a join link for a project. |
| `createResourceBan()` | (`data`) => `Promise`\<`ResourceBan`\> | Bar someone, without a request to refuse. Destructive: the ban REMOVES every membership the person holds in its scope, so a `workspace` ban clears them out of every project in it. An owner cannot be barred, and neither can you bar yourself. |
| `getJoinByToken()` | (`token`) => `Promise`\<`JoinLinkPreview`\> | Public preview of a join link by token — no auth — so the join landing page can show "Join <project>" before the visitor signs in. |
| `getJoinLinks()` | (`params`) => `Promise`\<[`JoinLinksListResponse`](#joinlinkslistresponse)\> | List a project's join links. |
| `getJoinRequests()` | (`params`) => `Promise`\<`ListJoinRequestsResponse`\> | The queue of people waiting on a decision for this project. |
| `getMyJoinRequests()` | () => `Promise`\<`ListMyJoinRequestsResponse`\> | The caller's own requests still waiting on a decision. Needs no `projectId`: it is scoped server-side to the caller, who is not a member of the projects they are waiting on and so cannot read those projects' queues. |
| `getResourceBans()` | (`params`) => `Promise`\<`ListBansResponse`\> | People barred from this project, newest first. |
| `joinByToken()` | (`token`) => `Promise`\<`RedeemJoinLinkResult`\> | Redeem a join link for the authenticated user. |
| `liftResourceBan()` | (`banId`) => `Promise`\<`ResourceBan`\> | Lift a ban. It does not restore any membership the ban removed. |
| `rejectJoinRequest()` | (`requestId`, `data`) => `Promise`\<`RejectJoinRequestResponse`\> | Reject a request, optionally barring the person. Passing `ban` is destructive beyond the refusal: a ban REMOVES an existing membership, so it can take away access the person already had in scope. It is a separate field for that reason, never implied by the rejection. |
| `rollJoinLink()` | (`linkId`, `expiresAt?`) => `Promise`\<`JoinLink`\> | Rotate a link's token, invalidating the old URL. Optionally reset expiry. Existing memberships are untouched. |
| `updateJoinLink()` | (`linkId`, `data`) => `Promise`\<`JoinLink`\> | Update a join link's settings (role, mode, domains, expiry, enable/disable). |
| `updateJoinRequestCooldown()` | (`requestId`, `data`) => `Promise`\<`ProjectJoinRequest`\> | Change or lift the cooldown on a rejected request. Only a rejected request has one; `reapplyAfter: null` lifts it, letting the person ask again straight away. A barred person is refused — the ban already blocks every path, so lifting that is the action that matters. |
