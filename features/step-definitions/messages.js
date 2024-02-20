import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import loginPage from "../page-objects/login.page.js";

Then('I see the welcome message {string}', async function(message) {
    await expect(loginPage.welcomeMessage).toHaveText(expect.stringContaining(message));
});