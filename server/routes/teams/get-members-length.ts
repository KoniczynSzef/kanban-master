import { db } from "@/database";
import { usersToTeams } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getMembersLength(teamId: string) {
    return await db.query.usersToTeams.findMany({
        where: eq(usersToTeams.teamId, teamId),
    });
}
