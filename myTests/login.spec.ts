import {test,expect,Page,Browser,Locator} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test('Login Test', async() => {

    const browser:Browser = await chromium.launch({headless:false});
    const page:Page =await browser.newPage();
    await page.goto('https://pos.aksharatraining.in/pos/public/#');

    const emailid:Locator = await page.locator('#input-username');
    const password:Locator = await page.locator('#input-password');
    const goButton:Locator = await page.locator('//button[@class="btn btn-lg btn-primary"]')

    await emailid.fill('admin');
    await password.fill('pointofsale');
    await goButton.click();

    const title = await page.title()
    console.log("S kart | Powered by OSPOS 3.3.7:",title)
    
    await page.setDefaultTimeout(5000);
    await page.screenshot({path:'./screenshot/homepage.png'});
    expect(title).toEqual('S kart | Powered by OSPOS 3.3.7');

    browser.close();

    

});