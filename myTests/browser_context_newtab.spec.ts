import { test, expect } from '@playwright/test';

test('Browser context', async ({ page, browser }) => {
  const context1 = await browser.newContext();
  const Page1 = await context1.newPage();
  await Page1.goto("https://www.google.com/");
  await Page1.setDefaultTimeout(5000);

  const context2 = await browser.newContext();
  const Page2 = await context2.newPage();

  await Page2.goto("https://www.bing.com/");

  const newTab = await context2.newPage();
  await newTab.goto("https://www.facebook.com/");

  
    await context1.close();
    await context2.close();
  // page.close();
})

