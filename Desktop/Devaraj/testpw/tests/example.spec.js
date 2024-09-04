// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('has title', function ({page}){

   page.goto('https://fund.gradright.com');
 // Capture the storage state
  // const storageState = await context.storageState();

  // console.log('Cookies:', storageState);
 
    const sessionId =  page.evaluate(() => {
    return sessionStorage.getItem('u_scsid'); // Adjust the key name as necessary
  });

  console.log('Captured Session ID:', sessionId);

  // Expect a title "to contain" a substring.
  expect(page).toHaveTitle(/FundRight/);
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
