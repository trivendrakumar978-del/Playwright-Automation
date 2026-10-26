const { test, expect } = require('@playwright/test');

test('Open Google page and check title', async ({ page }) => {

    // test code will go here

    await page.goto("https://www.google.com");

    const pageTitle = await page.title();
    console.log("page Title is:", pageTitle);

    const pageUrl = await page.url();
    console.log("page url is:", pageUrl);

    await expect(page).toHaveTitle(/Google/);
});