import inboxPage from '../pages/inboxPage';

class SendEmailSteps {
    async sendEmail(email, subject, text) {
        await inboxPage.createEmailButtonIsVisible();
        await inboxPage.clickOnCreateEmailButton();
        await inboxPage.sendEmailButtonIsVisible();
        await inboxPage.enterEmail(email);
        // await inboxPage.enterEmailBody(text);
        // await inboxPage.enterSubject(subject);
        
    }
}
export default new SendEmailSteps();