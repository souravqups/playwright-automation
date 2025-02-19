const {test, expect} = require('@playwright/test');
test('Lunch Application', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    const rows = page.getByRole('listitem');
    const count = await rows.count();
    for (let i = 0; i < count; ++i)
        console.log(await rows.nth(i).textContent());

    await page.close();
});