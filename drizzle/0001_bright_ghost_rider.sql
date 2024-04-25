CREATE TABLE `kanban_board` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`project_id` text NOT NULL,
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `kanban_column` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`board_id` text NOT NULL,
	FOREIGN KEY (`board_id`) REFERENCES `kanban_board`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `kanban_task` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`column_id` text NOT NULL,
	`board_id` text NOT NULL,
	`deadline` text,
	`priority` text,
	`note` text,
	`column_index` integer NOT NULL,
	`assignee_id` text,
	`creator_id` text,
	`created_at` text DEFAULT '2024-04-22T16:56:39.286Z' NOT NULL,
	`updated_at` text DEFAULT '2024-04-22T16:56:39.286Z' NOT NULL,
	FOREIGN KEY (`column_id`) REFERENCES `kanban_column`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`board_id`) REFERENCES `kanban_board`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`creator_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `milestone` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`priority` text,
	`due` text DEFAULT '2024-04-22T16:56:39.287Z' NOT NULL,
	`author_id` text NOT NULL,
	`project_id` text NOT NULL,
	`created_at` text DEFAULT '2024-04-22T16:56:39.287Z' NOT NULL,
	`updated_at` text DEFAULT '2024-04-22T16:56:39.287Z' NOT NULL,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`deadline` text,
	`status` text,
	`budget` real,
	`owner_id` text NOT NULL,
	`team_id` text NOT NULL,
	`created_at` text DEFAULT '2024-04-22T16:56:39.280Z' NOT NULL,
	`updated_at` text DEFAULT '2024-04-22T16:56:39.286Z' NOT NULL,
	FOREIGN KEY (`owner_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tag` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`project_id` text NOT NULL,
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `team` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`owner_id` text NOT NULL,
	`created_at` text DEFAULT '2024-04-22T16:56:39.286Z' NOT NULL,
	`updated_at` text DEFAULT '2024-04-22T16:56:39.286Z' NOT NULL,
	FOREIGN KEY (`owner_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`surname` text,
	`email` text NOT NULL,
	`picture` text NOT NULL,
	`kinde_id` text NOT NULL,
	`nickname` text,
	`bio` text,
	`business_email` text,
	`validated` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_to_team` (
	`user_id` text NOT NULL,
	`team_id` text NOT NULL,
	PRIMARY KEY(`team_id`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
DROP TABLE `post`;