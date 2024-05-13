import { describe, test, expect } from "bun:test";

import { hexToRgb } from "@/utils/dashboard/hex-to-rgb";

describe("hexToRgb function", () => {
    test("should return rgb(255, 255, 255) for #ffffff", () => {
        const rgb = hexToRgb("#ffffff");

        expect(rgb).toBe("rgb(255, 255, 255)");
    });

    test("should return rgb(0, 0, 0) for #000000", () => {
        const rgb = hexToRgb("#000000");

        expect(rgb).toBe("rgb(0, 0, 0)");
    });

    test("should return rgb(255, 0, 0) for #ff0000", () => {
        const rgb = hexToRgb("#ff0000");

        expect(rgb).toBe("rgb(255, 0, 0)");
    });

    test("should return rgb(0, 255, 0) for #00ff00", () => {
        const rgb = hexToRgb("#00ff00");

        expect(rgb).toBe("rgb(0, 255, 0)");
    });

    test("should return rgb(0, 0, 255) for #0000ff", () => {
        const rgb = hexToRgb("#0000ff");

        expect(rgb).toBe("rgb(0, 0, 255)");
    });
});
