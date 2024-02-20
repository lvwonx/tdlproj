import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import { Page } from "./page.js";

class homePage extends Page {
    get clickDropDownMenu() { return $(".customer-welcome"); }
    get clickMyAccount() { return $(`//a[contains(text(), "My Account")]`); }
}

export default new homePage();