[**@nurama/sdk**](../index.md)

***

[@nurama/sdk](../index.md) / routes/chat

# routes/chat

## Interfaces

### AddableMembersByScope

Addable members for a legacy project-scoped member chat, split by the membership they come from.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="projectmembership"></a> `projectMembership` | `Membership`[] |
| <a id="workspacemembership"></a> `workspaceMembership` | `Membership`[] |

***

### AttachmentUploadRecord

One entry of an upload response: the created asset plus the signed upload data the
caller uses to PUT the bytes, or a per-file failure (`status: 'fail'` with `error`).

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="asset"></a> `asset?` | `Asset` |
| <a id="error"></a> `error?` | `string` |
| <a id="id"></a> `id` | `string` \| `number` |
| <a id="name"></a> `name` | `string` |
| <a id="signedurldata"></a> `signedUrlData?` | `any` |
| <a id="status"></a> `status` | `"success"` \| `"fail"` |
| <a id="uploadchunksizeinbytes"></a> `uploadChunkSizeInBytes?` | `number` |

***

### BaseAnnotation

#### Extended by

- [`NestedDotAnnotation`](#nesteddotannotation)
- [`NestedShapeAnnotation`](#nestedshapeannotation)
- [`NestedTextAnnotation`](#nestedtextannotation)
- [`NestedPathAnnotation`](#nestedpathannotation)
- [`DotAnnotation`](#dotannotation)
- [`FrameCommentAnnotation`](#framecommentannotation)
- [`ShapeAnnotation`](#shapeannotation)
- [`TextAnnotation`](#textannotation)
- [`PathAnnotation`](#pathannotation)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="angle"></a> `angle?` | `number` |
| <a id="color"></a> `color?` | `string` |
| <a id="endtimestamp"></a> `endTimestamp?` | `number` |
| <a id="fillrule"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` |
| <a id="flipx"></a> `flipX?` | `boolean` |
| <a id="flipy"></a> `flipY?` | `boolean` |
| <a id="frame"></a> `frame?` | `number` |
| <a id="height"></a> `height?` | `number` |
| <a id="left"></a> `left?` | `number` |
| <a id="opacity"></a> `opacity?` | `number` |
| <a id="originx"></a> `originX?` | `"left"` \| `"center"` \| `"right"` |
| <a id="originy"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` |
| <a id="scalex"></a> `scaleX?` | `number` |
| <a id="scaley"></a> `scaleY?` | `number` |
| <a id="shadow"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} |
| `shadow.blur?` | `number` |
| `shadow.color?` | `string` |
| `shadow.offsetX?` | `number` |
| `shadow.offsetY?` | `number` |
| <a id="skewx"></a> `skewX?` | `number` |
| <a id="skewy"></a> `skewY?` | `number` |
| <a id="starttimestamp"></a> `startTimestamp?` | `number` |
| <a id="strokedasharray"></a> `strokeDashArray?` | `number`[] |
| <a id="strokelinecap"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` |
| <a id="strokelinejoin"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` |
| <a id="strokemiterlimit"></a> `strokeMiterLimit?` | `number` |
| <a id="timestamp"></a> `timestamp?` | `number` |
| <a id="top"></a> `top?` | `number` |
| <a id="visible"></a> `visible?` | `boolean` |
| <a id="width"></a> `width?` | `number` |

***

### CreateAssetChatAndMessageData

#### Extends

- [`CreateMessageData`](#createmessagedata)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="annotations"></a> `annotations?` | [`Annotation`](#annotation)[] | - | [`CreateMessageData`](#createmessagedata).[`annotations`](#annotations-1) |
| <a id="assetmentions"></a> `assetMentions?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`assetMentions`](#assetmentions-1) |
| <a id="attachments"></a> `attachments?` | ( \| [`FileAttachmentData`](#fileattachmentdata) \| [`ScratchAttachmentRef`](#scratchattachmentref))[] | - | [`CreateMessageData`](#createmessagedata).[`attachments`](#attachments-1) |
| <a id="content"></a> `content?` | `string` | - | [`CreateMessageData`](#createmessagedata).[`content`](#content-1) |
| <a id="foldermentions"></a> `folderMentions?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`folderMentions`](#foldermentions-1) |
| <a id="linkpreviews"></a> `linkPreviews?` | `LinkPreview`[] | - | [`CreateMessageData`](#createmessagedata).[`linkPreviews`](#linkpreviews-1) |
| <a id="mentions"></a> `mentions?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`mentions`](#mentions-1) |
| <a id="pagecontext"></a> `pageContext?` | \{ `pageTitle?`: `string`; `path?`: `string`; `visibleAssetIds?`: `string`[]; \} | AI-chat only. Sent on the regular chat endpoint when the target chat is an AI topic so the orchestrator gets the page snapshot the user was looking at. Regular chats ignore this field. | [`CreateMessageData`](#createmessagedata).[`pageContext`](#pagecontext-1) |
| `pageContext.pageTitle?` | `string` | - | - |
| `pageContext.path?` | `string` | - | - |
| `pageContext.visibleAssetIds?` | `string`[] | - | - |
| <a id="publicmentions"></a> `publicMentions?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`publicMentions`](#publicmentions-1) |
| <a id="quotes"></a> `quotes?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`quotes`](#quotes-1) |
| <a id="replytoid"></a> `replyToId?` | `string` | - | [`CreateMessageData`](#createmessagedata).[`replyToId`](#replytoid-1) |
| <a id="submissionmentions"></a> `submissionMentions?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`submissionMentions`](#submissionmentions-1) |
| <a id="taskmentions"></a> `taskMentions?` | `string`[] | - | [`CreateMessageData`](#createmessagedata).[`taskMentions`](#taskmentions-1) |

***

### CreateAssetChatAndMessageParams

#### Extends

- [`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="messages"></a> `messages?` | `number` | - |
| <a id="replies"></a> `replies?` | `number` | - |
| <a id="sort"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |

***

### CreateMemberChatData

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="color-1"></a> `color?` | `string` | Optional hex colour from the approved palette (see `GET /config`). |
| <a id="memberids"></a> `memberIds` | `string`[] | - |
| <a id="scopeid"></a> `scopeId` | `string` | - |
| <a id="scopetype"></a> `scopeType` | `"project"` \| `"workspace"` | Only `workspace` is accepted by the API; `project` is rejected with 400 (project-scoped member chats are no longer created). |
| <a id="subject"></a> `subject?` | `string` | - |

***

### CreateMessageData

#### Extended by

- [`CreateAssetChatAndMessageData`](#createassetchatandmessagedata)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="annotations-1"></a> `annotations?` | [`Annotation`](#annotation)[] | - |
| <a id="assetmentions-1"></a> `assetMentions?` | `string`[] | - |
| <a id="attachments-1"></a> `attachments?` | ( \| [`FileAttachmentData`](#fileattachmentdata) \| [`ScratchAttachmentRef`](#scratchattachmentref))[] | - |
| <a id="content-1"></a> `content?` | `string` | - |
| <a id="foldermentions-1"></a> `folderMentions?` | `string`[] | - |
| <a id="linkpreviews-1"></a> `linkPreviews?` | `LinkPreview`[] | - |
| <a id="mentions-1"></a> `mentions?` | `string`[] | - |
| <a id="pagecontext-1"></a> `pageContext?` | \{ `pageTitle?`: `string`; `path?`: `string`; `visibleAssetIds?`: `string`[]; \} | AI-chat only. Sent on the regular chat endpoint when the target chat is an AI topic so the orchestrator gets the page snapshot the user was looking at. Regular chats ignore this field. |
| `pageContext.pageTitle?` | `string` | - |
| `pageContext.path?` | `string` | - |
| `pageContext.visibleAssetIds?` | `string`[] | - |
| <a id="publicmentions-1"></a> `publicMentions?` | `string`[] | - |
| <a id="quotes-1"></a> `quotes?` | `string`[] | - |
| <a id="replytoid-1"></a> `replyToId?` | `string` | - |
| <a id="submissionmentions-1"></a> `submissionMentions?` | `string`[] | - |
| <a id="taskmentions-1"></a> `taskMentions?` | `string`[] | - |

***

### CreateReactionData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="emoji"></a> `emoji` | `string` |

***

### CreateTopicChatData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="subject-1"></a> `subject?` | `string` |
| <a id="topicid"></a> `topicId` | `string` |
| <a id="topictype"></a> `topicType` | `"asset"` \| `"project"` |
| <a id="visibility"></a> `visibility?` | `"creator"` \| `"reviewer"` |

***

### DateRangeParams

#### Extended by

- [`GetUsersMemberChatsParams`](#getusersmemberchatsparams)
- [`GetUsersMentionsParams`](#getusersmentionsparams)
- [`GetMessagesParams`](#getmessagesparams)
- [`GetRepliesParams`](#getrepliesparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="createdafter"></a> `createdAfter?` | `string` \| `number` |
| <a id="createdbefore"></a> `createdBefore?` | `string` \| `number` |
| <a id="updatedbefore"></a> `updatedBefore?` | `string` \| `number` |

***

### DotAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-1"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-2"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="coordinates"></a> `coordinates` | [`PercentageCoordinates`](#percentagecoordinates) | - |
| <a id="endtimestamp-1"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-1"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-1"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-1"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-1"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-1"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-1"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="nestedannotations"></a> `nestedAnnotations?` | [`NestedAnnotation`](#nestedannotation)[] | - |
| <a id="opacity-1"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-1"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-1"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="radius"></a> `radius?` | `number` | - |
| <a id="scalex-1"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-1"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-1"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-1"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-1"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-1"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokedasharray-1"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-1"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-1"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-1"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="timestamp-1"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-1"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type"></a> `type` | `"dot"` | - |
| <a id="visible-1"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-1"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### FetchLinkPreviewsData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="urls"></a> `urls` | `string`[] |

***

### FileAttachmentData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="checksum"></a> `checksum` | `string` |
| <a id="id-1"></a> `id` | `number` |
| <a id="name-1"></a> `name` | `string` |
| <a id="sizeinmb"></a> `sizeInMB` | `number` |

***

### FrameCommentAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-2"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-3"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="endtimestamp-2"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-2"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-2"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-2"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-2"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-2"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-2"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="nestedannotations-1"></a> `nestedAnnotations?` | [`NestedAnnotation`](#nestedannotation)[] | - |
| <a id="opacity-2"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-2"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-2"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="scalex-2"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-2"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-2"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-2"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-2"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-2"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokedasharray-2"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-2"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-2"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-2"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="timestamp-2"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-2"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-1"></a> `type` | `"frameComment"` | - |
| <a id="visible-2"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-2"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### GetChatByTopicIdParams

#### Extends

- [`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="messages-1"></a> `messages?` | `number` | - |
| <a id="replies-1"></a> `replies?` | `number` | - |
| <a id="sort-1"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="topictype-1"></a> `topicType` | `string` | - |
| <a id="visibility-1"></a> `visibility?` | `"creator"` \| `"reviewer"` | - |

***

### GetMentionableAssetsParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="namesearch"></a> `nameSearch?` | `string` | - |
| <a id="page"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-2"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |

***

### GetMentionableFoldersParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor-1"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-1"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-1"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-1"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-1"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="namesearch-1"></a> `nameSearch?` | `string` | - |
| <a id="page-1"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-1"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-1"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-3"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-1"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |

***

### GetMentionablePublicsParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor-2"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-2"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-2"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-2"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-2"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="namesearch-2"></a> `nameSearch?` | `string` | - |
| <a id="page-2"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-2"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-2"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-4"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-2"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |

***

### GetMentionableSubmissionsParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor-3"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-3"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-3"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-3"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-3"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="namesearch-3"></a> `nameSearch?` | `string` | - |
| <a id="page-3"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-3"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-3"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-5"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-3"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |

***

### GetMentionableTasksParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="cursor-4"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-4"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-4"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-4"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-4"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="namesearch-4"></a> `nameSearch?` | `string` | - |
| <a id="page-4"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-4"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-4"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-6"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-4"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |

***

### GetMessageParams

#### Extends

- [`SortParams`](#sortparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="replies-2"></a> `replies?` | `number` | - |
| <a id="sort-7"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |

***

### GetMessagesParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="authorid"></a> `authorId?` | `string` | - |
| <a id="contentsearch"></a> `contentSearch?` | `string` | - |
| <a id="createdafter-1"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-1"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-5"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="excludereplies"></a> `excludeReplies?` | `boolean` | - |
| <a id="hasannotations"></a> `hasAnnotations?` | `boolean` | - |
| <a id="hasattachments"></a> `hasAttachments?` | `boolean` | - |
| <a id="highlighted"></a> `highlighted?` | `boolean` | - |
| <a id="includecounts-5"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-5"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-5"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="isconvomessage"></a> `isConvoMessage?` | `boolean` | - |
| <a id="limit-5"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="page-5"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-5"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-5"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="replies-3"></a> `replies?` | `number` | - |
| <a id="replylimit"></a> `replyLimit?` | `number` | - |
| <a id="replysort"></a> `replySort?` | `Record`\<`string`, `-1` \| `1`\> | - |
| <a id="sort-8"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-5"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |
| <a id="type-2"></a> `type?` | `"user"` \| `"system"` | - |
| <a id="updatedbefore-1"></a> `updatedBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`updatedBefore`](#updatedbefore) |

***

### GetRepliesParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="createdafter-2"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-2"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-6"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-6"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-6"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-6"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-6"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="page-6"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-6"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-6"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-9"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-6"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |
| <a id="updatedbefore-2"></a> `updatedBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`updatedBefore`](#updatedbefore) |

***

### GetUsersMemberChatsParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="archived"></a> `archived?` | `boolean` | - |
| <a id="createdafter-3"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-3"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-7"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-7"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-7"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-7"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-7"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="membersearch"></a> `memberSearch?` | `string` | - |
| <a id="page-7"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-7"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-7"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="recentmessages"></a> `recentMessages?` | `number` | - |
| <a id="scopeid-1"></a> `scopeId?` | `string` | - |
| <a id="sort-10"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-7"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |
| <a id="subjectsearch"></a> `subjectSearch?` | `string` | - |
| <a id="updatedbefore-3"></a> `updatedBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`updatedBefore`](#updatedbefore) |

***

### GetUsersMentionsParams

#### Extends

- [`PaginationParams`](#paginationparams).[`SortParams`](#sortparams).[`DateRangeParams`](#daterangeparams)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="authorid-1"></a> `authorId?` | `string` | - |
| <a id="chatid"></a> `chatId?` | `string` | - |
| <a id="createdafter-4"></a> `createdAfter?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdAfter`](#createdafter) |
| <a id="createdbefore-4"></a> `createdBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`createdBefore`](#createdbefore) |
| <a id="cursor-8"></a> `cursor?` | `string` | [`PaginationParams`](#paginationparams).[`cursor`](#cursor-9) |
| <a id="includecounts-8"></a> `includeCounts?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCounts`](#includecounts-9) |
| <a id="includecursorrecord-8"></a> `includeCursorRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeCursorRecord`](#includecursorrecord-9) |
| <a id="includestartatrecord-8"></a> `includeStartAtRecord?` | `boolean` | [`PaginationParams`](#paginationparams).[`includeStartAtRecord`](#includestartatrecord-9) |
| <a id="limit-8"></a> `limit?` | `number` | [`PaginationParams`](#paginationparams).[`limit`](#limit-9) |
| <a id="page-8"></a> `page?` | `number` | [`PaginationParams`](#paginationparams).[`page`](#page-9) |
| <a id="paginate-8"></a> `paginate?` | `"cursor"` \| `"index"` | [`PaginationParams`](#paginationparams).[`paginate`](#paginate-9) |
| <a id="paginatereverse-8"></a> `paginateReverse?` | `boolean` | [`PaginationParams`](#paginationparams).[`paginateReverse`](#paginatereverse-9) |
| <a id="sort-11"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> | [`SortParams`](#sortparams).[`sort`](#sort-12) |
| <a id="startat-8"></a> `startAt?` | `string` | [`PaginationParams`](#paginationparams).[`startAt`](#startat-9) |
| <a id="updatedbefore-4"></a> `updatedBefore?` | `string` \| `number` | [`DateRangeParams`](#daterangeparams).[`updatedBefore`](#updatedbefore) |

***

### LinkPreviewResponse

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="previews"></a> `previews` | `LinkPreview`[] |

***

### MemberIdList

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="memberids-1"></a> `memberIds` | `string`[] |

***

### MentionablePublic

Mentionable public collection entry returned by
`getMentionablePublics`. `token` is the URL-safe stable identifier
used in the `publicMention:<token>` message-token payload.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="chatid-1"></a> `chatId` | `string` \| `null` |
| <a id="createdat"></a> `createdAt` | `string` |
| <a id="creator"></a> `creator` | \| \{ `displayName?`: `string`; `firstName?`: `string`; `id`: `string`; `lastName?`: `string`; \} \| `null` |
| <a id="description"></a> `description` | `string` \| `null` |
| <a id="expiresat"></a> `expiresAt` | `string` \| `null` |
| <a id="id-2"></a> `id` | `string` |
| <a id="status-1"></a> `status` | `string` |
| <a id="title"></a> `title` | `string` |
| <a id="token"></a> `token` | `string` |

***

### MentionableSubmission

Mentionable submission entry returned by
`getMentionableSubmissions`. Each submission's `id` doubles as the
`chatId` (the ChatSubmission row IS the submission chat).

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="chatid-2"></a> `chatId` | `string` |
| <a id="creator-1"></a> `creator` | \| \{ `displayName?`: `string`; `firstName?`: `string`; `id`: `string`; `lastName?`: `string`; \} \| `null` |
| <a id="description-1"></a> `description` | `string` \| `null` |
| <a id="id-3"></a> `id` | `string` |
| <a id="lastmessageat"></a> `lastMessageAt` | `string` \| `null` |
| <a id="publishedat"></a> `publishedAt` | `string` |
| <a id="status-2"></a> `status` | `string` |
| <a id="subject-2"></a> `subject` | `string` |
| <a id="totalmessages"></a> `totalMessages` | `number` |
| <a id="version"></a> `version` | `string` \| `null` |

***

### NestedDotAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-3"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-4"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="coordinates-1"></a> `coordinates` | [`PercentageCoordinates`](#percentagecoordinates) | - |
| <a id="endtimestamp-3"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-3"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-3"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-3"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-3"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-3"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-3"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="opacity-3"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-3"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-3"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="radius-1"></a> `radius?` | `number` | - |
| <a id="scalex-3"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-3"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-3"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-3"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-3"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-3"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokedasharray-3"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-3"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-3"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-3"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="timestamp-3"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-3"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-3"></a> `type` | `"dot"` | - |
| <a id="visible-3"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-3"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### NestedPathAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-4"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-5"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="endtimestamp-4"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-4"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-4"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-4"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-4"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-4"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-4"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="opacity-4"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-4"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-4"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="pathdata"></a> `pathData` | `string` | - |
| <a id="scalex-4"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-4"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-4"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-4"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-4"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-4"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokecolor"></a> `strokeColor?` | `string` | - |
| <a id="strokedasharray-4"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-4"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-4"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-4"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="strokewidth"></a> `strokeWidth?` | `number` | - |
| <a id="timestamp-4"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-4"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-4"></a> `type` | `"path"` | - |
| <a id="visible-4"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-4"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### NestedShapeAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-5"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-6"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="coordinates-2"></a> `coordinates` | [`PercentageCoordinates`](#percentagecoordinates)[] | - |
| <a id="endtimestamp-5"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillcolor"></a> `fillColor?` | `string` | - |
| <a id="fillrule-5"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-5"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-5"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-5"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-5"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-5"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="opacity-5"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-5"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-5"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="scalex-5"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-5"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-5"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-5"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-5"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-5"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokecolor-1"></a> `strokeColor?` | `string` | - |
| <a id="strokedasharray-5"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-5"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-5"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-5"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="strokewidth-1"></a> `strokeWidth?` | `number` | - |
| <a id="timestamp-5"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-5"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-5"></a> `type` | `"rectangle"` \| `"circle"` \| `"triangle"` \| `"arrow"` \| `"line"` | - |
| <a id="visible-5"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-5"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### NestedTextAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-6"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-7"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="content-2"></a> `content` | `string` | - |
| <a id="coordinates-3"></a> `coordinates` | [`PercentageCoordinates`](#percentagecoordinates) | - |
| <a id="endtimestamp-6"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-6"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-6"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-6"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="fontfamily"></a> `fontFamily?` | \| `"Arial"` \| `"Helvetica"` \| `"Times New Roman"` \| `"Courier New"` \| `"Georgia"` \| `"Verdana"` | - |
| <a id="fontsize"></a> `fontSize?` | `number` | - |
| <a id="fontstyle"></a> `fontStyle?` | `"normal"` \| `"italic"` | - |
| <a id="fontweight"></a> `fontWeight?` | `"normal"` \| `"bold"` | - |
| <a id="frame-6"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-6"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-6"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="opacity-6"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-6"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-6"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="scalex-6"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-6"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-6"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-6"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-6"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-6"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokedasharray-6"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-6"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-6"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-6"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="textcolor"></a> `textColor?` | `string` | - |
| <a id="timestamp-6"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-6"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-6"></a> `type` | `"text"` | - |
| <a id="visible-6"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-6"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### PaginationParams

#### Extended by

- [`GetUsersMemberChatsParams`](#getusersmemberchatsparams)
- [`GetUsersMentionsParams`](#getusersmentionsparams)
- [`GetMessagesParams`](#getmessagesparams)
- [`GetRepliesParams`](#getrepliesparams)
- [`GetMentionableAssetsParams`](#getmentionableassetsparams)
- [`GetMentionableFoldersParams`](#getmentionablefoldersparams)
- [`GetMentionableTasksParams`](#getmentionabletasksparams)
- [`GetMentionableSubmissionsParams`](#getmentionablesubmissionsparams)
- [`GetMentionablePublicsParams`](#getmentionablepublicsparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="cursor-9"></a> `cursor?` | `string` |
| <a id="includecounts-9"></a> `includeCounts?` | `boolean` |
| <a id="includecursorrecord-9"></a> `includeCursorRecord?` | `boolean` |
| <a id="includestartatrecord-9"></a> `includeStartAtRecord?` | `boolean` |
| <a id="limit-9"></a> `limit?` | `number` |
| <a id="page-9"></a> `page?` | `number` |
| <a id="paginate-9"></a> `paginate?` | `"cursor"` \| `"index"` |
| <a id="paginatereverse-9"></a> `paginateReverse?` | `boolean` |
| <a id="startat-9"></a> `startAt?` | `string` |

***

### PathAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-7"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-8"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="endtimestamp-7"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-7"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-7"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-7"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-7"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-7"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-7"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="nestedannotations-2"></a> `nestedAnnotations?` | [`NestedAnnotation`](#nestedannotation)[] | - |
| <a id="opacity-7"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-7"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-7"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="pathdata-1"></a> `pathData` | `string` | - |
| <a id="scalex-7"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-7"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-7"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-7"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-7"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-7"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokecolor-2"></a> `strokeColor?` | `string` | - |
| <a id="strokedasharray-7"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-7"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-7"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-7"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="strokewidth-2"></a> `strokeWidth?` | `number` | - |
| <a id="timestamp-7"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-7"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-7"></a> `type` | `"path"` | - |
| <a id="visible-7"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-7"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### PercentageCoordinates

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="x"></a> `x` | `number` |
| <a id="y"></a> `y` | `number` |

***

### ReviseMessageData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="annotations-2"></a> `annotations?` | [`Annotation`](#annotation)[] |
| <a id="assetmentions-2"></a> `assetMentions?` | `string`[] |
| <a id="content-3"></a> `content?` | `string` |
| <a id="foldermentions-2"></a> `folderMentions?` | `string`[] |
| <a id="linkpreviews-2"></a> `linkPreviews?` | `LinkPreview`[] |
| <a id="mentions-2"></a> `mentions?` | `string`[] |
| <a id="publicmentions-2"></a> `publicMentions?` | `string`[] |
| <a id="quotes-2"></a> `quotes?` | `string`[] |
| <a id="submissionmentions-2"></a> `submissionMentions?` | `string`[] |
| <a id="taskmentions-2"></a> `taskMentions?` | `string`[] |

***

### ScratchAttachmentRef

Scratch-shape attachment ref — points at bytes already uploaded to a
Scratch row. Used by AI Revision (Attach to chat) and the Nurama
Support chat (image attachments). The chat-send endpoint accepts
either this shape OR the upload-shape (`FileAttachmentData`) in the
same `attachments[]` array; `chat.service.createMessage` partitions
and routes per-item.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="name-2"></a> `name?` | `string` |
| <a id="scratchid"></a> `scratchId` | `string` |

***

### ShapeAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-8"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-9"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="coordinates-4"></a> `coordinates` | [`PercentageCoordinates`](#percentagecoordinates)[] | - |
| <a id="endtimestamp-8"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillcolor-1"></a> `fillColor?` | `string` | - |
| <a id="fillrule-8"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-8"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-8"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="frame-8"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-8"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-8"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="nestedannotations-3"></a> `nestedAnnotations?` | [`NestedAnnotation`](#nestedannotation)[] | - |
| <a id="opacity-8"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-8"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-8"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="scalex-8"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-8"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-8"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-8"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-8"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-8"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokecolor-3"></a> `strokeColor?` | `string` | - |
| <a id="strokedasharray-8"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-8"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-8"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-8"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="strokewidth-3"></a> `strokeWidth?` | `number` | - |
| <a id="timestamp-8"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-8"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-8"></a> `type` | `"rectangle"` \| `"circle"` \| `"triangle"` \| `"arrow"` \| `"line"` | - |
| <a id="visible-8"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-8"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### SortParams

#### Extended by

- [`GetUsersMemberChatsParams`](#getusersmemberchatsparams)
- [`GetUsersMentionsParams`](#getusersmentionsparams)
- [`GetChatByTopicIdParams`](#getchatbytopicidparams)
- [`GetMessagesParams`](#getmessagesparams)
- [`CreateAssetChatAndMessageParams`](#createassetchatandmessageparams)
- [`GetMessageParams`](#getmessageparams)
- [`GetRepliesParams`](#getrepliesparams)
- [`GetMentionableAssetsParams`](#getmentionableassetsparams)
- [`GetMentionableFoldersParams`](#getmentionablefoldersparams)
- [`GetMentionableTasksParams`](#getmentionabletasksparams)
- [`GetMentionableSubmissionsParams`](#getmentionablesubmissionsparams)
- [`GetMentionablePublicsParams`](#getmentionablepublicsparams)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="sort-12"></a> `sort?` | `Record`\<`string`, `-1` \| `1`\> |

***

### TextAnnotation

#### Extends

- [`BaseAnnotation`](#baseannotation)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="angle-9"></a> `angle?` | `number` | [`BaseAnnotation`](#baseannotation).[`angle`](#angle) |
| <a id="color-10"></a> `color?` | `string` | [`BaseAnnotation`](#baseannotation).[`color`](#color) |
| <a id="content-4"></a> `content` | `string` | - |
| <a id="coordinates-5"></a> `coordinates` | [`PercentageCoordinates`](#percentagecoordinates) | - |
| <a id="endtimestamp-9"></a> `endTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`endTimestamp`](#endtimestamp) |
| <a id="fillrule-9"></a> `fillRule?` | `"nonzero"` \| `"evenodd"` | [`BaseAnnotation`](#baseannotation).[`fillRule`](#fillrule) |
| <a id="flipx-9"></a> `flipX?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipX`](#flipx) |
| <a id="flipy-9"></a> `flipY?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`flipY`](#flipy) |
| <a id="fontfamily-1"></a> `fontFamily?` | \| `"Arial"` \| `"Helvetica"` \| `"Times New Roman"` \| `"Courier New"` \| `"Georgia"` \| `"Verdana"` | - |
| <a id="fontsize-1"></a> `fontSize?` | `number` | - |
| <a id="fontstyle-1"></a> `fontStyle?` | `"normal"` \| `"italic"` | - |
| <a id="fontweight-1"></a> `fontWeight?` | `"normal"` \| `"bold"` | - |
| <a id="frame-9"></a> `frame?` | `number` | [`BaseAnnotation`](#baseannotation).[`frame`](#frame) |
| <a id="height-9"></a> `height?` | `number` | [`BaseAnnotation`](#baseannotation).[`height`](#height) |
| <a id="left-9"></a> `left?` | `number` | [`BaseAnnotation`](#baseannotation).[`left`](#left) |
| <a id="nestedannotations-4"></a> `nestedAnnotations?` | [`NestedAnnotation`](#nestedannotation)[] | - |
| <a id="opacity-9"></a> `opacity?` | `number` | [`BaseAnnotation`](#baseannotation).[`opacity`](#opacity) |
| <a id="originx-9"></a> `originX?` | `"left"` \| `"center"` \| `"right"` | [`BaseAnnotation`](#baseannotation).[`originX`](#originx) |
| <a id="originy-9"></a> `originY?` | `"center"` \| `"top"` \| `"bottom"` | [`BaseAnnotation`](#baseannotation).[`originY`](#originy) |
| <a id="scalex-9"></a> `scaleX?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleX`](#scalex) |
| <a id="scaley-9"></a> `scaleY?` | `number` | [`BaseAnnotation`](#baseannotation).[`scaleY`](#scaley) |
| <a id="shadow-9"></a> `shadow?` | \{ `blur?`: `number`; `color?`: `string`; `offsetX?`: `number`; `offsetY?`: `number`; \} | [`BaseAnnotation`](#baseannotation).[`shadow`](#shadow) |
| `shadow.blur?` | `number` | - |
| `shadow.color?` | `string` | - |
| `shadow.offsetX?` | `number` | - |
| `shadow.offsetY?` | `number` | - |
| <a id="skewx-9"></a> `skewX?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewX`](#skewx) |
| <a id="skewy-9"></a> `skewY?` | `number` | [`BaseAnnotation`](#baseannotation).[`skewY`](#skewy) |
| <a id="starttimestamp-9"></a> `startTimestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`startTimestamp`](#starttimestamp) |
| <a id="strokedasharray-9"></a> `strokeDashArray?` | `number`[] | [`BaseAnnotation`](#baseannotation).[`strokeDashArray`](#strokedasharray) |
| <a id="strokelinecap-9"></a> `strokeLineCap?` | `"butt"` \| `"round"` \| `"square"` | [`BaseAnnotation`](#baseannotation).[`strokeLineCap`](#strokelinecap) |
| <a id="strokelinejoin-9"></a> `strokeLineJoin?` | `"round"` \| `"miter"` \| `"bevel"` | [`BaseAnnotation`](#baseannotation).[`strokeLineJoin`](#strokelinejoin) |
| <a id="strokemiterlimit-9"></a> `strokeMiterLimit?` | `number` | [`BaseAnnotation`](#baseannotation).[`strokeMiterLimit`](#strokemiterlimit) |
| <a id="textcolor-1"></a> `textColor?` | `string` | - |
| <a id="timestamp-9"></a> `timestamp?` | `number` | [`BaseAnnotation`](#baseannotation).[`timestamp`](#timestamp) |
| <a id="top-9"></a> `top?` | `number` | [`BaseAnnotation`](#baseannotation).[`top`](#top) |
| <a id="type-9"></a> `type` | `"text"` | - |
| <a id="visible-9"></a> `visible?` | `boolean` | [`BaseAnnotation`](#baseannotation).[`visible`](#visible) |
| <a id="width-9"></a> `width?` | `number` | [`BaseAnnotation`](#baseannotation).[`width`](#width) |

***

### UpdateChatSubjectData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="subject-3"></a> `subject` | `string` |

***

### UpdateMemberChatData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="color-11"></a> `color?` | `string` |
| <a id="subject-4"></a> `subject?` | `string` |

***

### UpdateMemberChatIconData

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="checksum-1"></a> `checksum` | `string` |
| <a id="name-3"></a> `name` | `string` |
| <a id="sizeinmb-1"></a> `sizeInMB` | `number` |

## Type Aliases

### Annotation

```ts
type Annotation = 
  | DotAnnotation
  | FrameCommentAnnotation
  | ShapeAnnotation
  | TextAnnotation
  | PathAnnotation;
```

***

### AttachmentResponse

```ts
type AttachmentResponse = AttachmentUploadRecord;
```

***

### ChatMessageResponse

```ts
type ChatMessageResponse = ChatMessage;
```

***

### ChatResponse

```ts
type ChatResponse = Chat;
```

***

### MemberChatResponse

```ts
type MemberChatResponse = ChatMember;
```

***

### MemberResponse

```ts
type MemberResponse = Membership;
```

***

### NestedAnnotation

```ts
type NestedAnnotation = 
  | NestedDotAnnotation
  | NestedShapeAnnotation
  | NestedTextAnnotation
  | NestedPathAnnotation;
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
  addAttachments: Promise<AttachmentUploadRecord[]>;
  addMembers: Promise<ChatMember>;
  archiveMemberChat: Promise<ChatMember>;
  createAssetChatAndMessage: Promise<any>;
  createMemberChat: Promise<ChatMember>;
  createMessage: Promise<ChatMessage>;
  createMessageShortLink: Promise<{
     code: string;
     shortUrl: string;
  }>;
  createReaction: Promise<ChatMessage>;
  createTopicChat: Promise<Chat>;
  deleteChat: Promise<void>;
  deleteMemberChat: Promise<void>;
  deleteMessage: Promise<ChatMessage>;
  fetchLinkPreviews: Promise<LinkPreviewResponse>;
  followChat: Promise<void>;
  getAddableMembers: Promise<AddableMembersByScope | Membership[]>;
  getChat: Promise<Chat>;
  getChatByTopicId: Promise<Chat>;
  getMemberChat: Promise<ChatMember>;
  getMentionableAssets: Promise<PaginatedResponse<Asset>>;
  getMentionableFolders: Promise<PaginatedResponse<Folder>>;
  getMentionablePublics: Promise<PaginatedResponse<MentionablePublic>>;
  getMentionableSubmissions: Promise<PaginatedResponse<MentionableSubmission>>;
  getMentionableTasks: Promise<PaginatedResponse<any>>;
  getMentions: Promise<PaginatedResponse<ChatMessage>>;
  getMessage: Promise<ChatMessage>;
  getMessages: Promise<PaginatedResponse<ChatMessage>>;
  getReplies: Promise<PaginatedResponse<ChatMessage>>;
  getScopeAddableMembers: Promise<AddableMembersByScope | Membership[]>;
  getUsersMemberChats: Promise<PaginatedResponse<ChatMember>>;
  getWorkspaceProjectChats: Promise<any[]>;
  highlightMessage: Promise<ChatMessage>;
  removeAttachment: Promise<ChatMessage>;
  removeMembers: Promise<ChatMember>;
  removeReaction: Promise<ChatMessage>;
  reviseMessage: Promise<ChatMessage>;
  unarchiveMemberChat: Promise<ChatMember>;
  unfollowChat: Promise<void>;
  unhighlightMessage: Promise<ChatMessage>;
  updateChatSubject: Promise<Chat>;
  updateMemberChat: Promise<ChatMember>;
  updateMemberChatIcon: Promise<{
     chat: ChatMember;
  } & AttachmentUploadRecord>;
};
```

Defines chat-related methods for the NuramaClient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`default`](../NuramaClient.md#default) | The NuramaClient instance. |

#### Returns

An object containing the chat-related methods.

| Name | Type | Description |
| ------ | ------ | ------ |
| `addAttachments()` | (`messageId`, `attachments`) => `Promise`\<[`AttachmentUploadRecord`](#attachmentuploadrecord)[]\> | Creates attachment assets for an existing message and returns signed upload URLs for them. Only the message's author may attach, and in topic/submission chats they also need `canCreateAttachment`. Only image and video file names are accepted, each `checksum` must be a 32-64 character hex MD5/SHA-256 digest, `id` must be an integer no greater than 10, and the message may hold at most 6 attachments in total (`exceedsMaxAttachments`). The request is also checked against the workspace storage quota (`uploadRequestExceedsSubscription`). **Throws** 'messageId is required.' when `messageId` is falsy. |
| `addMembers()` | (`chatId`, `data`) => `Promise`\<`ChatMember`\> | Adds users to a member chat by user ID. The caller must be a member of the chat, and every user must be chat-eligible in the chat's scope (`membersInvalid` otherwise). `memberIds` is not enforced by validation, but the request cannot succeed without it. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `archiveMemberChat()` | (`chatId`) => `Promise`\<`ChatMember`\> | Archives a member chat for the calling user only. Adds the caller to the chat's `archivedBy` list; other members' view of the chat is unaffected. The caller must be a member of the chat. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `createAssetChatAndMessage()` | ( `assetId`, `visibility`, `data`, `params?` ) => `Promise`\<`any`\> | Posts a message to an asset's chat at the given visibility, creating the chat first if it does not exist yet (asset chats are normally auto-created, so this mainly covers legacy assets). Only media assets are accepted (`assetInvalidFunctionType` / 404 otherwise). Requires both `canCreate{Creator|Reviewer}Chat` and `canCreate{Creator|Reviewer}ChatMessage` on the asset for the chosen visibility. The body follows the same rules as `createMessage`. The `params` argument is neither validated nor forwarded by the API handler, so the returned chat always carries 10 recent messages with 10 replies each, sorted `{ id: -1 }`. **Throws** 'assetId is required.' when `assetId` is falsy. |
| `createMemberChat()` | (`data`) => `Promise`\<`ChatMember`\> | Creates a member ("Team") chat in a workspace with the given members. Only `scopeType: 'workspace'` is accepted by the API: project-scoped member chats are deprecated and `social` is not supported yet, so both are rejected with 400 even though the type still allows them. Requires `canCreateWorkspaceMemberChat` on the workspace. The caller is always added as the first member, every member must be chat-eligible in the scope (`membersInvalid` otherwise), and a random approved colour is assigned (the API also accepts an optional `color`, not exposed on this type). |
| `createMessage()` | (`chatId`, `data`) => `Promise`\<`ChatMessage`\> | Posts a message to any chat type (topic, member, submission, AI, support). Either `content` (max 10,000 chars) or at least one attachment is required. API tokens need the `chat:write` scope (`tokenScopeMissing` / 403 otherwise); users need message-create permission on the chat, e.g. `canCreateCreatorChatMessage` / `canCreateReviewerChatMessage` for topic chats or membership for member chats. Limits: 6 attachments, 10 of each mention kind, 5 quotes, 5 link previews and 100 annotations. Mentioning users in topic/member/submission chats creates tasks and notifications for them. `pageContext` is only read by AI chats and ignored by every other chat type. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `createMessageShortLink()` | (`messageId`) => `Promise`\<\{ `code`: `string`; `shortUrl`: `string`; \}\> | Creates a short link for a chat message, or returns the existing one if the message already has a short link. Visibility is inherited from the parent chat (`creator` / `reviewer` for topic chats, `null` for member chats). Requires read access to the message's chat (`canCreateMessageShortLink`). **Throws** 'messageId is required.' when `messageId` is falsy. |
| `createReaction()` | (`messageId`, `data`) => `Promise`\<`ChatMessage`\> | Adds the caller's emoji reaction to a message, replacing any reaction they already had on it. Each user holds at most one reaction per message. Requires message-create permission on the chat (`canCreateReaction`). `emoji` must be 1-10 characters. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `createTopicChat()` | (`data`) => `Promise`\<`Chat`\> | Creates a topic chat for a project or asset at a given visibility. Requires `canCreateCreatorChat` (visibility `creator`) or `canCreateReviewerChat` (visibility `reviewer`) on the topic resource. Although `visibility` is optional in the type, the permission check only passes when it is one of those two values, so omitting it results in 403. |
| `deleteChat()` | (`chatId`) => `Promise`\<`void`\> | Marks a topic chat for deletion. In practice this only succeeds for `user`-topic chats owned by the caller: project and asset topic chats are refused with `topicChatsMayNotBeDeleted`, and any other topic type with `unknownError`. Member chats are deleted with `deleteMemberChat`. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `deleteMemberChat()` | (`chatId`) => `Promise`\<`void`\> | Marks a member chat, its messages and its attachments for deletion. Only the chat's creator may delete it; other members receive 403. From the members' perspective the chat disappears immediately; the rows are removed later by the cleanup service. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `deleteMessage()` | (`messageId`) => `Promise`\<`ChatMessage`\> | Marks a message for deletion. Only the author may delete, and in topic/submission chats they also need `canDeleteOwnChatMessage`. The row is removed later by the cleanup service. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `fetchLinkPreviews()` | (`data`) => `Promise`\<[`LinkPreviewResponse`](#linkpreviewresponse)\> | Fetches Open Graph / meta-tag preview data for one to five URLs. Each preview carries an HMAC-SHA256 `signature` that must be passed back unchanged in `linkPreviews` when creating or revising a message, as the API verifies it to reject spoofed previews. Duplicate URLs are collapsed and URLs that fail validation, fetching or SSRF checks are omitted, so `previews` may be shorter than `urls`. Rate limited to 30 requests per minute per IP. |
| `followChat()` | (`chatId`) => `Promise`\<`void`\> | Adds the caller to a chat's following list so they are notified about new messages and updates. Works with topic, member and submission chats and is idempotent. Requires message-create permission on the chat (`canCreateChatMessage`). **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getAddableMembers()` | (`chatId`) => `Promise`\<[`AddableMembersByScope`](#addablemembersbyscope) \| `Membership`[]\> | Lists the members that can be added to an existing member chat, based on the chat's scope and the caller's role in it. The caller must be a member of the chat. For workspace-scoped chats the result is a flat array of memberships; for legacy project-scoped chats it is an `AddableMembersByScope` object. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getChat()` | (`chatId`) => `Promise`\<`Chat`\> | Retrieves a topic chat (project, asset, task or public) by ID without its messages. Requires `canGetCreatorChat` or `canGetReviewerChat` on the chat, matching its visibility. Only topic chats are served here; member chats are served by `getMemberChat` and a member chat ID yields `chatNotFound`. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getChatByTopicId()` | (`topicId`, `params`) => `Promise`\<`Chat`\> | Retrieves the topic chat for a project, asset, public release or task, together with its most recent messages and their replies. Requires `canGetCreatorChat` or `canGetReviewerChat` on the chat, matching `params.visibility`. `replies` (default 10, max 100) and `sort` (default `{ id: -1 }`) are honoured, but `messages` is accepted and then not forwarded by the API handler, so 10 recent messages are always returned. **Throws** 'topicId is required.' when `topicId` is falsy. |
| `getMemberChat()` | (`chatId`) => `Promise`\<`ChatMember`\> | Retrieves a member chat by ID without its messages. The caller must be a member of the chat. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getMentionableAssets()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`Asset`\>\> | Lists the active assets that can be mentioned (`{{assetMention:assetId}}`) in a chat. What is returned depends on the chat: project and asset topic chats return the project's assets at the chat's visibility; project-scoped member chats and submission chats return all of the project's assets; AI chats return the topic project's assets filtered to the caller's own visibility tiers; workspace/social member chats return an empty list. Requires read access to the chat (`canGetChatMentionableAssets`). Defaults to index pagination (`page`, `limit` max 100, sort `{ name: 1 }`); pass `paginate: 'cursor'` for cursor pagination. `startAt` / `includeStartAtRecord` are not accepted here. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getMentionableFolders()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`Folder`\>\> | Lists the active folders that can be mentioned (`{{folderMention:folderId}}`) in a chat. What is returned depends on the chat: project and asset topic chats return the project's folders at the chat's visibility; project-scoped member chats return all of the project's folders; submission chats return the project's reviewer-visibility folders; AI chats return the topic project's folders filtered to the caller's own visibility tiers; workspace/social member chats return an empty list. Requires read access to the chat (`canGetChatMentionableFolders`). Defaults to index pagination (`page`, `limit` max 100, sort `{ name: 1 }`); pass `paginate: 'cursor'` for cursor pagination. `startAt` / `includeStartAtRecord` are not accepted here. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getMentionablePublics()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<[`MentionablePublic`](#mentionablepublic)\>\> | Lists the active public releases (share links) owned by a chat's project that can be mentioned (`{{publicMention:token}}`). The project is resolved from the chat exactly as for `getMentionableSubmissions`; chats without a project return an empty page. Requires read access to the chat (`canGetChatMentionablePublics`). Index pagination only (`page`, `limit` max 100, sort `{ createdAt: -1 }`, also sortable by `title` and `expires`); cursor-pagination params cause a 400. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getMentionableSubmissions()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<[`MentionableSubmission`](#mentionablesubmission)\>\> | Lists the active submissions in a chat's project that can be mentioned (`{{submissionMention:submissionId}}`). The project is resolved from the chat (project/asset/task topic chats, project-scoped member chats, submission chats and project-scoped AI chats); chats without a project return an empty page. Requires read access to the chat (`canGetChatMentionableSubmissions`). Index pagination only (`page`, `limit` max 100, sort `{ createdAt: -1 }`, also sortable by `subject` and `lastMessageAt`); cursor-pagination params cause a 400. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getMentionableTasks()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`any`\>\> | Lists the board tasks that can be mentioned (`{{taskMention:taskId}}`) in a chat. Requires the workspace to have the `boards` capability (`capabilityNotAvailable` / 403 otherwise) and read access to the chat (`canGetChatMentionableTasks`). Project, asset and task topic chats return tasks in the project on boards whose visibility includes the chat's; project-scoped member chats return every board task in the project; submission chats return tasks on reviewer-visible boards; workspace/social member chats return an empty list. Legacy tasks without a board are never returned. Defaults to index pagination (`page`, `limit` max 100, sort `{ updatedAt: -1 }`); pass `paginate: 'cursor'` for cursor pagination. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getMentions()` | (`params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`ChatMessage`\>\> | Lists the messages in which the caller was mentioned. Defaults to index pagination (`page`, `limit` max 100, sort `{ id: -1 }`); pass `paginate: 'cursor'` for cursor pagination. Filter with `chatId` and/or `authorId`. `createdBefore` is only accepted with index pagination; `createdAfter` and `updatedBefore` from DateRangeParams are not accepted by this endpoint and cause a 400. |
| `getMessage()` | (`messageId`, `params?`) => `Promise`\<`ChatMessage`\> | Retrieves a single message by ID with its most recent replies. Requires read access to the message's chat (`canGetChatMessage`). `replies` defaults to 10 (max 100) and `sort` (default `{ id: -1 }`) orders the included replies. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `getMessages()` | (`chatId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`ChatMessage`\>\> | Lists a chat's active messages with their recent replies and populated attachments and mentions. Requires read access to the chat (`canGetChat`); API tokens need the `chat:read` scope (`tokenScopeMissing` / 403 otherwise). Defaults to index pagination (`page`, `limit` max 100, sort `{ id: -1 }`); pass `paginate: 'cursor'` for cursor pagination. `createdBefore` / `createdAfter` are only accepted with index pagination and `updatedBefore` is not accepted at all. `replyLimit` (default 10, max 100) sets the replies returned per message; `replies` is a deprecated alias that takes precedence over `replyLimit` whenever it is set to anything other than 10. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `getReplies()` | (`messageId`, `params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`ChatMessage`\>\> | Lists the active replies to a message, with attachments populated. Requires read access to the message's chat (`canGetChatMessage`). Defaults to index pagination (`page`, `limit` max 100, sort `{ id: -1 }`); pass `paginate: 'cursor'` for cursor pagination. `createdBefore` / `createdAfter` are only accepted with index pagination and `updatedBefore` is not accepted at all. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `getScopeAddableMembers()` | (`scopeType`, `scopeId`) => `Promise`\<[`AddableMembersByScope`](#addablemembersbyscope) \| `Membership`[]\> | Lists the members addable to a NEW member chat, by scope, before the chat exists. Use this to populate the create-chat member picker — unlike the raw membership-list endpoints it isn't admin-gated, so non-admin members allowed to start a Team Chat still get the correct list. Requires `canCreateWorkspaceMemberChat` (or `canCreateProjectMemberChat`) on the scope. For `project` scope the result is an `AddableMembersByScope` object; note that project-scoped member chats can no longer be created. **Throws** 'scopeType is required.' or 'scopeId is required.' when either is falsy. |
| `getUsersMemberChats()` | (`params?`) => `Promise`\<[`PaginatedResponse`](#paginatedresponse)\<`ChatMember`\>\> | Lists the member chats the caller belongs to, most recently updated first, each with its recent messages. Defaults to index pagination (`page`, `limit` max 20); pass `paginate: 'cursor'` for cursor pagination. `updatedBefore` is only accepted with index pagination, `recentMessages` caps the messages returned per chat (default and max 20), and `archived` narrows to chats the caller has (`true`) or has not (`false`) archived. `createdBefore` / `createdAfter` from DateRangeParams are not accepted by this endpoint and cause a 400. |
| `getWorkspaceProjectChats()` | (`workspaceId`) => `Promise`\<`any`[]\> | Retrieves every project topic chat (creator/reviewer) the caller can access across all projects in a workspace, with the latest message and message count for each, ordered by most recent activity. Powers the workspace-level "Project Chat" list. Requires `canGetWorkspace` on the workspace; access to each project's chats is derived from the caller's inherited `canGetCreatorChat` / `canGetReviewerChat`. **Throws** 'workspaceId is required.' when `workspaceId` is falsy. |
| `highlightMessage()` | (`messageId`) => `Promise`\<`ChatMessage`\> | Highlights a message, recording the caller as the highlighter. In topic and submission chats this requires `canHighlightMessage` on the chat; in member chats any member may highlight. For project and asset topic chats a system message is posted in the project chat of the same visibility, a `chatHighlightMessage` notification is sent and project members are emailed. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `removeAttachment()` | (`messageId`, `assetId`) => `Promise`\<`ChatMessage`\> | Removes an attachment from a message and marks the asset for deletion. Only the author may remove attachments, and in topic/submission chats they also need `canDeleteOwnAttachment`. If the message is left with no content and no attachments it is marked for deletion as well, and the deleted message is returned. **Throws** 'messageId is required.' or 'assetId is required.' when either is falsy. |
| `removeMembers()` | (`chatId`, `data`) => `Promise`\<`ChatMember`\> | Removes users from a member chat by user ID. The caller must be a member of the chat. The chat's creator cannot be removed (`ownerCannotLeaveChat`) and unknown user IDs produce `userNotFound`. Sent as a DELETE with a JSON body. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `removeReaction()` | (`messageId`) => `Promise`\<`ChatMessage`\> | Removes the caller's own reaction from a message. Gated by the same permission as `createReaction`. Calling it when the caller has no reaction is a no-op that still returns the message. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `reviseMessage()` | (`messageId`, `data`) => `Promise`\<`ChatMessage`\> | Revises a message's content, mentions, quotes, annotations and link previews, keeping the previous version as a revision. Only the author may revise, and in topic/submission chats they also need `canUpdateOwnChatMessage`. Annotations are replaced, not merged: omit `annotations` to keep the current ones, send `[]` to remove them all. `linkPreviews` likewise replaces the stored previews. Same size limits as `createMessage`. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `unarchiveMemberChat()` | (`chatId`) => `Promise`\<`ChatMember`\> | Unarchives a member chat for the calling user only. Removes the caller from the chat's `archivedBy` list. The caller must be a member of the chat. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `unfollowChat()` | (`chatId`) => `Promise`\<`void`\> | Removes the caller from a chat's following list. Works with topic, member and submission chats and is idempotent. No chat permission is checked, so users can stop notifications for a chat they have since lost access to. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `unhighlightMessage()` | (`messageId`) => `Promise`\<`ChatMessage`\> | Removes the highlight from a message. Clears the highlighter fields and removes the associated system messages and notification. Same permission as `highlightMessage`. **Throws** 'messageId is required.' when `messageId` is falsy. |
| `updateChatSubject()` | (`chatId`, `data`) => `Promise`\<`Chat`\> | Updates the subject of a topic chat. Requires `canUpdateCreatorChat` or `canUpdateReviewerChat` on the chat, matching its visibility. `subject` is limited to 100 characters. For member chats use `updateMemberChat`. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `updateMemberChat()` | (`chatId`, `data`) => `Promise`\<`ChatMember`\> | Updates a member chat's subject and/or colour. The caller must be a member of the chat. `subject` is limited to 100 characters and `color` must be one of the approved palette colours. **Throws** 'chatId is required.' when `chatId` is falsy. |
| `updateMemberChatIcon()` | (`chatId`, `data`) => `Promise`\<\{ `chat`: `ChatMember`; \} & [`AttachmentUploadRecord`](#attachmentuploadrecord)\> | Creates an icon asset for a member chat and returns signed upload URLs for it. Any existing icon is marked for deletion. The caller must be a member of the chat; `sizeInMB` is capped at 10 and `name` at 100 characters. Upload the file to the returned `signedUrlData.urls` afterwards, exactly as for any asset upload. **Throws** 'chatId is required.' when `chatId` is falsy. |
