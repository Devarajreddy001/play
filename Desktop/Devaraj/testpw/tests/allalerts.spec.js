const { test, expect } = require('@playwright/test')

test('alert with ok', async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling alert handling
    
    page.on('dialog', async (dailog) => {

        switch (dailog.type()) {
            case 'alert':
               await expect(dailog.message()).toContain('I am an alert box!')
                await dailog.accept();
                break;
            
            case 'confirm':
               await expect(dailog.message()).toContain('Press a button!')
                await page.waitForTimeout(3000);
                await dailog.dismiss();
                break;
            
            case 'prompt':
               await  expect(dailog.message()).toContain('Please enter your name:')
               await  expect(dailog.defaultValue()).toContain('Harry Potter')
                await page.waitForTimeout(2000);
                await dailog.accept('jhon');
                break;
        }
    
    })

    await page.click("//button[@onclick='myFunctionAlert()']");
    await page.waitForTimeout(3000);

    await page.click("//button[@onclick='myFunctionConfirm()']");
    await page.waitForTimeout(3000);
    await expect(page.locator("//*[@id='demo']")).toHaveText('You pressed Cancel!')

    await page.click("//button[@onclick='myFunctionPrompt()']");
    await page.waitForTimeout(3000);
    await expect(page.locator("//*[@id='demo']")).toHaveText('Hello jhon! How are you today?')
     
})