import { db } from "@/database";
import { teams, usersToTeams } from "@/database/schema";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

export async function createTeam(userId: string, data: CreateTeamSchema) {
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
