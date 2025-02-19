const {test, expect} = require('@playwright/test');
test('Select Dropdown', async ({page})=>{
    await page.goto('https://www.salesforce.com/form/signup/elf-v2-login/?d=70130000000Enus');
    await page.locator('xpath = //*[@name="CompanyEmployees"]').selectOption({label: "21 - 200 employees"});
    await page.close();
});