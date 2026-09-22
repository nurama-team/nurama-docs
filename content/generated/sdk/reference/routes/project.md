[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/project

# routes/project

## Interfaces

### AddItemsToPublicFileSystemData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="itempaths"></a> `itemPaths` | `string`[] |

***

### AddItemsToSubmissionData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath"></a> `destinationPath?` | `string` |
| <a id="itempaths-1"></a> `itemPaths` | `string`[] |

***

### CopyItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-1"></a> `destinationPath` | `string` |
| <a id="itempaths-2"></a> `itemPaths` | `string`[] |

***

### CopyPublicItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-2"></a> `destinationPath` | `string` |
| <a id="itempaths-3"></a> `itemPaths` | `string`[] |

***

### CopySubmissionItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-3"></a> `destinationPath` | `string` |
| <a id="itempaths-4"></a> `itemPaths` | `string`[] |

***

### CreateFolderData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="basepath"></a> `basePath?` | `string` |
| <a id="color"></a> `color?` | `string` |
| <a id="name"></a> `name` | `string` |

***

### CreateProjectData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="name-1"></a> `name` | `string` |
| <a id="workspaceid"></a> `workspaceId` | `string` |

***

### CreatePublicFileSystemData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="allowanonymouscomments"></a> `allowAnonymousComments?` | `boolean` | Allow unauthenticated visitors to comment with just a display name + color. |
| <a id="description"></a> `description?` | `string` | - |
| <a id="hidecreators"></a> `hideCreators?` | `boolean` | Repress asset/folder creators + the "Shared by" user in the external public API output. |
| <a id="itempaths-5"></a> `itemPaths?` | `string`[] | - |
| <a id="releaseimmediately"></a> `releaseImmediately?` | `boolean` | When false, the release is staged as `unreleased` — externally inaccessible until it is released via `releasePublicFileSystem`. Defaults to true (goes live immediately). |
| <a id="title"></a> `title` | `string` | - |
| <a id="validity"></a> `validity?` | `number` | - |

***

### CreateSubmissionData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="description-1"></a> `description?` | `string` | - |
| <a id="itempaths-6"></a> `itemPaths?` | `string`[] | - |
| <a id="releaseimmediately-1"></a> `releaseImmediately?` | `boolean` | When false, the submission is staged as `unreleased` — hidden from reviewers until it is released via `releaseSubmission`. Defaults to true (goes live immediately). |
| <a id="subject"></a> `subject?` | `string` | - |
| <a id="version"></a> `version?` | `string` | - |

***

### CreateSubmissionFolderData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="basepath-1"></a> `basePath?` | `string` |
| <a id="color-1"></a> `color?` | `string` |
| <a id="name-2"></a> `name` | `string` |

***

### DateRangeParams

#### Extended by

- [`GetItemsAtPathParams`](#getitemsatpathparams)
- [`ListAssetsParams`](#listassetsparams)
- [`ListFoldersParams`](#listfoldersparams)
- [`ListSubmissionsParams`](#listsubmissionsparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="createdafter"></a> `createdAfter?` | `string` \| `number` |
| <a id="createdbefore"></a> `createdBefore?` | `string` \| `number` |

***

### DeleteItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="itempaths-7"></a> `itemPaths` | `string`[] |

***

### DeletePublicItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="itempaths-8"></a> `itemPaths` | `string`[] |

***

### DeleteSubmissionItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="itempaths-9"></a> `itemPaths` | `string`[] |

***

### FileUploadData

#### Extended by

- [`LogoUploadData`](#logouploaddata)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="basepath-2"></a> `basePath?` | `string` |
| <a id="checksum"></a> `checksum` | `string` |
| <a id="id"></a> `id` | `number` |
| <a id="name-3"></a> `name` | `string` |
| <a id="sizeinmb"></a> `sizeInMB` | `number` |

***

### GetChatParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="messages"></a> `messages?` | `number` |
| <a id="replies"></a> `replies?` | `number` |

***

### GetHighlightedMessagesParams

#### Extends

- [`SortParams`](#sortparams).[`PaginationParams`](#paginationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-8) |
| <a id="includecounts"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-8) |
| <a id="includecursorrecord"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-8) |
| <a id="limit"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-8) |
| <a id="page"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-8) |
| <a id="paginate"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-8) |
| <a id="paginatereverse"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-8) |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-7) |
| <a id="startat"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-8) |

***

### GetItemsAtPathParams

#### Extends

