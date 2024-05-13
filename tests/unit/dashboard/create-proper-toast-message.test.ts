import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import { createProperToastMessage } from "@/utils/dashboard/create-proper-toast-message";

import { describe, test, expect } from "bun:test";

const formData: CreateTeamSchema = {
    description: "description",
    name: "name",
    teamChatLink: "teamChatLink",
    teamColor: "teamColor",
    teamRole: "Frontend Developer",
};

describe("createProperToastMessage", () => {
    test("should return a success message if a team role is selected", () => {
        const { message, toastType } = createProperToastMessage(
            "teamRole",
            formData
        );

        expect(message).toBe("Role selected successfully!");
        expect(toastType).toBe("success");
    });
});
