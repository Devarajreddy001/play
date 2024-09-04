
const { test, expect } = require('@playwright/test')

test('authenticationurl', async ({ page }) => {

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);


})
test('authentication', async ({browser}) => {

    const context = await browser.newContext({

        httpCredentials:{
            username: 'admin',
            password:'admin'

        }
    });
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);


})


test('globallevel', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);


})