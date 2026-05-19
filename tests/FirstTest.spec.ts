//const {Hello, HelloWord} =require ('./function')
import {Hello,HelloWord} from './function'
import {test,expect} from '@playwright/test'
console.log(Hello())
test('This is First Test',async({page})=>{
    await  page.goto('https://www.google.com/?zx=1778926882494')
    await expect(page).toHaveTitle('Google')
}
)