import { test, expect } from '@playwright/test';

test('Add product To Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

   page.fill('#username','standard_user');
   page.fill('#password','secret_sauce');
   page.click('#login-button');
   page.click('')








   
}
)