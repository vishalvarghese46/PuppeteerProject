const puppeteer = require('puppeteer');

puppeteer.launch({headless: false}).then(async browser => {
    // same as puppeteer
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1000 });
    await page.goto('https://optimisedbuildings.dexcell.com/login.htm');   // going to the url the
    await page.type("input#username", "sujil@optimisedbuildings.com");
    await page.type("input[type='password']", "optimised1234");
    await page.click("button.btn"); // Click the login button
    await page.waitForSelector(".selection_container[id='3786']"); // waiting for dom element that has morrission url
    await page.click(".selection_container[id='3786']");  // click on the morrission url
    // once selected we goto the setting
    await page.waitForSelector("#top-menu");  // menu contains top menu
    await page.click("#config-item");  // clicking on the setting Icon button


// Wait until the screen changes and a node matching
// the selector #logged-in-successfully appears,
// at which point we know the login was successful
    //await page.waitForSelector("#logged-in-successfully");
    //await browser.close();
});


console.log( puppeteer );

