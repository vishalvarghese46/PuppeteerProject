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
    // once selected we goto the setting  in the top menu ..
    await page.waitForSelector("#top-menu");  // wait until menu contains top menu
    await page.click("#config-item");  // clicking on the setting Icon button
    // then select "gateays "  on the left menu .
    await page.waitForSelector(".leftmenu");    // wait until left menu loads.
    await page.click("#gateways-item a");  // click on the gateway item
    // creating new gateway
    await page.waitForSelector("#new-gateway"); // waiting for the new gateway button
    await page.click("button#new-gateway");  //  clicking on the new gateway button .
    // selecting weather gateway
    await page.waitForSelector("button[data-type='weather']");// waiting for the button that represents weather field
    await page.click("button[data-type='weather']"); // click on the weather icon
    await page.waitForSelector("button#next-button"); // waiting for the next button .
    await page.click("button#next-button");  // once clicked moved to the next page .
    // moving to next page
     /*
     * TODO : - need to create a custom function where data can be created .
     *
     * */
      // filling the names
      await page.waitForSelector("#name");
      await page.type("#name", "test1");

      await page.waitForSelector(".select2-input") ;
      await page.type(".select2-input", "united kingdom");

      // TODO : need to figure out dropdows.
      await page.waitForSelector("#postcode");
      await page.type("#postcode", "CF24");

// Wait until the screen changes and a node matching
// the selector #logged-in-successfully appears,
// at which point we know the login was successful
    //await page.waitForSelector("#logged-in-successfully");
    //await browser.close();
});


console.log( puppeteer );

