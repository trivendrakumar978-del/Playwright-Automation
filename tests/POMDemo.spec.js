
import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.js';
import Inventory from '../Pages/Inventory.js';

test('Valid Login Test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.openWebsite();
    await login.Login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

    console.log('Login successful');
});

test('Invalid Login Test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.openWebsite();
    await login.Login('wrong_user', 'wrong_password');

    await expect(login.errormsg)
        .toContainText('Username and password do not match');

    await login.getErrorMessage();
});

test('Add to Cart', async ({ page }) => {

    const login = new LoginPage(page);
    const addToCart = new Inventory(page);

    // Login first
    await login.openWebsite();
    await login.Login('standard_user', 'secret_sauce');

    // Verify Products heading
    await expect(addToCart.Heading).toHaveText('Products');

    // Verify Swag Labs logo
    await expect(addToCart.pageTitle).toHaveText('Swag Labs');

    // Add product to cart
    await addToCart.ClickAddToCartBtn();

});
