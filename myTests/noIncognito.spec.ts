import {test,expect,Page,Browser, BrowserContext} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';


test('No Incognito Test', async() =>{
    
    
    
    const browser:BrowserContext = await  chromium.launchPersistentContext('', {headless:false});
    const page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com');
   
    browser.close();
    

})
