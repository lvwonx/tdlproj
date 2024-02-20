import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import loginPage from "../page-objects/login.page.js";

When('I enter a {string} e-mail', async function(email) {
    await loginPage.usernameInput.setValue(email);
});

When('I enter a {string} password', async function(password) {
    await loginPage.passwordInput.setValue(password);
});

When('I click the Sign In button', async function() {
    await loginPage.clickSignInButton.click();
});