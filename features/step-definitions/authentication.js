import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import loginPage from "../page-objects/login.page.js";
import { users } from '../test-data/users.js';
import AllureReporter from "@wdio/allure-reporter";

When('I enter a {string} e-mail', async function(email) {
    await loginPage.usernameInput.setValue(email);
});

When('I enter a {string} password', async function(password) {
    await loginPage.passwordInput.setValue(password);
});

When('I click the Sign In button', async function() {
    await loginPage.clickSignInButton.click();
});

Given('I have logged in as {word}', async function(name) {
    if (!Object.keys(users).includes(name)) {
        throw Error(`User ${name} is not recognized`);
    }

    const user = users[name];
    AllureReporter.addArgument('user', user);

    await loginPage.clickSignInLink.click();
    await loginPage.usernameInput.setValue(user.email);
    await loginPage.passwordInput.setValue(user.password);
    await loginPage.clickSignInButton.click();
    const expectedGreetMessage = `Welcome, ${user.firstname} ${user.lastname}!`
    await expect(loginPage.welcomeMessage).toHaveText(expectedGreetMessage);
});