import { kanbanTasks } from "@/database/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type KanbanTask = InferSelectModel<typeof kanbanTasks>;
export type KanbanTaskInser = InferInsertModel<typeof kanbanTasks>;
