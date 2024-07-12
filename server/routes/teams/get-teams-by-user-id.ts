import { db } from "@/database";
import { eq } from "drizzle-orm";
import { teams, usersToTeams } from "@/database/schema";
import { Team } from "@/types/models/team-model";

export async function getTeamsByUserId(userId: string) {
    const data = await db.query.usersToTeams.findMany({
        where: eq(usersToTeams.userId, userId),
    });

    if (!data) {
        return [];
    }

    if (data.length === 0) {
        return [];
    }

    const newTeams: Team[] = [];

    for (const userToTeam of data) {
        const team = await db.query.teams.findFirst({
            where: eq(teams.id, userToTeam.teamId),
        });

        if (team) {
            newTeams.push(team);
        }
    }

    return newTeams;
}
