import { Page } from "./page.js";
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get firstRemoveItemButton() { return $('.action-delete') }

    async open() {
        await browser.navigateTo('https://magento.softwaretestingboard.com/checkout/cart')
    }

    async removeAllProducts() {
        await browser.waitUntil(async() => {
            try {
                await this.firstRemoveItemButton.waitForDisplayed({ timeout: 2000 });
                await this.firstRemoveItemButton.click();
                return false;
            } catch {
                return true;
            }
        }, {
            timeout: 30000
        })
    }
}

export default new CartPage();