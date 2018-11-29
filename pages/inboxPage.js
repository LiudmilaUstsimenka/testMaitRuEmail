browser.ignoreSynchronization = true;

import BasePage from '../pages/basePage';
import { element } from 'protractor';

class InboxPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://e.mail.ru/messages/inbox/?back=1';
        this.blockFolderNavigation = element(by.xpath('//*[@id="b-nav_folders"]'));
        this.blockEmailList = element(by.xpath('//*[@class="b-datalist__body"]'));
        this.createEmailButton = element(by.xpath('(//*[@data-name="compose"])[1]'));
        //create letter elements
        this.sendEmailButton = element(by.xpath('(//*[@data-name="send"])[1]'));
        this.inputEmail = element(by.css('textarea[data-original-name="To"]'));
        // this.inputSubject = $('input[name="Subject"]');
        // this.inputEmailBody = $('tinymce');
    } 
    
    async blockEmailListIsVisible() {
        await browser.wait(this.isVisible(this.blockEmailList), this.timeout.xxl, "blockEmailList is not visible");
        return this.blockEmailList.isVisible;
    }

    async blockFolderNavigationIsVisible() {
        await browser.wait(this.isVisible(this.blockFolderNavigation), this.timeout.xxl, "blockFolderNavigation is not visible");
        return this.blockFolderNavigation.isVisible;
    }

    async createEmailButtonIsVisible() {
        await browser.wait(this.isVisible(this.createEmailButton), this.timeout.xxl, "CreateEmailButton is not visible");
        return this.createEmailButton.isVisible;
    }

    async clickOnCreateEmailButton() {
        await browser.wait(this.isVisible(this.createEmailButton), this.timeout.xxl, "createEmailButton is not clickable");
        return this.createEmailButton.click();
    }

    //for create letter elements
    
    async sendEmailButtonIsVisible() {
        await browser.wait(this.isVisible(this.sendEmailButton), this.timeout.xxl, "sendEmailButton is not visible");
        return this.sendEmailButton.isVisible;
    }

    async enterEmail(email) {
        await browser.wait(this.isVisible(this.inputEmail), this.timeout.xxl, "inputEmail is not visible");
        return this.inputEmail.sendKeys(email);
    }

    // async enterSubject(subject) {
    //     await browser.wait(this.isVisible(this.inputSubject), this.timeout.xxl, "inputSubject is not visible");
    //     return this.inputSubject.sendKeys(subject);
    // }

    // async enterEmailBody(text) {
    //     await browser.wait(this.isVisible(this.inputEmailBody), this.timeout.xxl, "inputSubject is not visible");
    //     return this.inputEmailBody.sendKeys(text);
    // }

    async clickOnSendEmailButton() {
        await browser.wait(this.isClickable(this.sendEmailButton), this.timeout.xxl, "sendEmailButton is not clickable");
        return this.sendEmailButton.click;
    }

   

}
export default new InboxPage();