- [`SortParams`](#sortparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="createdafter-1"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-1"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="creatorid"></a> `creatorId?` | `string` | - |
| <a id="cursor-1"></a> `cursor?` | `string` | - |
| <a id="includecounts-1"></a> `includeCounts?` | `boolean` | - |
| <a id="includecursorrecord-1"></a> `includeCursorRecord?` | `boolean` | - |
| <a id="includestartatrecord"></a> `includeStartAtRecord?` | `boolean` | - |
| <a id="limit-1"></a> `limit?` | `number` | - |
| <a id="mediatypes"></a> `mediaTypes?` | (`"folder"` \| `"image"` \| `"video"`)[] | - |
| <a id="namesearch"></a> `nameSearch?` | `string` | - |
| <a id="page-1"></a> `page?` | `number` | - |
| <a id="paginate-1"></a> `paginate?` | `"cursor"` \| `"index"` | - |
| <a id="paginatereverse-1"></a> `paginateReverse?` | `boolean` | - |
| <a id="resourceids"></a> `resourceIds?` | `string`[] | - |
| <a id="resourcestatus"></a> `resourceStatus?` | `"active"` \| `"pendingDelete"` | - |
| <a id="resourcetags"></a> `resourceTags?` | `string`[] | - |
| <a id="resourcetype"></a> `resourceType?` | `"asset"` \| `"folder"` | - |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-7) |
| <a id="startat-1"></a> `startAt?` | `string` | - |

***

### GetPublicChatMessagesParams

#### Extends

- [`PaginationParams`](#paginationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor-2"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-8) |
| <a id="includecounts-2"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-8) |
| <a id="includecursorrecord-2"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-8) |
| <a id="limit-2"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-8) |
| <a id="page-2"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-8) |
| <a id="paginate-2"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-8) |
| <a id="paginatereverse-2"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-8) |
| <a id="replylimit"></a> `replyLimit?` | `number` | - |
| <a id="startat-2"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-8) |

***

### GetSubmissionParams

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="chatmessagelimit"></a> `chatMessageLimit?` | `number` |
| <a id="chatmessagesort"></a> `chatMessageSort?` | \{ `createdAt?`: `1` \| `-1`; `id?`: `1` \| `-1`; `updatedAt?`: `1` \| `-1`; \} |
| `chatMessageSort.createdAt?` | `1` \| `-1` |
| `chatMessageSort.id?` | `1` \| `-1` |
| `chatMessageSort.updatedAt?` | `1` \| `-1` |
| <a id="chatreplylimit"></a> `chatReplyLimit?` | `number` |
| <a id="chatreplysort"></a> `chatReplySort?` | \{ `createdAt?`: `1` \| `-1`; `id?`: `1` \| `-1`; `updatedAt?`: `1` \| `-1`; \} |
| `chatReplySort.createdAt?` | `1` \| `-1` |
| `chatReplySort.id?` | `1` \| `-1` |
| `chatReplySort.updatedAt?` | `1` \| `-1` |

***

### ListAssetsParams

#### Extends

- [`SortParams`](#sortparams).[`PaginationParams`](#paginationparams).[`DateRangeParams`](#daterangeparams)

#### Extended by

- [`ListFeedParams`](#listfeedparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="createdafter-2"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-2"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-3"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-8) |
| <a id="folderid"></a> `folderId?` | `string` | - |
| <a id="ignorefolder"></a> `ignoreFolder?` | `boolean` | - |
| <a id="includechats"></a> `includeChats?` | `boolean` | - |
| <a id="includecounts-3"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-8) |
| <a id="includecursorrecord-3"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-8) |
| <a id="limit-3"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-8) |
| <a id="mediatypes-1"></a> `mediaTypes?` | `string`[] | - |
| <a id="page-3"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-8) |
| <a id="paginate-3"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-8) |
| <a id="paginatereverse-3"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-8) |
| <a id="sort-2"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-7) |
| <a id="startat-3"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-8) |

***

### ListFeedParams

#### Extends

