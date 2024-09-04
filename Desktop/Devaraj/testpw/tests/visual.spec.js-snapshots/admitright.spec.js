
const { test, expect,chromium } = require('@playwright/test');


test('login admit right', async()=> {

     const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
     const page2 = await context.newPage();
    
    await page1.goto('https://admitright.gradright.com/auth/signin')
    await page1.getByPlaceholder('Email address *').nth(2).fill('superadmin@yopmail.com');
    // await page1.locator('input[slot="input"]').fill('the test');
    await page1.locator('vaadin-button[tabindex="0"]').click();
   const printtext= await page1.locator('descope-text[id="4C3rm3qJRV"]').filter({ hasText: '' }).innerText()
    await page1.waitForTimeout(3000);
    console.log(printtext);
    await page2.goto('https://yopmail.com/');
     await page2.waitForSelector("//*[@placeholder='Enter your inbox here']")
    const emailInput = await page2.locator("//*[@placeholder='Enter your inbox here']");
    await emailInput.fill("superadmin@yopmail.com");
    await emailInput.press('Enter');
    await page2.waitForTimeout(3000);

    const frame1 = await page2.frame('ifinbox').locator("(//*[text()='AdmitRight'])[1]").click();

    const frame2 = await page2.frame('ifmail');
    const productRow = await frame2.locator('table tr').getByText(`${printtext}`).first().click();
   
    await page2.waitForTimeout(10000);
    // console.log(frame2);
    await page1.bringToFront();
    await page1.waitForTimeout(3000);

    const elements = await page1.$$("//*[@class='base-table-column']");
    const universityName = 'Miami';
    console.log(elements.length);
    for (const element of elements) {
        
        const text = await element.innerText(); // Await the innerText call
        console.log(text);

        if (text.includes(universityName)) {
            const button = await element.$("//following::button[1]");
            if (button) {
                await button.click();
                break;
            }
        }

        await page1.waitForTimeout(3000);
    }
    
    



  
});