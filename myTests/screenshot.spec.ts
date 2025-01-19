import {test,expect, chromium, Page, Browser} from '@playwright/test';


test('screenshot',async()=>{

const browser:Browser =await chromium.launch({headless:false})
const page:Page = await browser.newPage();

await page.goto('https://www.makemytrip.com/');

await page.setDefaultTimeout(5000);
await page.locator('//span[@class="commonModal__close"]').click();

//Element Screenshot
await page.getByAltText('Make My Trip').screenshot({path:'./screenshot/mmt.png'});

//Page Screenshot
await page.screenshot({path:'./screenshot/mmtPage.png'})

//fullPageScreenshot
await page.screenshot({path:'./screenshot/mmtFullPage.png', fullPage:true})

})