import { db } from "@/database";
import { eq } from "drizzle-orm";
import { teams, users } from "@/database/schema";
import { Team } from "@/types/models/team-model";

export async function getAllTeams(kindeId: string) {
    const data = await db.query.users.findFirst({
        where: eq(users.kindeId, kindeId),
        with: {
            usersToTeams: true,
        },
    });

    if (!data) {
        return null;
    }

    if (data.usersToTeams.length === 0) {
        return [];
    }

    const newTeams: Team[] = [];

    for (const userToTeam of data.usersToTeams) {
        const team = await db.query.teams.findFirst({
            where: eq(teams.id, userToTeam.teamId),
        });

        if (team) {
            newTeams.push(team);
        }
    }

    return newTeams;
}
