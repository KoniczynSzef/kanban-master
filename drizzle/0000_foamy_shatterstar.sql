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
