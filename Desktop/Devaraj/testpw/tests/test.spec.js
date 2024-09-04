
const { test, expect } = require('@playwright/test')

test('iframe', async ({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
  const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
  await page.waitForTimeout(3000)
    await iframe.locator("(//a[text()='java.applet'])[1]").click();
      // Iterate through child frames of the main frame
  const childFrames = page.frames();
  for (const frame of childFrames) {
    console.log('Frame name:', frame.name());
  }
   




})