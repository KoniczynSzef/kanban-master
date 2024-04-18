import { expect, test } from "@playwright/test";

import "dotenv/config";

test("Click login button", async ({ page }) => {
    if (!process.env.AUTH_TEST_EMAIL) {
        throw new Error("AUTH_TEST_EMAIL is not set");
    }

    await page.goto("http://localhost:3000");
    await page.click("text=Login");

    expect(await page.title()).toBe("Sign in | kanmaster");
});

test("Click register button", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.click("text=Register");

    expect(await page.title()).toBe("Sign up | kanmaster");
});
