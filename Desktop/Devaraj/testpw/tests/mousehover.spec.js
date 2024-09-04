
const { test, expect } = require('@playwright/test');

test('mousehover', async ({ page }) => {
    
    await page.goto("https://demo.opencart.com/");
    const desktop = await page.locator("//*[text()='Desktops']").hover();
    await page.waitForTimeout(3000);
    const mac = await page.locator("//*[text()='Mac (1)']").hover();
        await page.waitForTimeout(3000);
})

//rightclick
//get the locator and and add click action to  locator either left or right

test('rightclick', async ({ page }) => {
    
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button = await page.locator("(//*[text()='right click me'])[1]");
    await button.click({ button: 'right' });
    await button.click()
})

test('mouseboubleclick', async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    const button = await page.locator("//*[text()='Copy Text']");
    await button.dblclick();
    await page.waitForTimeout(3000);
    const f2 = await page.locator("//*[@id='field2']");

    await expect(f2).toHaveValue("Hello World!")
   
})

test('draganddrop', async ({ page }) => {
    
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    await page.waitForLoadState('domcontentloaded')
    const source = await page.locator("//*[@id='box5']");
    const targer = await page.locator("//*[@id='box107']")
    
    await source.dragTo(targer);
    await page.waitForTimeout(3000);
   
})

test('keyboard actions', async ({ page }) => {
    
    await page.goto("https://gotranscript.com/text-compare");
    await page.waitForLoadState('domcontentloaded')
    const source = await page.locator("//*[@name='text1']").fill('welcome to automation');
    await page.keyboard.press('Meta+A')
    await page.keyboard.press('Meta+C')
    await page.keyboard.down('Tab');
      await page.keyboard.up('Tab');
    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(3000);

    //Control A
    //control c
    //tab is 1 key
    //control v
    //press. down.up
    //meta + a
    // const targer = await page.locator("//*[@id='box107']")
    
    // await source.dragTo(targer);
    // await page.waitForTimeout(3000);
   
})