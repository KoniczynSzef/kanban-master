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

    test("should return an error message if a team role is not selected", () => {
        const { message, toastType } = createProperToastMessage("teamRole", {
            ...formData,
            // @ts-expect-error - intentionally setting to empty string
            teamRole: "",
        });

        expect(message).toBe("Please select a role!");
        expect(toastType).toBe("error");
    });

    test("should return a success message if a team chat link is provided", () => {
        const { message, toastType } = createProperToastMessage(
            "teamChatLink",
            formData
        );

        expect(message).toBe("Team chat link provided!");
        expect(toastType).toBe("success");
    });

    test("should return an error message if a team chat link is not provided", () => {
        const { message, toastType } = createProperToastMessage(
            "teamChatLink",
            {
                ...formData,
                teamChatLink: undefined,
            }
        );

        expect(message).toBe("Please provide a team chat link!");
        expect(toastType).toBe("error");
    });

    test("should return a success message if a team color is provided", () => {
        const { message, toastType } = createProperToastMessage(
            "teamColor",
            formData
        );

        expect(message).toBe("Color provided!");
        expect(toastType).toBe("success");
    });

    test("should return an error message if a team color is not provided", () => {
        const { message, toastType } = createProperToastMessage("teamColor", {
            ...formData,
            teamColor: "",
        });

        expect(message).toBe("Please provide a color for team!");
        expect(toastType).toBe("error");
    });

    test("should return a success message where name and description are provided", () => {
        const { message, toastType } = createProperToastMessage(
            ["name", "description"],
            formData
        );

        expect(message).toBe("Beautiful description!");
        expect(toastType).toBe("success");
    });

    test("should return an error message if name is not provided", () => {
        const { message, toastType } = createProperToastMessage(
            ["name", "description"],
            {
                ...formData,
                name: "",
            }
        );

        expect(message).toBe("Please provide a name for team!");
        expect(toastType).toBe("error");
    });

    test("should return an error message if description is not provided", () => {
        const { message, toastType } = createProperToastMessage(
            ["name", "description"],
            {
                ...formData,
                description: "",
            }
        );

        expect(message).toBe("Please provide a description for team!");
        expect(toastType).toBe("error");
    });
});
