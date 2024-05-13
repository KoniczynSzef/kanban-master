import { describe, test, expect } from "bun:test";

import { createTeam } from "@/server/routes/teams/create-team";
import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";

const dataToInsert: CreateTeamSchema = {
    description: "description",
    name: "name",
    teamChatLink: "teamChatLink",
    teamColor: "teamColor",
    teamRole: "Frontend Developer",
};

describe("createTeam", () => {
    test("should create a team successfully", async () => {
        const team = await createTeam("userId", dataToInsert);
        expect(team).toBeNull();
    });
});
