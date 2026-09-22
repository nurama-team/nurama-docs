[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/supportTicket

# routes/supportTicket

## Interfaces

### CreateSupportTicketRequest

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="aigenerated"></a> `aiGenerated?` | `boolean` | `true` when the ticket was drafted by Nu via the `create_support_ticket` chat tool and submitted by the user from the pre-populated SupportTicketCreateModal. Stamped onto the `SupportTicket` row for ops analytics; the FE sets this when the modal was opened by an AI-draft CTA. |
| <a id="body"></a> `body` | `string` | - |
| <a id="deviceinfo"></a> `deviceInfo?` | `Record`\<`string`, `unknown`\> | Browser/app/device snapshot collected at submit time. |
| <a id="scopeid"></a> `scopeId?` | `string` | Required for workspace/project scope; ignored for user scope. |
| <a id="scopetype"></a> `scopeType` | [`SupportTicketScope`](#supportticketscope) | - |
| <a id="subject"></a> `subject` | `string` | - |

***

### SupportTicket

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="aigenerated-1"></a> `aiGenerated` | `boolean` | True for tickets drafted by Nu's `create_support_ticket` tool. |
| <a id="chatid"></a> `chatId` | `string` | - |
| <a id="createdat"></a> `createdAt` | `string` | - |
| <a id="creatorid"></a> `creatorId` | `string` | - |
| <a id="deviceinfo-1"></a> `deviceInfo` | `Record`\<`string`, `unknown`\> | - |
| <a id="id"></a> `id` | `string` | - |
| <a id="priority"></a> `priority` | `string` | - |
| <a id="scopeid-1"></a> `scopeId` | `string` \| `null` | - |
| <a id="scopetype-1"></a> `scopeType` | [`SupportTicketScope`](#supportticketscope) | - |
| <a id="status"></a> `status` | [`SupportTicketStatus`](#supportticketstatus-1) | - |
| <a id="subject-1"></a> `subject` | `string` | - |
| <a id="ticketnumber"></a> `ticketNumber` | `number` | - |
| <a id="updatedat"></a> `updatedAt` | `string` | - |

***

### SupportTicketListParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="limit"></a> `limit?` | `number` |
| <a id="page"></a> `page?` | `number` |
| <a id="status-1"></a> `status?` | [`SupportTicketStatus`](#supportticketstatus-1) |

***

### SupportTicketListResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="limit-1"></a> `limit` | `number` |
| <a id="page-1"></a> `page` | `number` |
| <a id="results"></a> `results` | [`SupportTicket`](#supportticket)[] |
| <a id="totalpages"></a> `totalPages` | `number` |
| <a id="totalresults"></a> `totalResults` | `number` |

***

### SupportTicketScopeOptions

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="projects"></a> `projects` | \{ `color?`: `string` \| `null`; `id`: `string`; `logo?`: [`SupportTicketScopeLogo`](#supportticketscopelogo); `name`: `string`; `slug`: `string` \| `null`; `workspaceId`: `string`; \}[] |
| <a id="workspaces"></a> `workspaces` | \{ `color?`: `string` \| `null`; `id`: `string`; `logo?`: [`SupportTicketScopeLogo`](#supportticketscopelogo); `name`: `string`; `slug`: `string`; \}[] |

## Type Aliases

### SupportTicketScope

```ts
type SupportTicketScope = "user" | "workspace" | "project";
```

***

### SupportTicketScopeLogo

```ts
type SupportTicketScopeLogo = 
  | {
[key: string]: unknown;
  files?: unknown[];
}
  | null;
```

A logo asset (thumbnail-ready) attached to a scope for avatar rendering.

***

### SupportTicketStatus

```ts
type SupportTicketStatus = "open" | "pending" | "resolved" | "closed";
```

## Functions

### default()

```ts
function default(client): {
  createSupportTicket: Promise<SupportTicket>;
  getSupportTicket: Promise<SupportTicket>;
  getSupportTicketScopeOptions: Promise<SupportTicketScopeOptions>;
  listSupportTickets: Promise<SupportTicketListResponse>;
};
```

Support tickets. A ticket carries the metadata + a backing Chat thread; the
conversation itself is sent/read through the regular chat endpoints:

  - send: `nuramaClient.chat.createMessage(ticket.chatId, …)`
  - read: `nuramaClient.chat.getMessages(ticket.chatId, …)`

Nurama customer service replies (as the support persona) from the admin site.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `createSupportTicket()` | (`data`) => `Promise`\<[`SupportTicket`](#supportticket)\> | Create a ticket. The opening message body becomes the first thread entry. |
| `getSupportTicket()` | (`ticketId`) => `Promise`\<[`SupportTicket`](#supportticket)\> | - |
| `getSupportTicketScopeOptions()` | () => `Promise`\<[`SupportTicketScopeOptions`](#supportticketscopeoptions)\> | Workspaces/projects the caller may scope a new ticket to. |
| `listSupportTickets()` | (`params?`) => `Promise`\<[`SupportTicketListResponse`](#supportticketlistresponse)\> | List the caller's own tickets + (for resource admins) tickets in their scope. |
