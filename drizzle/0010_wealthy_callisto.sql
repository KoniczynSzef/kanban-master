CREATE TABLE IF NOT EXISTS "user_to_task" (
	"user_id" text NOT NULL,
	"task_id" text NOT NULL,
	CONSTRAINT "user_to_task_user_id_task_id_pk" PRIMARY KEY("user_id","task_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_task" ADD CONSTRAINT "user_to_task_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_task" ADD CONSTRAINT "user_to_task_task_id_kanban_task_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."kanban_task"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
