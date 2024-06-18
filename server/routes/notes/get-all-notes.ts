import { db } from "@/database";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getAllNotes(userId: string) {
    const fetchedNotes = await db.query.notes.findMany({
        where: eq(notes.authorId, userId),
    });

    return fetchedNotes;
}
