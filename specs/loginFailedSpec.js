import loginFailedSteps from '../steps/loginFailedSteps';
import homePage from '../pages/homePage';
import messageData from '../data/messageData';
import { async } from 'q';
import userData from '../data/userData';
const randomstring = require('randomstring');
let login = randomstring.generate(16);
let password = randomstring.generate(3);

describe('try to login with incorrect credentials', () => {
    it('should display error message when try to login with no login and password', async() => {
        await loginFailedSteps.tryToLoginIncorrectData('','');
        expect(await homePage.mailBoxErrorMessageContainer.getText()).toContain(messageData.errorMessageEmptyLoginForm);
    });
    it('should display error message when try to login with invalid login and password', async() => {
        await loginFailedSteps.tryToLoginIncorrectData(login, password);
        expect(await homePage.mailBoxErrorMessageContainer.getText()).toContain(messageData.errorMessageInvalidDataLoginForm);
    });
});