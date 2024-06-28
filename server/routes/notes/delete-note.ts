import { db } from "@/database";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function deleteNote(id: string) {
    await db.delete(notes).where(eq(notes.id, id));
}
