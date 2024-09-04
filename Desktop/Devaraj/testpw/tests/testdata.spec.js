require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { firefox, chromium } = require('@playwright/test');
const Module1testdata = require('../datafolder/google.json');

console.log(Module1testdata);


for (const [key,value] of Object.entries(Module1testdata.Module1testdata)) {
    test(`the test data ${value}`, async ({page})=> {
     
 console.log(Module1testdata.skill1);

    await page.goto(process.env.URL);
    await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(value);
        await page.waitForTimeout(2000);
    console.log(value);


 })
    
}

test('the test data', async ({page})=> {
     
 console.log(Module1testdata.skill1);

    await page.goto(process.env.URL);
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill(Module1testdata.Module1testdata.skill1);
    console.log(Module1testdata.skill1);


 })