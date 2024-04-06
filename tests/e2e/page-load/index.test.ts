import { expect, test } from "@playwright/test";

test("Home page load", async ({ page }) => {
    await page.goto("http://localhost:3000");
    expect(page.getByText("Not authenticated")).toBeVisible();
});
