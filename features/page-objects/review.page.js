import { Page } from "./page.js";
import { browser } from '@wdio/globals';

class ReviewPage extends Page {
    get placeOrderButton() { return $('.checkout[type=submit]'); }
}

export default new ReviewPage();