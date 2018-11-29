import sendMailSteps from '../steps/sendEmailSteps';
import userData from '../data/userData';
import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import { browser } from 'protractor';
let email = userData.user.email;

describe('send email', () => {
    it('should send email and see success message', async() => {
        await loginSuccessfullySteps.loginWithValidData();
        await sendMailSteps.sendEmail(email,'test','test email');
        // expect(await browser.getCurrentUrl()).toContain('compose', 'Current url is incorrect');
    });
});