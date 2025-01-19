import {test,expect,Page,Browser,Locator,BrowserContext} from '@playwright/test';
import { webkit,chromium,firefox } from '@playwright/test';

test('auth test', async()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page =  await browser.newPage();
    
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo');
    await page.setDefaultTimeout(3000)

    // await page.locator('form#Form_getForm >> #Form_getForm_FullName').fill('Suraj');

    // await page.locator('form#Form_getForm >> text=Get a Free Demo').click();


    const form = page.locator('form#Form_getForm');
    const buttonFreeTrial = page.getByRole('button', {name : 'Get a Free Demo'});


    await page.locator('form#Form_getForm').locator('#Form_getForm_FullName').fill('Suraj');
    await page.locator('form#Form_getForm').getByRole('button', {name : 'Get a Free Demo'});

    //await form.locator(buttonFreeTrial).click();
})