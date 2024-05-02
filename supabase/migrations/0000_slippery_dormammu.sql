CREATE TABLE IF NOT EXISTS "kanban_board" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"project_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "kanban_column" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"board_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "kanban_task" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"column_id" text NOT NULL,
	"board_id" text NOT NULL,
	"deadline" date,
	"priority" text,
	"note" text,
	"column_index" real NOT NULL,
	"assignee_id" text,
	"creator_id" text,
	"created_at" date DEFAULT '2024-05-02T10:43:12.789Z' NOT NULL,
	"updated_at" date DEFAULT '2024-05-02T10:43:12.789Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "milestone" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"priority" text,
	"due" date DEFAULT '2024-05-02T10:43:12.789Z' NOT NULL,
	"author_id" text NOT NULL,
	"project_id" text NOT NULL,
	"created_at" date DEFAULT '2024-05-02T10:43:12.789Z' NOT NULL,
	"updated_at" date DEFAULT '2024-05-02T10:43:12.789Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"deadline" date,
	"status" text,
	"budget" real,
	"owner_id" text NOT NULL,
	"team_id" text NOT NULL,
	"created_at" date DEFAULT '2024-05-02T10:43:12.787Z' NOT NULL,
	"updated_at" date DEFAULT '2024-05-02T10:43:12.787Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tag" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"project_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "team" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"owner_id" text NOT NULL,
	"created_at" date DEFAULT '2024-05-02T10:43:12.790Z' NOT NULL,
	"updated_at" date DEFAULT '2024-05-02T10:43:12.790Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"surname" text,
	"email" text NOT NULL,
	"picture" text NOT NULL,
	"kinde_id" text NOT NULL,
	"nickname" text,
	"bio" text,
	"business_email" text,
	"team_role" text,
	"validated" boolean DEFAULT false NOT NULL,
	"visited_dashboard" boolean DEFAULT false NOT NULL,
	"created_at" date DEFAULT '2024-05-02T10:43:12.782Z' NOT NULL,
	"updated_at" date DEFAULT '2024-05-02T10:43:12.783Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_to_team" (
	"user_id" text NOT NULL,
	"team_id" text NOT NULL,
	CONSTRAINT "user_to_team_user_id_team_id_pk" PRIMARY KEY("user_id","team_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "kanban_board" ADD CONSTRAINT "kanban_board_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "kanban_column" ADD CONSTRAINT "kanban_column_board_id_kanban_board_id_fk" FOREIGN KEY ("board_id") REFERENCES "kanban_board"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "kanban_task" ADD CONSTRAINT "kanban_task_column_id_kanban_column_id_fk" FOREIGN KEY ("column_id") REFERENCES "kanban_column"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "kanban_task" ADD CONSTRAINT "kanban_task_board_id_kanban_board_id_fk" FOREIGN KEY ("board_id") REFERENCES "kanban_board"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "kanban_task" ADD CONSTRAINT "kanban_task_creator_id_user_id_fk" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "milestone" ADD CONSTRAINT "milestone_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "milestone" ADD CONSTRAINT "milestone_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project" ADD CONSTRAINT "project_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project" ADD CONSTRAINT "project_team_id_team_id_fk" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tag" ADD CONSTRAINT "tag_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "team" ADD CONSTRAINT "team_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_team" ADD CONSTRAINT "user_to_team_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_to_team" ADD CONSTRAINT "user_to_team_team_id_team_id_fk" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
