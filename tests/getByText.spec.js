const { test, expect } = require('@playwright/test')
test('Lunch Application', async ({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByText('Forgot login info?').click();

})