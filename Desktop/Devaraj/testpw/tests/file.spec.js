const { test, expect } = require('@playwright/test');
const { firefox, chromium } = require('@playwright/test');
const { channel } = require('diagnostics_channel');

test('multiple file', async ({ page }) => {
    
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("//*[@id='filesToUpload']").setInputFiles(['uploadfiles/tests/test1.png','uploadfiles/tests/test2.png']);

    await page.waitForTimeout(6000);


    await page.locator("//*[@id='filesToUpload']").setInputFiles([]);
      await page.waitForTimeout(6000);
})


test('download file', async ({page}) => {

    
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");

    await page.locator("//*[@id='textbox']").type("the test");

    await page.locator("//*[@id='create']").click();
    const downloadPromise = page.waitForEvent('download');
  await page.locator("//*[text()='Download']").click();

    const download = await downloadPromise;
    await download.saveAs('/Users/pandiguntadevarajreddy/Desktop/Devaraj/testpw/uploadfiles/tests'+download.suggestedFilename())
})