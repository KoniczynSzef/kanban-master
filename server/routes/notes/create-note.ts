import { db } from "@/database";
import { notes } from "@/database/schema";
import { InferInsertModel } from "drizzle-orm";
import { z } from "zod";

export const createNoteSchemaWithUserId = z.object({
    userId: z.string(),
    title: z.string(),
    content: z.string().nullable(),
});

export const createNoteSchema = createNoteSchemaWithUserId.omit({
    userId: true,
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

export async function createNote(
    userId: string,
    title: string,
    content: string | null
) {
    const note: InferInsertModel<typeof notes> = {
        title: title,
        content: content,
        authorId: userId,
    };

    await db.insert(notes).values(note);
}
