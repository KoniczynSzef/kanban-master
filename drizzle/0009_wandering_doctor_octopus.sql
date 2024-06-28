CREATE TABLE IF NOT EXISTS "user_to_project" (
	"user_id" text NOT NULL,
	"project_id" text NOT NULL,
	"favourite" boolean DEFAULT false NOT NULL,
	CONSTRAINT "user_to_project_user_id_project_id_pk" PRIMARY KEY("user_id","project_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_project" ADD CONSTRAINT "user_to_project_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_project" ADD CONSTRAINT "user_to_project_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
