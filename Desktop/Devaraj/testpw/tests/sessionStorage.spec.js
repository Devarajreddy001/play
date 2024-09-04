
const { test, expect, chromium } = require('@playwright/test')

test('sessionid', async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://fund.gradright.com/");
    const mycookies = await page.context().cookies();
    console.log(mycookies);
    const sessionid = await page.evaluate(() => {
        
        return localStorage.getItem('session_id');

    })
    console.log(sessionid);
    await page.context().clearCookies();
    page.screenshot({ path:'test.png',fullPage:true})
})