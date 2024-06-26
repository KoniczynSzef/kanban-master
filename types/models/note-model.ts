import { notes } from "@/database/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Note = InferSelectModel<typeof notes>;
export type NoteInsert = InferInsertModel<typeof notes>;
