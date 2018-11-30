import sendMailSteps from '../steps/sendEmailSteps';
import userData from '../data/userData';
import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import { browser } from 'protractor';
import { async } from 'q';
import sendEmailSteps from '../steps/sendEmailSteps';
let email = userData.user.email;

describe('send email', () => {
    it('should send email and show success message when email body is empty', async() => {
        await loginSuccessfullySteps.loginWithValidData();
        await sendMailSteps.sendEmailNoText(email,'test');
        expect(await browser.getCurrentUrl()).toContain('compose', 'Current url is incorrect');
    });
    it('should send email and show success message', async() => {
        await sendEmailSteps.sendEmail(email, 'test2', 'body');
    });
});