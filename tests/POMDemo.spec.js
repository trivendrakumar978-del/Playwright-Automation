
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
   const errMsg= await login.getErrorMessage();
   console.log('Error Msg',errMsg);
await expect(login.errormsg).toHaveText('Epic sadface: Username and password do not match any user in this service');

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

    //get the item name
    const itemName=await addToCart.getItemName();
   console.log('Count:', itemName.length);
console.log('ProductsNames:', itemName);
    // Add product to cart
    await addToCart.ClickAddToCartBtn();

    // Verify cart count
    const cartCount=await addToCart.getCartCount();
    console.log('Cart Count:', cartCount);
    await expect(addToCart.shoppingCartBadge).toHaveText('1');
    //Remove Product from Cart
    await addToCart.RemoveFromCartBtn();

});
