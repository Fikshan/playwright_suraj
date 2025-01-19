import {test,expect} from '@playwright/test';

test('dropdowntest',async({page}) => {


    await page.goto('https://www.facebook.com');
    await page.getByRole('button',{name : 'Create new account'}).click();

    await page.locator('#day').selectOption('28');
    //await page.getByLabel('day').selectOption('28');

    await page.locator('#month').selectOption('Jan');

    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'])


})
