import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import userData from '../data/userData';
import homePage from '../pages/homePage';
import inboxPage from '../pages/inboxPage';
import { browser, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { async } from 'q';
import sendEmailSteps from '../steps/sendEmailSteps';

describe('send email', () => {
    it('should show warning message when submit email without subject', async() => {
        await browser.get(homePage.url);
        await loginSuccessfullySteps.loginWithValidData();
        await sendEmailSteps.sendEmailNoText(userData.user.email, '');
        expect(await browser.getCurrentUrl()).toContain('compose', 'Current url is incorrect');
    });
});
