import inboxPage from '../pages/inboxPage';
import { browser, ExpectedConditions } from 'protractor';
import { element, Key } from 'protractor';
import BasePage from '../pages/basePage';
import { timeout } from 'q';

class CheckEmailVisibilitySteps {
    async checkEmailsAreVisible() {
        for (var i=1; i<=25; i++) {
            let locator = ('//*[@data-bem="b-datalist__item"]' + '[' + i + ']');
            console.log(locator);
         
        } 
    }
}

export default new CheckEmailVisibilitySteps();