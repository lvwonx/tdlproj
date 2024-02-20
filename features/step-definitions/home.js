import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import homePage from "../page-objects/home.page.js";

Then('My Account page contains email {email}', async function(email) {
    await browser.pause(5000);
    await homePage.clickDropDownMenu.click();
    await browser.pause(5000);
    await homePage.clickMyAccount.click();
    await expect(homePage.showedEmail).toHaveText(expect.stringContaining(email));
});