ALTER TABLE "note" ADD COLUMN "created_in_ms" integer;--> statement-breakpoint
ALTER TABLE "note" DROP COLUMN IF EXISTS "created_at";