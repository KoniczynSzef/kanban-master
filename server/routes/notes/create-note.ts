import { db } from "@/database";
import { notes } from "@/database/schema";
import { NoteInsert } from "@/types/models/note-model";
import { createNoteSchema } from "@/types/schemas/note/create-note-schema";
import { z } from "zod";

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

export async function createNote(userId: string, content: string) {
    const note: NoteInsert = {
        content: content,
        authorId: userId,
    };

    await db.insert(notes).values(note);
}
