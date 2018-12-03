import loginSuccessfullySteps from '../steps/loginSuccessfullySteps';
import userData from '../data/userData';
import homePage from '../pages/homePage';
import inboxPage from '../pages/inboxPage';
import { browser, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { async } from 'q';

describe('try to send incorrect email', () => {
    it('should show error message when submit email without email address', async() => {
        await browser.get(homePage.url);
        await loginSuccessfullySteps.loginWithValidData(userData.user.login, userData.user.password);
        expect(await browser.getCurrentUrl()).toContain(inboxPage.url, 'Current url is incorrect');
        await inboxPage.clickOnCreateEmailButton();
        await inboxPage.clickOnSendEmailButton();
        const alertDialog = await browser.switchTo().alert();
        expect(await alertDialog.getText()).toContain("Не указан адрес получателя");
        // await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // await browser.navigate.refresh();      
    });
});
