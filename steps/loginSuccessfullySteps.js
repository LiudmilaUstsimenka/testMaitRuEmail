import homePage from "../pages/homePage";
import userData from "../data/userData";
import inboxPage from "../pages/inboxPage";

class LoginSuccessfullySteps {
    async loginWithValidData() {
        browser.get(homePage.url);
        await homePage.enterLogin(userData.user.login);
        await homePage.enterPassword(userData.user.password);
        await homePage.clickSubmitButton();     
    }    
}
export default new LoginSuccessfullySteps();