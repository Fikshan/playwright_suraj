import {test,expect,Page,Browser,Locator,BrowserContext} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test('auth test', async()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page =  await browser.newPage();

    

    const username='admin';
    const password ='admin';
    const authHeader = 'Basic ' + btoa(username+':'+password);
    page.setExtraHTTPHeaders({Authorization : authHeader});


    await page.setDefaultTimeout(5000)
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await page.setDefaultTimeout(3000)
})