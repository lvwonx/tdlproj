import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import homePage from "../page-objects/home.page.js";
import { parseMenuExpression } from "../utils/utils.js";
import menuPage from "../page-objects/menu.page.js";

Then('My Account page contains email {string}', async function(email) {
    await homePage.selectUserDropdown('My Account');
    await expect(homePage.showedEmail).toHaveText(expect.stringContaining(email));
});

When('I select {string} menu items', async function(menuExpression) {
    const menuItems = parseMenuExpression(menuExpression);
    await menuPage.selectMenuItem(menuItems);
});