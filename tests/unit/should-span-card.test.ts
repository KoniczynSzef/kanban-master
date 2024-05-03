import { shouldSpanCard } from "@/utils/should-span-card";
import { test, expect, describe } from "bun:test";

describe("shouldSpanCard", () => {
    test("should return false if the index is 0", () => {
        expect(shouldSpanCard(0)).toBe(false);
    });

    test("should return true if the index is 2", () => {
        expect(shouldSpanCard(1)).toBe(true);
    });

    test("should return true if the index is 3", () => {
        expect(shouldSpanCard(2)).toBe(true);
    });

    test("should return false if the index is 3", () => {
        expect(shouldSpanCard(3)).toBe(false);
    });
});
