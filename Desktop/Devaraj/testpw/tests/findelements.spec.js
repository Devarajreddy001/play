
const { test, expect, chromium } = require('@playwright/test');
const { firefox } = require('@playwright/test');


test('findelements', async ({ page }) => {
    
    await page.goto("https://fund.gradright.com/");
    await page.locator("//*[text()=' Check Loan Offers ']").click();
    await page.waitForSelector("(//*[@class='q-field__native row items-center'])[2]");
    await page.locator("(//*[@class='q-field__native row items-center'])[2]").click();
    await page.waitForSelector("//*[@role='option']")
    const elements = await page.locator("//*[@role='option']").allInnerTexts()
    
    console.log(elements);
    
})

test('frames', async () => {
    
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    await page.waitForLoadState()
    await page.getByRole('link', { name: ' HTML Iframes' }).click();

    await page.locator("(//*[text()='HTML Iframes'])[2]").click();

    await page.locator("(//*[text()='Try it Yourself »'])[1]").click()

    const pagePromise = await page.waitForEvent('popup');

    const page2 = pagePromise;



    const iframe = await page2.frameLocator("//iframe[@title='Iframe Example']");

    const text = await page.$('.h');

    console.log(text)
    



});

test('shadowDom', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/shadowdom");
    const elements = await page.$$('#my-btn');
    console.log(elements.length);

    for (const text of elements) {
        
        const printtext = await text.textContent();
        console.log(printtext);
    }

})

test('multiple tabs', async ({ }) => {
  const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://select.gradright.com/signup")
    await page.waitForLoadState()
   
    await page.locator("//*[text()=' privacy policy ']").click()
      const pagePromise=await page.waitForEvent('popup');
    const page1 = await pagePromise;
    await page1.locator("//*[@id='signup']").hover();
    await page1.locator("(//*[@class='dropdown-item blue'])").click();
    await page.waitForTimeout(3000);
    await page.bringToFront();
})

test('multiplewindows', async ({ }) => {
    
    const browser = await firefox.launch();
    const context1 = await browser.newContext();
      const context2 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    await page1.goto("https://select.gradright.com/signup")
    //   await page1.waitForLoadState('domcontentloaded')
    await page2.goto("https://ui.vision/demo/webtest/frames")
    // await page2.waitForLoadState('domcontentloaded')
   
//     await page.locator("//*[text()=' privacy policy ']").click();

    await page1.bringToFront();
  
})