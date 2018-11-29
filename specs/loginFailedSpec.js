import loginFailedSteps from '../steps/loginFailedSteps';
import homePage from '../pages/homePage';
import messageData from '../data/messageData';

describe('try to login with incorrect credentials', () => {
    it('should display error message when try to login with no wmail and password', async() => {
        await loginFailedSteps.tryToLoginIncorrectData('','');
        expect(await homePage.mailBoxErrorMessageContainer.getText()).toContain(messageData.errorMessageEmptyLoginForm);
    });
});