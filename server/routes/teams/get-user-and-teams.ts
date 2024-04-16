import { db } from "@/database";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema";

export async function getUserAndTeams(kindeId: string) {
    const data = await db.query.users.findFirst({
        where: eq(users.kindeId, kindeId),
        with: {
            usersToTeams: true,
        },
    });

    if (!data) {
        return null;
    }

    const teams = await db.query.teams.findMany({
        where: (teams, { inArray }) =>
            inArray(
                teams.id,
                data.usersToTeams.map((x) => x.teamId)
            ),
    });

    return {
        user: data,
        teams,
    };
}
