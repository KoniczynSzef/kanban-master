ALTER TABLE "kanban_task" ALTER COLUMN "description" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "kanban_task" ALTER COLUMN "note" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "team" ALTER COLUMN "description" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "nickname" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "bio" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "business_email" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "team_id" DROP DEFAULT;