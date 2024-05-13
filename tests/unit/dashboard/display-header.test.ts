import { describe, test, expect } from "bun:test";

import { displayHeader } from "@/utils/dashboard/display-header";

describe("displayHeader on welcome page", () => {
    test("should return a welcome header for step zero", () => {
        const header = displayHeader(true, 0, "name");

        expect(header.title).toBe("Welcome to the dashboard, name");
        expect(header.description).toBe(
            "Tell us more about yourself by adding your common role"
        );
        expect(header.buttonText).toBe("Save Role");
        expect(header.required).toBe(true);
        expect(header.formFieldText).toBe("Select your role in the team");
    });

    test("should return a team chat link header for step one", () => {
        const header = displayHeader(true, 1, "name");

        expect(header.title).toBe("Add team chat link");
        expect(header.description).toBe(
            "Add a link to your team chat like Slack, Discord, etc. to keep your team in sync and navigate to it easily from the dashboard"
        );
        expect(header.buttonText).toBe("Add Link");
        expect(header.required).toBe(false);
        expect(header.formFieldText).toBe(
            "Add link to team chat like Slack, Discord, etc."
        );
    });

    test("should return a name and description header for step two", () => {
        const header = displayHeader(true, 2, "name");

        expect(header.title).toBe("Name and describe your team");
        expect(header.description).toBe(
            "Give your team a name and describe it to help team members understand its purpose"
        );
        expect(header.buttonText).toBe("Continue");
        expect(header.required).toBe(true);
        expect(header.formFieldText).toBe(
            "Describe your team and provide a name for it"
        );
    });

    test("should return color header for step three", () => {
        const header = displayHeader(true, 3, "name");

        expect(header.title).toBe("Select your team color");
        expect(header.description).toBe(
            "Choose a color that represents your team and helps you easily identify it"
        );
        expect(header.buttonText).toBe("Select Color");
        expect(header.required).toBe(true);
        expect(header.formFieldText).toBe("Select a color for your team");
    });
});