- [`ListAssetsParams`](#listassetsparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="chatmessagelimit-1"></a> `chatMessageLimit?` | `number` | - |
| <a id="chatmessagesort-1"></a> `chatMessageSort?` | `Record`\<`string`, `-1` \| `1`\> | - |
| <a id="chatreplylimit-1"></a> `chatReplyLimit?` | `number` | - |
| <a id="chatreplysort-1"></a> `chatReplySort?` | `Record`\<`string`, `-1` \| `1`\> | - |
| <a id="createdafter-3"></a> `createdAfter?` | `string` \| `number` | [`ListAssetsParams`](#listassetsparams).[`createdAfter`](#createdafter-2) |
| <a id="createdbefore-3"></a> `createdBefore?` | `string` \| `number` | [`ListAssetsParams`](#listassetsparams).[`createdBefore`](#createdbefore-2) |
| <a id="cursor-4"></a> `cursor?` | `string` | [`ListAssetsParams`](#listassetsparams).[`cursor`](#cursor-3) |
| <a id="folderid-1"></a> `folderId?` | `string` | [`ListAssetsParams`](#listassetsparams).[`folderId`](#folderid) |
| <a id="followedchatsonly"></a> `followedChatsOnly?` | `boolean` | - |
| <a id="hideifnochatmessages"></a> `hideIfNoChatMessages?` | `boolean` | - |
| <a id="ignorefolder-1"></a> `ignoreFolder?` | `boolean` | [`ListAssetsParams`](#listassetsparams).[`ignoreFolder`](#ignorefolder) |
| <a id="includechats-1"></a> `includeChats?` | `boolean` | [`ListAssetsParams`](#listassetsparams).[`includeChats`](#includechats) |
| <a id="includecounts-4"></a> `includeCounts?` | `boolean` | [`ListAssetsParams`](#listassetsparams).[`includeCounts`](#includecounts-3) |
| <a id="includecursorrecord-4"></a> `includeCursorRecord?` | `boolean` | [`ListAssetsParams`](#listassetsparams).[`includeCursorRecord`](#includecursorrecord-3) |
| <a id="limit-4"></a> `limit?` | `number` | [`ListAssetsParams`](#listassetsparams).[`limit`](#limit-3) |
| <a id="mediatypes-2"></a> `mediaTypes?` | `string`[] | [`ListAssetsParams`](#listassetsparams).[`mediaTypes`](#mediatypes-1) |
| <a id="page-4"></a> `page?` | `number` | [`ListAssetsParams`](#listassetsparams).[`page`](#page-3) |
| <a id="paginate-4"></a> `paginate?` | `"cursor"` \| `"index"` | [`ListAssetsParams`](#listassetsparams).[`paginate`](#paginate-3) |
| <a id="paginatereverse-4"></a> `paginateReverse?` | `boolean` | [`ListAssetsParams`](#listassetsparams).[`paginateReverse`](#paginatereverse-3) |
| <a id="sort-3"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`ListAssetsParams`](#listassetsparams).[`sort`](#sort-2) |
| <a id="startat-4"></a> `startAt?` | `string` | [`ListAssetsParams`](#listassetsparams).[`startAt`](#startat-3) |

***

### ListFoldersParams

#### Extends

- [`SortParams`](#sortparams).[`PaginationParams`](#paginationparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="createdafter-4"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-4"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-5"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-8) |
| <a id="includecounts-5"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-8) |
| <a id="includecursorrecord-5"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-8) |
| <a id="limit-5"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-8) |
| <a id="mediatypes-3"></a> `mediaTypes?` | `string`[] | - |
| <a id="page-5"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-8) |
| <a id="paginate-5"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-8) |
| <a id="paginatereverse-5"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-8) |
| <a id="sort-4"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-7) |
| <a id="startat-5"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-8) |

***

### ListPublicFileSystemsParams

#### Extends

- [`SortParams`](#sortparams).[`PaginationParams`](#paginationparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="creatorid-1"></a> `creatorId?` | `string` | - |
| <a id="cursor-6"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-8) |
| <a id="includecounts-6"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-8) |
| <a id="includecursorrecord-6"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-8) |
| <a id="limit-6"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-8) |
| <a id="page-6"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-8) |
| <a id="paginate-6"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-8) |
| <a id="paginatereverse-6"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-8) |
| <a id="search"></a> `search?` | `string` | - |
| <a id="sort-5"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-7) |
| <a id="startat-6"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-8) |
| <a id="status"></a> `status?` | \| [`PublicFileSystemStatus`](#publicfilesystemstatus) \| [`PublicFileSystemStatus`](#publicfilesystemstatus)[] | - |

***

### ListSubmissionsParams

#### Extends

- [`SortParams`](#sortparams).[`PaginationParams`](#paginationparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="createdafter-5"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-5"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-7"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-8) |
| <a id="includecounts-7"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-8) |
| <a id="includecursorrecord-7"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-8) |
| <a id="limit-7"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-8) |
| <a id="page-7"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-8) |
| <a id="paginate-7"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-8) |
| <a id="paginatereverse-7"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-8) |
| <a id="search-1"></a> `search?` | `string` | - |
| <a id="sort-6"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-7) |
| <a id="startat-7"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-8) |

