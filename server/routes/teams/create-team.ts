import { db } from "@/database";
import { teams, users, usersToTeams } from "@/database/schema";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";

export async function createTeam(userId: string, data: CreateTeamSchema) {
    if (!(await getKindeServerSession().isAuthenticated())) {
        throw new Error("Unauthorized");
    }

    const doesUserExist = await db.query.users.findFirst({
        where: eq(users.id, userId),
    });

    if (!doesUserExist) {
        throw new Error("User not found");
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
