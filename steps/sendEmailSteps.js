import inboxPage from '../pages/inboxPage';
import { browser } from 'protractor';

class SendEmailSteps {
    async sendEmailNoText(email, subject) {
        await inboxPage.createEmailButtonIsVisible();
        await inboxPage.clickOnCreateEmailButton();
        await inboxPage.sendEmailButtonIsVisible();
        await inboxPage.enterEmail(email);
        await inboxPage.enterSubject(subject);
        await inboxPage.clickOnSendEmailButton();
        await inboxPage.clickOnSubmitButton();
    }

    async sendEmail(email, subject, body) {
        await inboxPage.createEmailButtonIsVisible();
        await inboxPage.clickOnCreateEmailButton();
        await inboxPage.sendEmailButtonIsVisible();
        await inboxPage.enterEmail(email);
        await inboxPage.enterSubject(subject);
        // enter body
        await browser.driver.switchTo().frame(inboxPage.framework);
        await inboxPage.ctrlABody();
        await inboxPage.enterBody(body);
        await inboxPage.clickOnSendEmailButton();
        await inboxPage.clickOnSubmitButton();
    }
}
export default new SendEmailSteps();