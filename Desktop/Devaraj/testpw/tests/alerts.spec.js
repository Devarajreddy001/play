
const { test, expect } = require('@playwright/test')

test('alert with ok', async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling alert handling
    
    page.on('dialog', async (dailog) => {
        expect(dailog.type()).toBe('alert');
        expect(dailog.message()).toContain('I am an alert box!')
  
        await dailog.accept();
        
    })

    await page.click("//button[@onclick='myFunctionAlert()']");
    await page.waitForTimeout(3000);
     
})

test('confirmation with ok and cancel', async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling alert handling
    
    page.on('dialog', async (dailog) => {
        expect(dailog.type()).toBe('confirm');
        expect(dailog.message()).toContain('Press a button!')
   await page.waitForTimeout(3000);
        await dailog.dismiss();
        
    })

    await page.click("//button[@onclick='myFunctionConfirm()']");
    await page.waitForTimeout(3000);
    await expect(page.locator("//*[@id='demo']")).toHaveText('You pressed Cancel!')
     
})

test('promt dailog with input', async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling alert handling
    
    page.on('dialog', async (dailog) => {
        expect(dailog.type()).toBe('prompt');
        expect(dailog.message()).toContain('Please enter your name:')
        expect (dailog.defaultValue()).toContain('Harry Potter')
      
        await page.waitForTimeout(3000);
        await dailog.type('jhon')
        await dailog.accept();
    })

    await page.click("//button[@onclick='myFunctionPrompt()']");
    await page.waitForTimeout(3000);
    await expect(page.locator("//*[@id='demo']")).toHaveText('Hello jhon! How are you today?')
     
})