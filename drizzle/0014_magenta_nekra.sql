ALTER TABLE "note" ALTER COLUMN "created_at" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "note" DROP COLUMN IF EXISTS "updated_at";