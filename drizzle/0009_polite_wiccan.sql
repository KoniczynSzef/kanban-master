ALTER TABLE "kanban_task" ALTER COLUMN "description" SET DEFAULT 'description';--> statement-breakpoint
ALTER TABLE "kanban_task" ALTER COLUMN "note" SET DEFAULT 'note';--> statement-breakpoint
ALTER TABLE "team" ALTER COLUMN "description" SET DEFAULT 'description';--> statement-breakpoint
ALTER TABLE "project" ALTER COLUMN "description" SET DEFAULT 'Description';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "business_email" SET DEFAULT 'test@gmail.com';