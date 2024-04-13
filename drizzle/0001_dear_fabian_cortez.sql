CREATE TABLE `kanban_board` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`project_id` text NOT NULL,
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `kanban_column` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`board_id` text NOT NULL,
	FOREIGN KEY (`board_id`) REFERENCES `kanban_board`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `kanban_task` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`column_id` text NOT NULL,
	`board_id` text NOT NULL,
	`deadline` integer,
	`priority` text,
	`note` text,
	`column_index` integer NOT NULL,
	`assignee_id` text,
	`creator_id` text,
	`created_at` integer DEFAULT 2024-04-13T21:19:25.465Z NOT NULL,
	`updated_at` integer DEFAULT 2024-04-13T21:19:25.465Z NOT NULL,
	FOREIGN KEY (`column_id`) REFERENCES `kanban_column`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`board_id`) REFERENCES `kanban_board`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`creator_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`owner_id` text NOT NULL,
	`created_at` integer DEFAULT 2024-04-13T21:19:25.464Z NOT NULL,
	`updated_at` integer DEFAULT 2024-04-13T21:19:25.464Z NOT NULL,
	FOREIGN KEY (`owner_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `team` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`owner_id` text NOT NULL,
	`created_at` integer DEFAULT 2024-04-13T21:19:25.465Z NOT NULL,
	`updated_at` integer DEFAULT 2024-04-13T21:19:25.465Z NOT NULL,
	FOREIGN KEY (`owner_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_to_team` (
	`user_id` text NOT NULL,
	`team_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON UPDATE no action ON DELETE no action
);
