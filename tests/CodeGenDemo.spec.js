import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Kishanbabu');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('babu123@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('heading', { name: 'OR' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('babu123@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('jbdfknfbjvkdvk');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Your email or password is').click();
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
  await page.getByRole('heading', { name: 'Login to your account' }).click();
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  await expect(page.locator('div').nth(3)).toBeVisible();
});