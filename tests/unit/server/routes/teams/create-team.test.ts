import { describe, test, expect } from "bun:test";

import { createTeam } from "@/server/routes/teams/create-team";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

const dataToInsert: CreateTeamSchema = {
    description: "description",
    name: "name",
    teamChatLink: "teamChatLink",
    teamColor: "teamColor",
    teamRole: "Frontend Developer",
};

describe("createTeam", () => {
    test("should return null if id user with that id is not found", async () => {
        const team = await createTeam("userId", dataToInsert);
        expect(team).toBeNull();
    });

    test("should return team object if user is found", async () => {
        const user = await db.query.users.findFirst({
            where: eq(users.id, process.env.TEST_USER_ID as string),
        });

        expect(user).not.toBeNull();

        if (!user) {
            throw new Error("User not found");
        }

        const team = await createTeam(user.id, dataToInsert);

        expect(team).toHaveProperty("name");
        expect(team).toHaveProperty("description");
        expect(team).toHaveProperty("teamChatLink");
        expect(team).toHaveProperty("teamColor");
    });
});
