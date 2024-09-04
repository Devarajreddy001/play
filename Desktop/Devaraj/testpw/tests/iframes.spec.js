
const { test, expect } = require('@playwright/test');
const { firefox, chromium } = require('@playwright/test');


test('multipletabs', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
   
    // let page1 = await context.newPage();
    
    await page.goto("https://select.gradright.com/signup");

    await page.waitForLoadState()
   
    await page.locator("//*[text()=' privacy policy ']").click();
    const  pagePromise = await page.waitForEvent('popup');
    const page1 = await pagePromise;


    await page1.locator("//*[@id='signup']").hover();
    await page1.locator("(//*[@class='dropdown-item blue'])").click();
    await page.waitForTimeout(3000);
    await page.bringToFront();
})

test('multiple tabs scenario2 without defining individual page', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
 await page.goto("https://select.gradright.com/signup");

    await page.waitForLoadState()
   
    await page.locator("//*[text()=' privacy policy ']").click();
  
       await page.locator("//*[@id='signup']").hover();
    await page.locator("(//*[@class='dropdown-item blue'])").click();

    const [previousPage, currentPage] = await context.pages();
    await page.waitForTimeout(5000);
    await previousPage.bringToFront();
    
})

test('multiple windows', async () => {
    const chromiumBrowser = await chromium.launch();
    const chromeBrowser2 = await chromium.launch();
    const chromeContext = await chromiumBrowser.newContext();
    const chromeContext2 = await chromeBrowser2.newContext();
    const chromePage = await chromeContext.newPage();
    const chromePage2 = await chromeContext2.newPage();

    await chromePage.goto("https://select.gradright.com/signup")
    await chromePage.pause();
    await chromePage2.goto("https://ndis.gov.au/");
    await chromePage2.waitForTimeout(4000);
    await chromePage2.bringToFront();
    await chromePage2.locator("//*[text()='Understanding the NDIS']").hover();
     await chromePage2.waitForTimeout(4000);

})

test('iframe scenario1 using name and url', async () => {
        const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_frameborder");
    await page.waitForLoadState('domcontentloaded');

   const text=await page.frame({ url: 'https://www.w3schools.com/html/demo_iframe.htm' }).locator('h1').innerText();

    console.log(text);

})

test('iframe scenario2 using framelocator', async () => {
       const browser =  chromium.launch();
    const context =  browser.newContext();
    const page = context.newPage();
     page.goto("https://ui.vision/demo/webtest/frames/")
    const inputBox = page.frameLocator('//*[@src="frame_1.html"]').locator('//*[@name="mytext1"]');
     inputBox.fill("arun")
     page.waitForTimeout(2000);

    
})