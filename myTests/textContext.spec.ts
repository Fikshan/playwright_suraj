import{test,expect} from '@playwright/test';

test('Get Text & Get attribute value in playwright', async ({page}) => {

    await page.goto('https://github.com/BakkappaN')

    const finaltext1 = await page.locator('//span[@itemprop="name"]').textContent();
    console.log(`Text is : ${finaltext1}`);   
    const finaltext = finaltext1?.trim();


    expect(finaltext).toBe('Testers Talk');


    
})
