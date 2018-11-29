import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import inboxPage from '../pages/inboxPage';

describe('login with valid credentials', () => {
    it('should display inbox page when user login', async() => {
        loginSuccessfullySteps.loginWithValidData();
        expect (await inboxPage.blockEmailListIsVisible());
    });
});