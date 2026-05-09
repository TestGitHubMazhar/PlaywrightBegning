import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('syedmazharali19892gmail.com');
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('N@ukri@89');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
});