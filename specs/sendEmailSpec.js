import sendMailSteps from '../steps/sendEmailSteps';
import userData from '../data/userData';
import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import { browser } from 'protractor';
import sendEmailSteps from '../steps/sendEmailSteps';
import inboxPage from '../pages/inboxPage';
let email = userData.user.email;
let body = 'email text';

describe('send email', () => {
    it('should send email and show success message when email body is empty', async() => {
        await loginSuccessfullySteps.loginWithValidData();
        await sendMailSteps.sendEmailNoText(email,'test');
        expect(await browser.getCurrentUrl()).toContain('compose', 'Current url is incorrect');
    });
    it('should send email and show success message', async() => {
        await sendEmailSteps.sendEmail(email, 'testSendEmail', body);
        expect(await browser.getCurrentUrl()).toContain('compose', 'Current url is incorrect');
    });
    it('should show the recent received email text', async() => {
        await inboxPage.clickInbox();
        await browser.navigate().refresh();
        expect(await inboxPage.recentEmailBody.getText()).toContain(body, 'Recent Email is not visible');
    });
});