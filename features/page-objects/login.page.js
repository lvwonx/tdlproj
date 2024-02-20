import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import { Page } from "./page.js"

class loginPage extends Page {
    get clickSignInLink() { return $(".authorization-link a"); }
    get usernameInput() { return $("input#email"); }
    get passwordInput() { return $("input[title=Password]"); }
    get clickSignInButton() { return $("button[type=submit].login"); }
}

export default new loginPage();