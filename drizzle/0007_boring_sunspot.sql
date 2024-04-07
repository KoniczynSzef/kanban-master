ALTER TABLE "kanban_task" ALTER COLUMN "assignee_id" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "kanban_task" ALTER COLUMN "creator_id" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "team" ALTER COLUMN "description" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "project" ALTER COLUMN "description" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "nickname" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "bio" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "business_email" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "team_id" SET DEFAULT '';