import{test,expect} from '@playwright/test'
test('first test cases',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
 const   title =await page.title()
 console.log('Title is ',title)
//------------------------Enter Filed Name--------------------------------
await page.getByRole('textbox',{name:'name'}).fill('syed Mazhar ali')
await page.getByRole('textbox',{name:'email'}).fill('syed@gmail.com')
await page.getByRole('textbox',{name:'phone'}).fill('9579962512')
await page.getByRole('textbox',{name:'Address:'}).fill('jamil coloneye walgoan road amravati')

 //------------------check with radio button---------------------------

// const maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
// await maleRadio.waitFor();
// await maleRadio.check();
await page.locator("//label[text()='Male']").check();
await page.waitForTimeout(5000)    
 const chk=await page.getByRole('radio',{name:'Female'});
 chk.check()
 


 

 
 console.log('Radio is check:',await chk.isChecked())
 await expect(chk).toBeEnabled()



//---------------------check and uncheck with input box-----------------------

 const itIsChecked=await page.getByRole('checkbox',{name:'Sunday'});
 itIsChecked.check();

 //---------------------It assertion------------------------------------------
await expect(itIsChecked).toBeChecked();
await page.waitForTimeout(5000)   
await page.getByRole('checkbox',{name:'Sunday'}).uncheck();

//-------------------------checck  -------------------------------------
const dropDown =await page.getByRole('combobox',{name:'country'})
dropDown.click();
await page.waitForTimeout(5000);

//-------------------------select color-------------------------------
const selectColor=await page.getByRole('listbox',{name:'colors'})
await selectColor.selectOption(['Red','Green']);

   
//--------------------------Hover====================================
await page.getByRole('button',{name:'Point Me'}).hover();
await expect(page).toHaveTitle('Automation Testing Practice');
await expect(page.getByRole('button',{name:'Point Me'})).toBeEnabled(); 
 
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com');  

 
//---------------------------------assertion-----------------------------
'START'
const btn=await page.getByRole('button',{name:'START'})
const rtn=await btn.isEnabled();

console.log('it should retun :',rtn);
const dis=await btn.isDisabled()
console.log(dis);
//-----------------------------------------------------------------








test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByText('Double-click to edit a todo Created by Remo H. Jansen Part of TodoMVC').click();
  await page.getByRole('link', { name: 'Repositories' }).click();
});


















// const dropdown = page.locator("//select[@id='country']");
// const options = dropdown.locator("option");

// const size = await options.count();

// for (let i = 0; i < size; i++) {
//     const text = (await options.nth(i).textContent())?.trim();

//     if (text?.includes('France')) {
//         await dropdown.selectOption({ label:text});
    
//         console.log('Found', text);
//         break;
//     }
// }


//await page.getByRole('combobox',{name:'country'}).selectOption('France')

 


 
}
)