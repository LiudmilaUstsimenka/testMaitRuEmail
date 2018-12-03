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
        // switch to frame
        await browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        await inboxPage.enterBody(body);
        //switch back to default content
        await browser.switchTo().defaultContent();
        await inboxPage.clickOnSendEmailButton();
    }

}
export default new SendEmailSteps();