ALTER TABLE "kanban_task" ALTER COLUMN "created_at" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "kanban_task" ALTER COLUMN "updated_at" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "milestone" ALTER COLUMN "due" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "milestone" ALTER COLUMN "created_at" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "milestone" ALTER COLUMN "updated_at" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "project" ALTER COLUMN "created_at" SET DEFAULT '2024-05-05T14:34:02.057Z';--> statement-breakpoint
ALTER TABLE "project" ALTER COLUMN "updated_at" SET DEFAULT '2024-05-05T14:34:02.057Z';--> statement-breakpoint
ALTER TABLE "team" ALTER COLUMN "created_at" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "team" ALTER COLUMN "updated_at" SET DEFAULT '2024-05-05T14:34:02.058Z';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2024-05-05T14:34:02.055Z';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2024-05-05T14:34:02.056Z';--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "team_status" text;--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "team_chat_link" text;--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "team_productivity_score" real DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "team_color" text;