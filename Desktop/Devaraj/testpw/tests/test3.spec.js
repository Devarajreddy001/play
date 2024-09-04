
const { test, expect } = require('@playwright/test');

test('thetest', async ({ page }) => {
    
    await page.goto("https://practice.expandtesting.com/shadowdom");
    const test = await page.$$("#my-btn");
    console.log(test.length);

    // const testing = await test.textContent();
    // console.log(testing);

    for (const elements of test){
        const mytest = await elements.textContent();
        console.log(mytest);
         
    }


   
})