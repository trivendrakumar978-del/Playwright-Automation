import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    const signUpbtn = await page.getByRole('link', { name: ' Signup / Login' });

    await expect(signUpbtn).toBeVisible();
    await signUpbtn.click();
    const userName = await page.getByRole('textbox', { name: 'Name' });
    await expect(userName).toBeVisible();
    await userName.fill('nkfkfefoe')
    const emailAddress = await page.getByRole('textbox', { name: 'Email' }).first();
    await expect(emailAddress).toBeVisible
    emailAddress.fill('njfniie212@gmail.com')
    await page.getByRole('button', { name: 'Signup' }).click();
    



})