import homePage from '../pages/homePage';


class LoginFailedSteps {
    async tryToLoginIncorrectData(login,password) {
        browser.get(homePage.url);
        await homePage.enterLogin(login);
        await homePage.enterPassword(password);
        await homePage.clickSubmitButton();
        await homePage.mailBoxErrorMessageContainerIsVisible();
    }

}
export default new LoginFailedSteps();