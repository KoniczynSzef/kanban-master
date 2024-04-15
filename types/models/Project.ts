import { projects } from "@/database/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Project = InferSelectModel<typeof projects>;
export type ProjectInsert = InferInsertModel<typeof projects>;
