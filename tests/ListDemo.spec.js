const {test, expect} = require('@playwright/test');
test('Lunch Application', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByRole('listitem')).toHaveCount(0);
    await page.close();
});