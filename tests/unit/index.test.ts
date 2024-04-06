import { test, expect } from "bun:test";
import { greet } from "@/server/data";

test("greet", () => {
    expect(greet("world")).toBe("Hello, world!");
});