***

### LogoUploadData

#### Extends

- [`FileUploadData`](#fileuploaddata)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="basepath-3"></a> `basePath?` | `string` | [`FileUploadData`](#fileuploaddata).[`basePath`](#basepath-2) |
| <a id="checksum-1"></a> `checksum` | `string` | [`FileUploadData`](#fileuploaddata).[`checksum`](#checksum) |
| <a id="id-1"></a> `id` | `number` | [`FileUploadData`](#fileuploaddata).[`id`](#id) |
| <a id="name-4"></a> `name` | `string` | [`FileUploadData`](#fileuploaddata).[`name`](#name-3) |
| <a id="sizeinmb-1"></a> `sizeInMB` | `number` | [`FileUploadData`](#fileuploaddata).[`sizeInMB`](#sizeinmb) |

***

### MoveItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-4"></a> `destinationPath` | `string` |
| <a id="itempaths-10"></a> `itemPaths` | `string`[] |

***

### MoveItemsResult

A move into a virtual folder is not a move. `Public/` and `Submission/`
copy the items into that collection; `Review/` publishes them. Both leave
the sources in place, and both report through the extra fields below.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` | Items copied, or published when `published` is true. |
| <a id="errors"></a> `errors?` | \{ `data?`: `unknown`; `message?`: `string`; `type`: `string`; \}[] | Items the publish rejected. Empty or absent when everything went through. |
| <a id="published"></a> `published?` | `boolean` | Set when the destination was `Review/`, so the items were published. |
| <a id="virtualdestination"></a> `virtualDestination?` | `boolean` | Set when the destination resolved to a virtual folder. |

***

### MovePublicItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-5"></a> `destinationPath` | `string` |
| <a id="itempaths-11"></a> `itemPaths` | `string`[] |

***

### MoveSubmissionItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-6"></a> `destinationPath` | `string` |
| <a id="itempaths-12"></a> `itemPaths` | `string`[] |

***

### PaginationParams

#### Extended by

- [`ListAssetsParams`](#listassetsparams)
- [`ListFoldersParams`](#listfoldersparams)
- [`ListSubmissionsParams`](#listsubmissionsparams)
- [`ListPublicFileSystemsParams`](#listpublicfilesystemsparams)
- [`GetHighlightedMessagesParams`](#gethighlightedmessagesparams)
- [`GetPublicChatMessagesParams`](#getpublicchatmessagesparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="cursor-8"></a> `cursor?` | `string` |
| <a id="includecounts-8"></a> `includeCounts?` | `boolean` |
| <a id="includecursorrecord-8"></a> `includeCursorRecord?` | `boolean` |
| <a id="limit-8"></a> `limit?` | `number` |
| <a id="page-8"></a> `page?` | `number` |
| <a id="paginate-8"></a> `paginate?` | `"cursor"` \| `"index"` |
| <a id="paginatereverse-8"></a> `paginateReverse?` | `boolean` |
| <a id="startat-8"></a> `startAt?` | `string` |

***

### ProjectFileUploadBody

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="destinationpath-7"></a> `destinationPath?` | `string` |
| <a id="files"></a> `files` | [`FileUploadData`](#fileuploaddata)[] |

***

### ProjectTopAccessActivityResponse

Defines project-related methods for the NuramaClient.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="eventtype"></a> `eventType` | `string` |
| <a id="from"></a> `from` | `string` |
| <a id="range"></a> `range` | `string` |
| <a id="results"></a> `results` | \{ `assetId`: `string`; `count`: `number`; \}[] |
| <a id="to"></a> `to` | `string` |

***

### PublicAuditAssetResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="createdat"></a> `createdAt` | `string` |
| <a id="creator"></a> `creator` | \| \{ `avatar?`: `any`; `color?`: `string`; `displayName?`: `string`; `firstName?`: `string`; `id`: `string`; `lastName?`: `string`; \} \| `null` |
| <a id="everpublic"></a> `everPublic` | `boolean` |
| <a id="hasactivepubliclink"></a> `hasActivePublicLink` | `boolean` |
| <a id="id-2"></a> `id` | `string` |
| <a id="mediatype"></a> `mediaType` | `string` |
| <a id="name-5"></a> `name` | `string` |
| <a id="publicfilesystems"></a> `publicFileSystems` | \{ `id`: `string`; `status`: `string`; `title`: `string`; \}[] |
| <a id="publiclinkcount"></a> `publicLinkCount` | `number` |
| <a id="thumbnail"></a> `thumbnail` | \| \{ `keyPath`: `string`; \} \| `null` |

***

### PublicFileSystemResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="allowanonymouscomments-1"></a> `allowAnonymousComments?` | `boolean` |
| <a id="createdat-1"></a> `createdAt` | `string` |
| <a id="description-2"></a> `description?` | `string` |
| <a id="expiresat"></a> `expiresAt` | `string` |
| <a id="hidecreators-1"></a> `hideCreators?` | `boolean` |
| <a id="id-3"></a> `id` | `string` |
| <a id="itempaths-13"></a> `itemPaths` | `string`[] |
| <a id="projectid"></a> `projectId` | `string` |
| <a id="title-1"></a> `title` | `string` |
| <a id="token"></a> `token` | `string` |
| <a id="updatedat"></a> `updatedAt` | `string` |

***

### PublishItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="basepath-4"></a> `basePath?` | `string` |
| <a id="resourceids-1"></a> `resourceIds` | `string`[] |
| <a id="sendemailnotification"></a> `sendEmailNotification?` | `boolean` |

***

### SortParams

#### Extended by

- [`GetItemsAtPathParams`](#getitemsatpathparams)
- [`ListAssetsParams`](#listassetsparams)
- [`ListFoldersParams`](#listfoldersparams)
- [`ListSubmissionsParams`](#listsubmissionsparams)
- [`ListPublicFileSystemsParams`](#listpublicfilesystemsparams)
- [`GetHighlightedMessagesParams`](#gethighlightedmessagesparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-7"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### TagSubmissionData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="tagid"></a> `tagId` | `string` |

***

### UnpublishItemsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="resourceids-2"></a> `resourceIds` | `string`[] |

***

### UpdateProjectData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="description-3"></a> `description?` | `string` |
| <a id="name-6"></a> `name?` | `string` |
| <a id="updateslug"></a> `updateSlug?` | `boolean` |

***

### UpdatePublicFileSystemData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="allowanonymouscomments-2"></a> `allowAnonymousComments?` | `boolean` | Allow unauthenticated visitors to comment with just a display name + color. |
| <a id="description-4"></a> `description?` | `string` | - |
| <a id="hidecreators-2"></a> `hideCreators?` | `boolean` | Repress asset/folder creators + the "Shared by" user in the external public API output. |
| <a id="status-1"></a> `status?` | `"active"` \| `"expired"` \| `"disabled"` \| `"error"` \| `"unreleased"` | - |
| <a id="title-2"></a> `title?` | `string` | - |
| <a id="validity-1"></a> `validity?` | `number` | - |

***

### UpdateSubmissionData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="description-5"></a> `description?` | `string` |
| <a id="subject-1"></a> `subject?` | `string` |
| <a id="version-1"></a> `version?` | `string` |

## Type Aliases

### AssetResponse

```ts
type AssetResponse = Asset;
```

***

### ChatResponse

```ts
type ChatResponse = Chat;
```

***

### FolderResponse

```ts
type FolderResponse = Folder;
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

***

### ProjectResponse

```ts
type ProjectResponse = Project;
```

***

### PublicFileSystemStatus

```ts
type PublicFileSystemStatus = "active" | "expired" | "disabled" | "unreleased";
```

***

### SubmissionResponse

```ts
type SubmissionResponse = ChatSubmission;
```

## Functions

### default()

```ts
function default(client): {
  addItemsToPublicFileSystem: Promise<PublicFileSystemResponse>;
  addItemsToSubmission: Promise<ChatSubmission>;
  copyItemsToPath: Promise<{
     count: number;
  }>;
  copyPublicItemsAtPath: Promise<{
     count: number;
  }>;
  copySubmissionItems: Promise<{
     count: number;
  }>;
  createAssets: Promise<any[]>;
  createFolder: Promise<Folder>;
  createLogo: Promise<any>;
  createProject: Promise<Project>;
  createProjectPublicAssetChatMessage: Promise<CreatePublicAssetChatMessageResponse>;
  createProjectPublicChatMessage: Promise<ChatMessage>;
  createProjectPublicTopicChatMessage: Promise<CreatePublicAssetChatMessageResponse>;
  createPublicFileSystem: Promise<PublicFileSystemResponse>;
  createPublicFolder: Promise<Folder>;
  createSubmission: Promise<ChatSubmission>;
  createSubmissionFolder: Promise<Folder>;
  deleteItemsAtPath: Promise<{
     count: number;
  }>;
  deleteProject: Promise<void>;
  deletePublicFileSystem: Promise<PublicFileSystemResponse>;
  deletePublicItemsAtPath: Promise<{
     count: number;
  }>;
  deleteSubmissionItems: Promise<{
     count: number;
  }>;
  getAssets: Promise<PaginatedResponse<Asset>>;
  getFolders: Promise<PaginatedResponse<Folder>>;
  getHighlightedMessages: Promise<PaginatedResponse<ChatMessage>>;
  getHomeFeed: Promise<PaginatedResponse<Asset>>;
  getItemsAtPath: Promise<PaginatedResponse<any>>;
  getProject: Promise<Project>;
  getProjectChat: Promise<Chat>;
  getProjectPublicAsset: Promise<PublicAssetResponse>;
  getProjectPublicChat: Promise<any>;
  getProjectPublicChatMessages: Promise<PublicChatMessagesResponse>;
  getProjects: Promise<Project[]>;
  getPublicAudit: Promise<PaginatedResponse<PublicAuditAssetResponse>>;
  getPublicFileSystem: Promise<PublicFileSystemResponse>;
  getPublicFileSystems: Promise<PaginatedResponse<PublicFileSystemResponse>>;
  getPublicItemsAtPath: Promise<PaginatedResponse<any>>;
  getSubmission: Promise<ChatSubmission>;
  getSubmissionItems: Promise<PaginatedResponse<any>>;
  getSubmissions: Promise<PaginatedResponse<ChatSubmission>>;
  getTopAccessActivity: Promise<ProjectTopAccessActivityResponse>;
  moveItemsToPath: Promise<MoveItemsResult>;
  movePublicItemsAtPath: Promise<{
     count: number;
  }>;
  moveSubmissionItems: Promise<{
     count: number;
  }>;
  previewDeleteItemsAtPath: Promise<DeleteImpact>;
  publishItems: Promise<any>;
  releasePublicFileSystem: Promise<PublicFileSystemResponse>;
  releaseSubmission: Promise<ChatSubmission>;
  releaseSubmissionUpdate: Promise<ChatSubmission>;
  searchProject: Promise<SearchResponse>;
  tagSubmission: Promise<ChatSubmission>;
  unpublishItems: Promise<any>;
  untagSubmission: Promise<ChatSubmission>;
  updateLogo: Promise<any>;
  updateProject: Promise<Project>;
  updatePublicFileSystem: Promise<PublicFileSystemResponse>;
  updateSetting: Promise<Project>;
  updateSubmission: Promise<ChatSubmission>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) |

#### Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `addItemsToPublicFileSystem()` | ( `projectId`, `publicId`, `addItemsData` ) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Adds additional items to an existing public file system. |
| `addItemsToSubmission()` | ( `projectId`, `submissionId`, `addItemsData` ) => `Promise`\<`ChatSubmission`\> | Adds items to an existing submission. |
| `copyItemsToPath()` | ( `projectId`, `visibility`, `copyData` ) => `Promise`\<\{ `count`: `number`; \}\> | Copies items to a specific path within a project. |
| `copyPublicItemsAtPath()` | ( `projectId`, `token`, `copyData` ) => `Promise`\<\{ `count`: `number`; \}\> | Copies items within a public file system (authenticated management). |
| `copySubmissionItems()` | ( `projectId`, `submissionId`, `copyData` ) => `Promise`\<\{ `count`: `number`; \}\> | Copies items within a submission. |
| `createAssets()` | (`projectId`, `fileUploadBody`) => `Promise`\<`any`[]\> | Create assets within a project and return their signed links for upload. |
| `createFolder()` | ( `projectId`, `visibility`, `folderData` ) => `Promise`\<`Folder`\> | Creates a folder within a project with file system integration. |
| `createLogo()` | (`projectId`, `logoData`) => `Promise`\<`any`\> | Creates a new logo asset for a project. |
| `createProject()` | (`projectData`) => `Promise`\<`Project`\> | Creates a new project. |
| `createProjectPublicAssetChatMessage()` | ( `projectId`, `token`, `assetId`, `data` ) => `Promise`\<`CreatePublicAssetChatMessageResponse`\> | Creates a message on an asset's public chat from an authenticated project context. Creates the chat lazily if it doesn't exist yet. Unlike the public endpoint, this does NOT check token expiration. |
| `createProjectPublicChatMessage()` | ( `projectId`, `token`, `chatId`, `data` ) => `Promise`\<`ChatMessage`\> | Creates a message in an existing public chat from an authenticated project context. Unlike the public endpoint, this does NOT check token expiration. |
| `createProjectPublicTopicChatMessage()` | ( `projectId`, `token`, `data` ) => `Promise`\<`CreatePublicAssetChatMessageResponse`\> | Creates a message on the main public topic chat from an authenticated project context. Creates the chat lazily if it doesn't exist yet. Unlike the public endpoint, this does NOT check token expiration. |
| `createPublicFileSystem()` | (`projectId`, `publicFileSystemData`) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Creates a public file system with a secure token for sharing project assets publicly. |
| `createPublicFolder()` | ( `projectId`, `token`, `folderData` ) => `Promise`\<`Folder`\> | Creates a folder inside a public file system (authenticated management). |
| `createSubmission()` | (`projectId`, `submissionData`) => `Promise`\<`ChatSubmission`\> | Creates a new submission for a project. |
| `createSubmissionFolder()` | ( `projectId`, `submissionId`, `folderData` ) => `Promise`\<`Folder`\> | Creates a folder within a submission. |
| `deleteItemsAtPath()` | ( `projectId`, `visibility`, `deleteData` ) => `Promise`\<\{ `count`: `number`; \}\> | Deletes items at a specific path within a project. |
| `deleteProject()` | (`projectId`) => `Promise`\<`void`\> | Deletes a project (marks for deletion). |
| `deletePublicFileSystem()` | (`projectId`, `publicId`) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Deletes a public file system and invalidates its access token. |
| `deletePublicItemsAtPath()` | ( `projectId`, `token`, `deleteData` ) => `Promise`\<\{ `count`: `number`; \}\> | Deletes items from a public file system (authenticated management). |
| `deleteSubmissionItems()` | ( `projectId`, `submissionId`, `deleteData` ) => `Promise`\<\{ `count`: `number`; \}\> | Deletes items within a submission. |
| `getAssets()` | ( `projectId`, `visibility`, `params?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`Asset`\>\> | Lists a project's assets for one visibility tier. `creator` requires `canGetCreatorAssets`; `reviewer` requires `canGetReviewerAssets`. **Throws** 'projectId is required.' or 'visibility is required.'. |
| `getFolders()` | ( `projectId`, `visibility`, `params?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`Folder`\>\> | Gets folders within a project with specified visibility. |
| `getHighlightedMessages()` | ( `projectId`, `visibility`, `params?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`ChatMessage`\>\> | Lists highlighted chat messages across a project for one visibility tier (cursor pagination only). `creator` requires `canGetCreatorHighlights`; `reviewer` requires `canGetReviewerHighlights`. **Throws** 'projectId is required.' or 'visibility is required.'. |
| `getHomeFeed()` | ( `projectId`, `visibility`, `params?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`Asset`\>\> | Gets the home feed for a project with a specified visibility. |
| `getItemsAtPath()` | ( `projectId`, `visibility`, `path?`, `params?`, `usePost?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`any`\>\> | Gets items at a specific path within a project. |
| `getProject()` | (`projectId`) => `Promise`\<`Project`\> | Retrieves a specific project by its ID. |
| `getProjectChat()` | ( `projectId`, `visibility`, `params?` ) => `Promise`\<`Chat`\> | Gets the project chat with the specified visibility. |
| `getProjectPublicAsset()` | ( `projectId`, `token`, `assetId` ) => `Promise`\<`PublicAssetResponse`\> | Gets a public asset with its public chat from an authenticated project context. Unlike the public endpoint, this does NOT check token expiration. Use this for internal management of public file systems. |
| `getProjectPublicChat()` | (`projectId`, `token`) => `Promise`\<`any`\> | Gets a public chat from an authenticated project context. Unlike the public endpoint, this does NOT check token expiration. Use this for internal management of public file systems. |
| `getProjectPublicChatMessages()` | ( `projectId`, `token`, `chatId`, `params?` ) => `Promise`\<`PublicChatMessagesResponse`\> | Gets messages from a public chat from an authenticated project context. Unlike the public endpoint, this does NOT check token expiration. Use this for internal management of public file systems. |
| `getProjects()` | () => `Promise`\<`Project`[]\> | Retrieves projects accessible by the user. NOTE: API endpoint `/v1/projects` does not currently support pagination. |
| `getPublicAudit()` | (`projectId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<[`PublicAuditAssetResponse`](#publicauditassetresponse)\>\> | Get the public audit for a project — assets that are or have been publicly exposed. **Requires** `projectAdmin` or `projectOwner` on the project (or workspace-tier admin via inheritance). |
| `getPublicFileSystem()` | (`projectId`, `publicId`) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Retrieves a specific public file system by its ID. |
| `getPublicFileSystems()` | (`projectId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\>\> | Gets all public file systems for a project. |
| `getPublicItemsAtPath()` | ( `projectId`, `token`, `path?`, `params?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`any`\>\> | Gets items from a public file system at a specific path (authenticated management). |
| `getSubmission()` | ( `projectId`, `submissionId`, `params?` ) => `Promise`\<`ChatSubmission`\> | Retrieves a specific submission by its ID. |
| `getSubmissionItems()` | ( `projectId`, `submissionId`, `path?`, `params?` ) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`any`\>\> | Gets files for a specific submission. |
| `getSubmissions()` | (`projectId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`ChatSubmission`\>\> | Retrieves submissions for a project. |
| `getTopAccessActivity()` | (`projectId`, `params?`) => `Promise`\<[`ProjectTopAccessActivityResponse`](#projecttopaccessactivityresponse)\> | Top-N assets in a project by access-activity event type (plays, downloads, embeds). Requires project read access. Returns asset IDs and counts only; hydrate names and thumbnails through the normal asset fetch path. **Throws** 'projectId is required.' when `projectId` is falsy. |
| `moveItemsToPath()` | ( `projectId`, `visibility`, `moveData` ) => `Promise`\<[`MoveItemsResult`](#moveitemsresult)\> | Moves items to a specific path within a project. |
| `movePublicItemsAtPath()` | ( `projectId`, `token`, `moveData` ) => `Promise`\<\{ `count`: `number`; \}\> | Moves items within a public file system (authenticated management). |
| `moveSubmissionItems()` | ( `projectId`, `submissionId`, `moveData` ) => `Promise`\<\{ `count`: `number`; \}\> | Moves items within a submission. |
| `previewDeleteItemsAtPath()` | ( `projectId`, `visibility`, `deleteData` ) => `Promise`\<`DeleteImpact`\> | Asks what deleting these paths would reach, without deleting anything. Computed from the same cascade the delete runs, so the answer is what will happen rather than an estimate of it. Only SECONDARY references come back — the reviewer, submission and public-release copies that would go with the selection. |
| `publishItems()` | (`projectId`, `publishData`) => `Promise`\<`any`\> | Publishes a list of items (assets, folders) within a project. |
| `releasePublicFileSystem()` | (`projectId`, `publicId`) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Releases a staged (unreleased) public file system, making it externally accessible via its public token. |
| `releaseSubmission()` | (`projectId`, `submissionId`) => `Promise`\<`ChatSubmission`\> | Releases a staged (unreleased) submission, making it visible to reviewers and firing the deferred "new submission" side effects (emails, notifications, system messages). |
| `releaseSubmissionUpdate()` | (`projectId`, `submissionId`) => `Promise`\<`ChatSubmission`\> | Re-releases an already-released submission's side effects (the "Release Update" action) — re-notifies reviewers with the submission-update email template + `submissionUpdate` notification. Does not change status. |
| `searchProject()` | (`projectId`, `params`) => `Promise`\<`SearchResponse`\> | Full-text search across assets, chat messages, and tasks within a project. Results are populated per the content type's native list view (asset → creator/publisher/tags; chatMessage → author/mentions/attachments; task → creator/assignee/project/origin). |
| `tagSubmission()` | ( `projectId`, `submissionId`, `tagData` ) => `Promise`\<`ChatSubmission`\> | Adds a tag to a submission. |
| `unpublishItems()` | (`projectId`, `unpublishData`) => `Promise`\<`any`\> | Unpublishes a list of items (assets, folders) within a project. |
| `untagSubmission()` | ( `projectId`, `submissionId`, `tagData` ) => `Promise`\<`ChatSubmission`\> | Removes a tag from a submission. |
| `updateLogo()` | (`projectId`, `logoData`) => `Promise`\<`any`\> | Updates the logo asset for a project. |
| `updateProject()` | (`projectId`, `updateData`) => `Promise`\<`Project`\> | Updates a project. |
| `updatePublicFileSystem()` | ( `projectId`, `publicId`, `updateData` ) => `Promise`\<[`PublicFileSystemResponse`](#publicfilesystemresponse)\> | Updates an existing public file system's title and description. |
| `updateSetting()` | ( `projectId`, `name`, `value` ) => `Promise`\<`Project`\> | Updates a single project setting (e.g. `aiPolishEnabled`, `aiCustomPreprompt`). Pass `null` to inherit the workspace's value; pass a typed value to override. The valid setting names are validated server-side against `projectService.validProjectSettings`. |
| `updateSubmission()` | ( `projectId`, `submissionId`, `updateData` ) => `Promise`\<`ChatSubmission`\> | Updates a submission. |
