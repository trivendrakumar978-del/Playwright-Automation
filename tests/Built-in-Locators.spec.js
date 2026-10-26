import { test, expect } from '@playwright/test';

test('Built-In-Locators', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await page.getByRole('link', { name: 'Signup / Login' }).click();

    console.log(await page.title());
    console.log(await page.url());

    console.log( await page.getByRole('heading', {name: 'Login to your account' }).innerText());

    // Signup form
    await page.locator('[data-qa="signup-name"]').fill('jcsdbdr');

    await page.locator('[data-qa="signup-email"]').fill('Pcdvd123@gmail.com');

    await page.locator('[data-qa="signup-button"]').click();

    // Wait + assertion
    await expect(page).toHaveURL(/signup/);

    console.log(await page.getByRole('heading', {name: 'Enter Account Information'}).innerText() );
    await page.getByLabel('Mr.').check();
    await page.locator('[data-qa="name"]').fill('jcsdbdr');
    console.log(await page.locator('[data-qa="email"]').inputValue());
    await page.locator('[ data-qa="password"]').fill('jcsd43453jhbjhbdr');    
    await page.getByLabel('Day').selectOption({ label: '15' });
    await page.getByLabel('Month').selectOption({ label: 'August' });
    await page.getByLabel('Year').selectOption({ label: '1998' });
    await page.getByRole('checkbox', {name: 'Sign up for our newsletter!'}).check();
    console.log(await page.getByRole('heading', {name: 'Address Information'}).innerText() );


});