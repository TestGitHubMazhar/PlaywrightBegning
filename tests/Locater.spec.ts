import {test,expect} from "@playwright/test"
//---------------------getByRole---------------------
test('getByRole',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('textbox',{name:'name'}).fill('syed mazharali')
    await page.waitForTimeout(5000)
})
//---------------------getByText----------------------
test('getByText',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByText('START',{exact:true}).click();
    await page.waitForTimeout(5000);

})
//-------------------getByLabel------------------------
test('GetByLabel',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByLabel('Address:').fill('Syed Mazhar Ali')

})
//--------------------getByPlaceHolder------------------
test('getByLabel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByPlaceholder('Enter Phone').fill('9503217290');
    await page.waitForTimeout(5000)
})
//--------------------getByAltText------------------------
// test('getByAltText',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.getByAltText('')
//})
//--------------------getByAltText------------------------
test.only('getByAltText',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const title= await page.title()
    
console.log(title)
})