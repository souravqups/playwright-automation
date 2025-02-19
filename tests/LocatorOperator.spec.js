const {test, expect} = require('@playwright/test');
test('Lunch Application', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    const productItems = page.locator("xpath = (//div[@class='inventory_item'])");
    await expect(productItems).toHaveCount(6);
});