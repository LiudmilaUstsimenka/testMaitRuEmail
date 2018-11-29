browser.ignoreSynchronization = true;

import BasePage from '../pages/basePage';
import { element } from 'protractor';

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://mail.ru/';
        this.mailBoxLoginInput = element(by.id('mailbox:login'));
        //todo insert mailbox dropdown locator
        this.mailBoxPasswordInput = element(by.id('mailbox:password'));
        this.mailBoxSubmitButton = element(by.id('mailbox:submit'));
    }

    async enterLogin(login) {
        await browser.wait(this.isVisible(this.mailBoxLoginInput), this.timeout.xxl, "Mailbox login is not visible");
        return this.mailBoxLoginInput.sendKeys(login);
    }

    async enterPassword(password) {
        await browser.wait(this.isVisible(this.mailBoxPasswordInput), this.timeout.xxl, "Mailbox password is not visible");
        return this.mailBoxPasswordInput.sendKeys(password);
    }

    async clickSubmitButton() {
        await browser.wait(this.isClickable(this.mailBoxSubmitButton), this.timeout.xxl, "Submit button is not clickable");
        return this.mailBoxSubmitButton.click();
    }
}
export default new HomePage();