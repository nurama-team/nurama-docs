[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/userFeed

# routes/userFeed

## Functions

### default()

```ts
function default(client): {
  dismissAll: Promise<{
     dismissed: number;
  }>;
  getFeed: Promise<CursorPaginatedUserFeed>;
  getReadState: Promise<ReadState>;
  getSummary: Promise<UserFeedSummary>;
  markCaughtUp: Promise<ReadState>;
  setEntryState: Promise<UserFeedEntry>;
};
```

Defines the methods for the caller's own cross-project feed: project
activity from every project they can read, and the things waiting on them.
Every call is scoped to the signed-in user.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the user feed methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `dismissAll()` | (`before?`) => `Promise`\<\{ `dismissed`: `number`; \}\> | Clears every open action item up to `before` (epoch ms) — the newest one you had loaded — so one that arrived since stays. Omit it to clear everything open now. |
| `getFeed()` | (`params?`) => `Promise`\<`CursorPaginatedUserFeed`\> | Gets one page of your feed, most recent first. Pass `category` for only project activity or only action items; dismissed items are left out unless `states` asks for them. |
| `getReadState()` | () => `Promise`\<`ReadState`\> | Gets your reading position in your feed's project activity. |
| `getSummary()` | () => `Promise`\<`UserFeedSummary`\> | Gets every badge the app shows: open action items, project activity since you last caught up, and that activity broken down by project in `byProject` — one row per project with something new, for the badge on its icon. The two totals stop at 100. The totals and `byProject` move independently: the totals are measured against your feed-wide marker, each `byProject` row against that project's own. So catching up in the feed does not clear project badges, and reading one project does not clear the feed's own count. |
| `markCaughtUp()` | (`lastReadAt?`) => `Promise`\<`ReadState`\> | Marks your feed's project activity as caught up. Pass `lastReadAt` (epoch ms) to catch up to the newest card you had loaded; omit it to catch up to now. The marker only moves forward. |
| `setEntryState()` | (`entryId`, `state`) => `Promise`\<`UserFeedEntry`\> | Clears one of your action items (`dismissed`), or brings a cleared one back (`open`). |
