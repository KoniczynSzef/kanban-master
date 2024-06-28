import { NOTES_LIMIT } from "@/constants/notes-limit";
import { db } from "@/database";
import { notes } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getPaginatedNotes(authorId: string, page: number) {
    const offset = (page - 1) * NOTES_LIMIT;

    const fetchedNotes = await db.query.notes.findMany({
        where: eq(notes.authorId, authorId),
        offset,
    });

    return fetchedNotes;
}
