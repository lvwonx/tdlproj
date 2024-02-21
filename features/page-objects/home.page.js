import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import { Page } from "./page.js";

class homePage extends Page {
    get clickDropDownMenu() { return $(".page-header button[data-action=customer-menu-toggle"); }
    clickDropDownItem(text) { return $(`//header//div[@class="customer-menu"]//a[contains(text(), "${text}")]`); }

    async selectUserDropdown(text) {
        await this.clickDropDownMenu.click();
        await this.clickDropDownItem(text).click();
    }
}

export default new homePage();