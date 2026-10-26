import { test, expect } from '@playwright/test';

test('SignUp', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log('page Title is:',await page.title());
    console.log('page URL is:',await page.url());
   await page.locator('#menu-item-20').click();
   await page.locator('//a[text()="Test Login Page"]').click();
   await page.locator('#username').fill('student');
   await page.locator('#password').fill('Password123');
   await page.locator('#submit').click();
   console.log('message after submit is:',await page.locator('h1.post-title').innerText());


});