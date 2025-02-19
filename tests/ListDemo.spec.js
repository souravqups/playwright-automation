const {test, expect} = require('@playwright/test');
test('Lunch Application', async ({page})=>{
    await page.goto('https://training.rcvacademy.com/');
    await expect(page.getByRole('listitem')).toHaveCount(27);
    await page.close();
});