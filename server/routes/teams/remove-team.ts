import { db } from "@/database";
import { teams } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function removeTeam(userId: string, teamId: string) {
    if (!userId || !teamId) {
        throw new Error("User ID or Team ID is missing");
    }

    await db.delete(teams).where(eq(teams.id, teamId));
}
