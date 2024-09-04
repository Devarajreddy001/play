
const { test, expect } = require('@playwright/test');
const { firefox } = require('@playwright/test')


test('frames', async({})=>{
    
     const browser = await firefox.launch({headless:true});
    const context = await browser.newContext();
    const page = await context.newPage();

    
    //await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_height_width")
    await page.goto("https://ui.vision/demo/webtest/frames/");// frame locator site


    // to capture total frames
    
//     const allframes = await page.frames()
    
//     console.log(allframes.length)

//     //captureusing name or url of the frame
//    // const frame1=await page.frame('name')//name of the frame

//     const frame1 = await page.frame({ url: 'https://www.w3schools.com/html/demo_iframe.htm' })
    
//     const test2 = await frame1.locator('h1').innerText();
    //     console.log(test2);
    
    const frame2 = await page.frameLocator('//*[@src="frame_1.html"]');
    
    const text3 = await frame2.locator('//*[@name="mytext1"]').fill("dev");
    await page.waitForTimeout(3000);

})