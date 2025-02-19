const {test, expect} = require('@playwright/test');
test('Lunch Application', async ({page})=>{
    await page.goto('https://training.rcvacademy.com/');
    await expect(page.getByRole('listitem')).toHaveCount(27);
    const rows = page.getByRole('listitem');
    const count = await rows.count();
    for (let i = 0; i < count; ++i)
        console.log(await rows.nth(i).textContent());
});