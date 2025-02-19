const {test, expect} = require('@playwright/test');
test('Lunch Application', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    await page.locator("xpath=//div[@class='inventory_item']")
    .filter({ has: page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }) })
    .getByRole("button", {name: "Add to cart"})
    .click();
    
})