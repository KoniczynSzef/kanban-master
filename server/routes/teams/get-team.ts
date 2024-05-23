import { db } from "@/database";
import { teams } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getTeam(teamId: string) {
    return await db.query.teams.findFirst({
        where: eq(teams.id, teamId),
    });
}
