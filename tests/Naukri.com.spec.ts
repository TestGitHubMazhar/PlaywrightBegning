import { test, expect } from '@playwright/test';
import path from 'path';
test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/')
  
  await page.getByTitle('Jobseeker Login').click();
await page.locator('input[type="text"]').first()
  .fill('syedmazhar.it@gmail.com');
 
  await page.getByRole('textbox', { name: 'password' }).fill('N@ukri@89');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('img', { name: 'naukri user profile img' }).click();
  await page.getByRole('link', { name: 'View & Update Profile' }).click();
  await page.getByRole('button', { name: 'Update resume' }).click();
  
// tests\CV\Automtion _Mazhr_CV.pdf



const filePath = path.join(__dirname, 'CV', 'Automtion _Mazhr_CV.pdf');

const fileInput = page.locator('input[type="file"]').first();

  await fileInput.setInputFiles(filePath);
 
await page.getByAltText('naukri user profile img').click()

  await page.getByText('Logout').click()
});