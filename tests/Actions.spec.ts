import {test,expect} from "@playwright/test"
test('actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    await page.getByRole('textbox',{name:'name'}).fill('enter nae');
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle('Automation Testing Practice')
})