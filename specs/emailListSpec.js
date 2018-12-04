import homePage from '../pages/homePage';
import inboxPage from '../pages/inboxPage';
import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import { ExpectedConditions, element } from 'protractor';
import checkEmailVisibilitySteps from '../steps/checkEmailVisibilitySteps';

describe('check emails list', () => {
    it('email grid should be displayed', async() => {
        await browser.get(homePage.url);
        await loginSuccessfullySteps.loginWithValidData();
        expect(await browser.getCurrentUrl()).toContain(inboxPage.url, 'Current url is incorrect');
        expect(await inboxPage.emailListIsVisible());
        await checkEmailVisibilitySteps.checkEmailsAreVisible();
    });
});
