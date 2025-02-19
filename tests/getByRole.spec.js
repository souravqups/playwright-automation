const { test, expect } = require('@playwright/test')
test('Lunch Application', async ({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link',{name: 'Forgot login info?'}).click();
    await page.close();

})