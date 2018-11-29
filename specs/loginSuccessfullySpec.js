import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import inboxPage from '../pages/inboxPage';
import { browser } from 'protractor';

describe('login with valid credentials', () => {
    it('should display inbox page when user login', async() => {
        await loginSuccessfullySteps.loginWithValidData();
        expect(await browser.getCurrentUrl()).toContain(inboxPage.url, 'Current url is incorrect');
    });
});