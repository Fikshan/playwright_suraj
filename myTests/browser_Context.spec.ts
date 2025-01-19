import {test,expect,Page,Browser,Locator,BrowserContext} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test('Browser context', async() => {

 
    const browser:Browser = await chromium.launch({headless:false});

    //browserContext1
    const browserContext_1: BrowserContext= await browser.newContext();
    const page1:Page= await browserContext_1.newPage()

    //browserContext2
    const browserContext_2: BrowserContext= await browser.newContext();
    const page2:Page= await browserContext_1.newPage()
    
    //const page:Page =await browser.newPage();
    
    //browser1
    await page1.goto('https://pos.aksharatraining.in/pos/public/#');

    const emailid:Locator = await page1.locator('#input-username');
    const password:Locator = await page1.locator('#input-password');
    const goButton:Locator = await page1.locator('//button[@class="btn btn-lg btn-primary"]')

    await emailid.fill('admin');
    await password.fill('pointofsale');
    await goButton.click();

    const title = await page1.title()
    console.log("S kart | Powered by OSPOS 3.3.7:",title)
    
    await page1.setDefaultTimeout(5000);
    await page1.screenshot({path:'./screenshot/homepage.png'});
    expect(title).toEqual('S kart | Powered by OSPOS 3.3.7');

    //browser2
    await page2.goto('https://pos.aksharatraining.in/pos/public/#');

    const emailid1:Locator = await page2.locator('#input-username');
    const password1:Locator = await page2.locator('#input-password');
    const goButton1:Locator = await page2.locator('//button[@class="btn btn-lg btn-primary"]')

    await emailid1.fill('admin');
    await password1.fill('pointofsale');
    await goButton1.click();

    const title1 = await page1.title()
    console.log("S kart | Powered by OSPOS 3.3.7:",title)

    await page2.setDefaultTimeout(5000);
    await page2.screenshot({path:'./screenshot/homepage.png'});
    expect(title).toEqual('S kart | Powered by OSPOS 3.3.7');


    await browserContext_1.close();
    await browserContext_2.close();


    browser.close();

    

});