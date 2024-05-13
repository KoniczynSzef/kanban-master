import { describe, test, expect } from "bun:test";

import { getPropsByStep } from "@/utils/dashboard/get-props-by-step";

describe("getPropsByStep function", () => {
    test("should return teamRole for step zero", () => {
        const props = getPropsByStep(0);

        expect(props).toBe("teamRole");
    });

    test("should return teamChatLink for step one", () => {
        const props = getPropsByStep(1);

        expect(props).toBe("teamChatLink");
    });

    test("should return name and description for step two", () => {
        const props = getPropsByStep(2);

        expect(props).toBeArray();
    });

    test("should return teamColor for step three", () => {
        const props = getPropsByStep(3);

        expect(props).toBe("teamColor");
    });

    test("should return teamRole for any other step", () => {
        const props = getPropsByStep(4);

        expect(props).toBe("teamRole");
    });
});
