ALTER TABLE kanban_task ADD `created_at` text DEFAULT (CURRENT_DATE) NOT NULL;--> statement-breakpoint
ALTER TABLE kanban_task ADD `updated_at` text DEFAULT (CURRENT_DATE) NOT NULL;--> statement-breakpoint
ALTER TABLE project ADD `created_at` text DEFAULT (CURRENT_DATE) NOT NULL;--> statement-breakpoint
ALTER TABLE project ADD `updated_at` text DEFAULT (CURRENT_DATE) NOT NULL;--> statement-breakpoint
ALTER TABLE team ADD `created_at` text DEFAULT (CURRENT_DATE) NOT NULL;--> statement-breakpoint
ALTER TABLE team ADD `updated_at` text DEFAULT (CURRENT_DATE) NOT NULL;