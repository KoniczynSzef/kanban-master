import { db } from "@/database";
import { usersToTeams } from "@/database/helper-tables";
import { teams, users } from "@/database/schema";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { eq } from "drizzle-orm";

export async function createTeam(userId: string, data: CreateTeamSchema) {
    const doesUserExist = await db.query.users.findFirst({
        where: eq(users.id, userId),
    });

    if (!doesUserExist) {
        return null;
    }

    const [team] = await db
        .insert(teams)
        .values({
            ...data,
            ownerId: userId,
        })
        .returning();

    await db
        .insert(usersToTeams)
        .values({
            userId,
            teamId: team.id,
        })
        .returning();

    return team;
}
