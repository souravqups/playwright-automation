const { test, expect } = require('@playwright/test')
test('Lunch Application', async ({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator("xpath=//input[@name='username']").fill('johnc');
    await page.locator("xpath=//input[@name='password']").fill('1234');
    await page.locator("xpath=//input[@value='Log In']").click();
    await expect(page.locator("xpath=//h1[normalize-space()='Accounts Overview']")).toBeVisible();
    await page.close();
})