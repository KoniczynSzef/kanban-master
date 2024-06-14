CREATE TABLE IF NOT EXISTS "note" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text,
	"author_id" text NOT NULL,
	"created_at" date DEFAULT '2024-06-14T14:11:01.066Z' NOT NULL,
	"updated_at" date DEFAULT '2024-06-14T14:11:01.066Z' NOT NULL
);
--> statement-breakpoint
DROP TABLE "user_to_project";--> statement-breakpoint
DROP TABLE "user_to_task";--> statement-breakpoint
DROP TABLE "user_to_team";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
