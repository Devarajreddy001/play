const { test, chromium } = require('@playwright/test');

test('console', async ({ page }) => {
  // Set up event listener to capture console messages
  page.on('console', msgs => {
      //console.log(`Console ${msgs.type()}: ${msgs.text()}`);
        console.log(msgs.type());
      console.log(msgs.text());
  });

  // Navigate to the page
  await page.goto('https://select.gradright.com/signup');

});
