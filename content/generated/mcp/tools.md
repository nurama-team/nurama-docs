# MCP tools

131 tools (78 mutating).

| Tool | Mutating | Summary |
| --- | --- | --- |
| [get_self](tools/get_self.md) | no | Get the bot's own public profile — id, displayName, avatar, color, accountType |
| [list_my_memberships](tools/list_my_memberships.md) | no | List every workspace, project, and chat the bot user is a member of, with the roles granted on each |
| [get_workspace](tools/get_workspace.md) | no | Fetch a single workspace's metadata by id — name, slug, color, description, settings (including AI feature toggles), status |
| [list_workspace_projects](tools/list_workspace_projects.md) | no | List every project in a workspace the bot can see — name, slug, id, status |
| [get_project](tools/get_project.md) | no | Fetch a single project's metadata — name, slug, description, logo, workspaceId, status |
| [list_project_memberships](tools/list_project_memberships.md) | no | List every user who has any membership in this project, with their roles |
| [list_project_mentionable_users](tools/list_project_mentionable_users.md) | no | List users who can be @-mentioned in a project chat at the given visibility tier |
| [list_project_feed](tools/list_project_feed.md) | no | List recent assets in a project, scoped to one visibility tier (`creator` or `reviewer`) |
| [list_project_boards](tools/list_project_boards.md) | no | List the boards in a project, optionally filtered to one visibility tier |
| [get_board](tools/get_board.md) | no | Fetch a single board with its columns and tasks grouped per column |
| [get_board_tasks](tools/get_board_tasks.md) | no | List tasks on one specific board, with optional column / status / assignee / tag filters |
| [list_submissions](tools/list_submissions.md) | no | List submission packages in a project |
| [get_submission](tools/get_submission.md) | no | Fetch a single submission package by id, including its metadata |
| [list_notifications](tools/list_notifications.md) | no | List notifications on one or more channels (cursor paginated) |
| [list_new_notifications](tools/list_new_notifications.md) | no | List notifications NEW since the caller's last-seen timestamp on the given channels |
| [get_new_notification_count](tools/get_new_notification_count.md) | no | Return the count of new (unread) notifications across the given channels — the cheapest probe to decide whether it's worth paging through `list_new_notifications` |
| [resolve_shortlink](tools/resolve_shortlink.md) | no | Resolve a Nurama short-link code (the trailing segment of a https://nurma.link/.. |
| [resolve_public_download](tools/resolve_public_download.md) | no | Resolve a public-download token (the 10-character code at the end of a nurma.link download URL) to minimal file metadata — `fileName`, `mediaType`, `status` |
| [get_public_download_url](tools/get_public_download_url.md) | no | Return a signed download URL for a public-download token — what a `nurma.link` page actually redirects to when the user clicks Download |
| [get_unacknowledged_task_count](tools/get_unacknowledged_task_count.md) | no | Return the count of tasks assigned to the calling identity that have not yet been acknowledged, scoped to a project |
| [list_tags](tools/list_tags.md) | no | List every tag defined for an owner resource — project or workspace |
| [get_chat](tools/get_chat.md) | no | Fetch the metadata for a single chat: chatType (`topic` / `member` / `submission`), topicType (`project` / `asset` / `task` / etc.), topicId, visibility, and participant ids |
| [get_chat_by_topic_id](tools/get_chat_by_topic_id.md) | no | Resolve a topic id (asset, project, task, public) + visibility into the chat that hangs off it |
| [get_project_chat](tools/get_project_chat.md) | no | Resolve the project-level chat for one visibility tier (creator or reviewer) |
| [list_chat_messages](tools/list_chat_messages.md) | no | List recent messages in a chat, newest first |
| [get_message](tools/get_message.md) | no | Fetch a single chat message by id, including attachments, mentions, and reply metadata |
| [get_replies](tools/get_replies.md) | no | Load the threaded replies under one message |
| [list_my_mentions](tools/list_my_mentions.md) | no | List chat messages that mention the calling user, across every chat the user can see |
| [list_mentionable_assets](tools/list_mentionable_assets.md) | no | List assets that can be referenced via `{{assetMention:UUID}}` tokens in a message in this chat |
| [list_mentionable_folders](tools/list_mentionable_folders.md) | no | List folders the caller can `{{folderMention:UUID}}` in this chat — already scope-filtered to the chat's visibility tier |
| [list_mentionable_tasks](tools/list_mentionable_tasks.md) | no | List tasks that can be referenced via `{{taskMention:UUID}}` tokens in a message in this chat |
| [list_ai_chat_topics](tools/list_ai_chat_topics.md) | no | List the caller's AI chat topics (Nu — Nurama's LLM assistant — conversations, separate from project chats) |
| [send_message](tools/send_message.md) | yes | Post a new chat message as the bot user |
| [revise_message](tools/revise_message.md) | yes | Edit a chat message |
| [create_reaction](tools/create_reaction.md) | yes | Add an emoji reaction to a message |
| [remove_reaction](tools/remove_reaction.md) | yes | Remove the caller's reaction from a message |
| [highlight_message](tools/highlight_message.md) | yes | Pin / highlight a message in its chat — surfaces it in the highlights list and visually flags it in the timeline |
| [unhighlight_message](tools/unhighlight_message.md) | yes | Remove the highlight / pin from a message |
| [create_message_short_link](tools/create_message_short_link.md) | yes | Mint a deep-linkable short URL for a chat message |
| [update_chat_subject](tools/update_chat_subject.md) | yes | Rename a chat |
| [follow_chat](tools/follow_chat.md) | yes | Start following a chat — opts the caller in to real-time notifications for every new message in it |
| [unfollow_chat](tools/unfollow_chat.md) | yes | Stop following a chat |
| [list_project_assets](tools/list_project_assets.md) | no | Flat list of assets in a project, scoped to one visibility tier |
| [list_items_at_path](tools/list_items_at_path.md) | no | List the file-system items (folders and assets, intermingled) at a path in a project's virtual file system |
| [get_asset](tools/get_asset.md) | no | Fetch a single asset's metadata by id — name, mediaType, sizeInBytes, status, tags, chats, etc |
| [get_asset_files](tools/get_asset_files.md) | no | Get the file records of one functionType for an asset (e.g |
| [download_assets](tools/download_assets.md) | no | Mint signed download URLs for one or more assets — the same URLs the Nurama web app's "Download" button uses |
| [get_asset_access_activity](tools/get_asset_access_activity.md) | no | Read play / download access metrics for a single asset (totals + time-series) |
| [get_folder](tools/get_folder.md) | no | Fetch a single folder's metadata by id — name, parent folderId, path, owner project, etc |
| [list_folder_assets](tools/list_folder_assets.md) | no | List the assets directly inside a folder |
| [update_asset](tools/update_asset.md) | yes | Update an asset's name, folder placement, or metadata |
| [tag_asset](tools/tag_asset.md) | yes | Apply a tag to an asset |
| [untag_asset](tools/untag_asset.md) | yes | Remove a tag from an asset |
| [create_asset_short_link](tools/create_asset_short_link.md) | yes | Mint a deep-linkable short URL for an asset |
| [repair_assets](tools/repair_assets.md) | yes | Re-trigger post-processing (thumbnails, transcoding, metadata extraction) for one or more assets |
| [create_folder](tools/create_folder.md) | yes | Create a folder inside a project |
| [update_folder_name](tools/update_folder_name.md) | yes | Rename a folder |
| [tag_folder](tools/tag_folder.md) | yes | Apply a tag to a folder |
| [untag_folder](tools/untag_folder.md) | yes | Remove a tag from a folder |
| [create_tag](tools/create_tag.md) | yes | Mint a new tag on a workspace or project |
| [update_tag](tools/update_tag.md) | yes | Rename or recolor a tag |
| [create_board](tools/create_board.md) | yes | Create a kanban board in a project |
| [update_board](tools/update_board.md) | yes | Rename, redescribe, retier, archive, or reorder a board |
| [add_column](tools/add_column.md) | yes | Append a new column to a board |
| [update_column](tools/update_column.md) | yes | Rename, recolor, retag, or reposition a single board column |
| [reorder_columns](tools/reorder_columns.md) | yes | Bulk-assign new sort orders to columns on a board |
| [tag_board](tools/tag_board.md) | yes | Apply a tag to a board |
| [untag_board](tools/untag_board.md) | yes | Remove a tag from a board |
| [create_submission](tools/create_submission.md) | yes | Bundle a set of items at given creator-tier paths into a submission for reviewer review |
| [update_submission](tools/update_submission.md) | yes | Rename / redescribe / re-version a submission |
| [add_items_to_submission](tools/add_items_to_submission.md) | yes | Add creator-tier paths to an existing submission |
| [tag_submission](tools/tag_submission.md) | yes | Apply a tag to a submission |
| [untag_submission](tools/untag_submission.md) | yes | Remove a tag from a submission |
| [update_project](tools/update_project.md) | yes | Rename or redescribe a project |
| [publish_items](tools/publish_items.md) | yes | Publish (creator → reviewer tier) one or more resources by id |
| [unpublish_items](tools/unpublish_items.md) | yes | Unpublish (remove from reviewer tier) one or more resources |
| [get_convo](tools/get_convo.md) | no | Fetch a single live conversation (video / audio huddle) by id |
| [list_scope_convos](tools/list_scope_convos.md) | no | List live conversations attached to a scope (a project today) at the given visibility tier(s) |
| [start_convo](tools/start_convo.md) | yes | Start a new live conversation (video or audio huddle) anchored in a chat |
| [join_convo](tools/join_convo.md) | yes | Join an active live conversation |
| [rejoin_convo](tools/rejoin_convo.md) | yes | Re-enter a convo as an already-active participant |
| [leave_convo](tools/leave_convo.md) | yes | Leave a convo while it stays active for the other participants |
| [complete_convo](tools/complete_convo.md) | yes | End a live conversation for everyone — closes the Daily.co room, stamps `endedAt`, transitions status to `completed`, and triggers recording / transcript post-processing if those features were enabled |
| [update_convo](tools/update_convo.md) | yes | Rename a convo or update its notes |
| [list_my_member_chats](tools/list_my_member_chats.md) | no | List the caller's member chats — 1:1 DMs and group chats |
| [get_member_chat](tools/get_member_chat.md) | no | Fetch a single member chat (DM / group chat) by id |
| [get_addable_chat_members](tools/get_addable_chat_members.md) | no | List users who can be invited to a member chat — already filtered by chat scope (workspace / project / social) and excluding current members |
| [create_member_chat](tools/create_member_chat.md) | yes | Start a private member chat — 1:1 DM (one memberId) or group chat (multiple memberIds) |
| [update_member_chat](tools/update_member_chat.md) | yes | Update a member chat's subject or color |
| [archive_member_chat](tools/archive_member_chat.md) | yes | Archive a member chat — hides it from the active list without losing history |
| [unarchive_member_chat](tools/unarchive_member_chat.md) | yes | Restore an archived member chat to the active list. |
| [add_chat_members](tools/add_chat_members.md) | yes | Invite users to a member chat — turns a 1:1 DM into a group chat, or grows an existing group |
| [remove_chat_members](tools/remove_chat_members.md) | yes | Remove users from a member chat |
| [create_ai_chat_topic](tools/create_ai_chat_topic.md) | yes | Create a new (empty) AI chat topic — one of Nu's LLM-assistant conversations |
| [get_ai_chat_topic](tools/get_ai_chat_topic.md) | no | Fetch a single AI chat topic by id |
| [update_ai_chat_topic](tools/update_ai_chat_topic.md) | yes | Rename an AI chat topic or toggle its archived state |
| [list_project_tasks](tools/list_project_tasks.md) | no | List tasks across a project, with optional filters by board, column, status, assignee, or substring search on the subject |
| [list_my_tasks](tools/list_my_tasks.md) | no | List tasks assigned to the bot user (or, in DANGEROUSLY_USE_USER_JWT mode, to the human user) |
| [get_task_links](tools/get_task_links.md) | no | List every task-link record attached to a single task — i.e |
| [list_task_events](tools/list_task_events.md) | no | List the audit / activity events for a single task — status changes, assignments, column moves, comments, etc |
| [list_task_relations](tools/list_task_relations.md) | no | List the chat / message relations attached to a task |
| [list_chat_task_relations](tools/list_chat_task_relations.md) | no | List task relations anchored in a chat — every task that was created from a message in this chat, or otherwise linked to it |
| [list_message_task_relations](tools/list_message_task_relations.md) | no | List task relations attached to one chat message — every task that was created from this message or otherwise linked to it |
| [create_task_relation](tools/create_task_relation.md) | yes | Attach a task to a chat or a chat message — establishes the "this task came from / belongs to this conversation" link that the Nurama web app renders as a task card in the conversation |
| [create_task](tools/create_task.md) | yes | Create a new task on a board |
| [update_task_status](tools/update_task_status.md) | yes | Set a task's top-level status to `pending`, `complete`, or `cancelled` |
| [update_task_details](tools/update_task_details.md) | yes | Update a task's subject, description, or assignee |
| [move_task](tools/move_task.md) | yes | Move a task |
| [add_existing_task_to_board](tools/add_existing_task_to_board.md) | yes | Attach an existing task to a board (e.g |
| [remove_task_from_board](tools/remove_task_from_board.md) | yes | Detach a task from its board without deleting the task |
| [link_task](tools/link_task.md) | yes | Create a relationship between two tasks (related, blocks, blockedBy, duplicate) |
| [unlink_task](tools/unlink_task.md) | yes | Remove an existing relationship between two tasks |
| [tag_task](tools/tag_task.md) | yes | Attach a project-scoped tag to a task |
| [untag_task](tools/untag_task.md) | yes | Remove a project-scoped tag from a task |
| [acknowledge_task](tools/acknowledge_task.md) | yes | Toggle the calling user's acknowledgement of a task (mark as seen, or un-mark) |
| [follow_task](tools/follow_task.md) | yes | Have the calling user follow a task — they will receive notifications about future activity on it |
| [unfollow_task](tools/unfollow_task.md) | yes | Have the calling user stop following a task — no further notifications about its activity |
| [delete_message](tools/delete_message.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_chat](tools/delete_chat.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_member_chat](tools/delete_member_chat.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_convo](tools/delete_convo.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_board](tools/delete_board.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_column](tools/delete_column.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_asset](tools/delete_asset.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_folder](tools/delete_folder.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_tag](tools/delete_tag.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_submission_items](tools/delete_submission_items.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_items_at_path](tools/delete_items_at_path.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_ai_chat_topic](tools/delete_ai_chat_topic.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [delete_task_relation](tools/delete_task_relation.md) | yes | DESTRUCTIVE — confirm with the user before calling |
| [remove_attachment](tools/remove_attachment.md) | yes | Remove a single asset attachment from a chat message |
