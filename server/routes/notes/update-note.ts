import { db } from "@/database";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function updateNote(id: string, content: string) {
    await db.update(notes).set({ content: content }).where(eq(notes.id, id));
}
