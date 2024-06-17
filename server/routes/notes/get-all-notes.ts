import { db } from "@/database";
import { notes, users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getAllNotes(userId: string) {
    const user = await db.query.users.findFirst({
        where: eq(users.kindeId, userId),
    });

    if (!user) {
        throw new Error("User not found");
    }

    const fetchedNotes = await db.query.notes.findMany({
        where: eq(notes.authorId, user.id),
    });

    return fetchedNotes;
}
