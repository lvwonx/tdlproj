import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import loginPage from "../page-objects/login.page.js"
import homePage from "../page-objects/home.page.js";

Given('I am on home page', async function() {
    await browser.navigateTo("https://magento.softwaretestingboard.com/");
});

When('I click on the Sign In link', async function() {
    await loginPage.clickSignInLink.click();
});