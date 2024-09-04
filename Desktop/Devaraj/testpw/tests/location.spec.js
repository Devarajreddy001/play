const { test, expect } = require('@playwright/test');

test('location', async ({ page }) => {
    
    await page.goto('https://www.bing.com/maps/?cp=17.554363%7E78.359858&lvl=16.3')
    await page.locator("//*[@title='Locate me']").click();
    await page.waitForTimeout(6000);
})


test('visual comparison', async ({ page }) => {
    
    await page.goto('https://www.google.com/')
    expect(await page.screenshot()).toMatchSnapshot('fundright.png');
    await page.waitForTimeout(6000);
})
