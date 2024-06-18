import { db } from "@/database";
import { notes } from "@/database/schema";
import { InferInsertModel } from "drizzle-orm";

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
