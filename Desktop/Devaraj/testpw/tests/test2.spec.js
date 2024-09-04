const { test, expect } = require('@playwright/test');

test('links', async ({ page }) => {
    
    await page.goto("https://fund.gradright.com");
    await page.getByText(' Check Loan Offers ').click();
    await page.waitForTimeout(3000);
    await page.waitForSelector("(//*[@class='q-field__native row items-center'])[2]");

    //await page.locator("(//*[@class='q-field__native row items-center'])[2]").click();
    // Using locator with XPath
    await page.waitForSelector("//*[@role='listbox']");
    const element = await page.locator("//*[@role='listbox']");
    element.selectOption('October-2023')

    // // Print number of elemenats found
    // console.log(`Number of elements found: ${elements.length}`);
    // console.log(elements);

    // await expect(elements).toContain('February-2023');

    // if (elements.length === 0) {
    //     console.log("No elements found.");
    // } else {
    //     for (const element of elements) {
    //         const text = await element.textContent();
    //         console.log(text.trim()); // Trim to remove any unnecessary whitespace
    //     }
    // }
});
