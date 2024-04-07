ALTER TABLE "kanban_task" ALTER COLUMN "assignee_id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "kanban_task" ALTER COLUMN "creator_id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "team_id" SET DEFAULT gen_random_uuid();