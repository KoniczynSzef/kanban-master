import { teams } from "@/database/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Team = InferSelectModel<typeof teams>;
export type TeamInsert = InferInsertModel<typeof teams>;
