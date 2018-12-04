browser.ignoreSynchronization = true;

import BasePage from '../pages/basePage';
import { element, Key } from 'protractor';

class InboxPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://e.mail.ru/messages/inbox/?back=1';
        this.blockFolderNavigation = element(by.xpath('//*[@id="b-nav_folders"]'));
        this.blockEmailList = element(by.xpath('//*[@class="b-datalist__body"]'));
        this.createEmailButton = element(by.xpath('(//*[@data-name="compose"])[1]'));
        this.inbox = element(by.cssContainingText('span', 'Входящие'));
        this.recentEmailBody = element(by.xpath('//*[@class="b-datalist__item__subj"]'));
        this.emailList = element(by.xpath('//*[@class="b-datalist__body"]'));
        this.emailLocator = element(by.xpath('//*[@data-bem="b-datalist__item"]'));
        //create letter elements
        this.sendEmailButton = element(by.xpath('(//*[@data-name="send"])[1]'));
        this.inputEmail = element(by.css('textarea[data-original-name="To"]'));
        this.inputSubject = element(by.xpath('//*[@name="Subject"]'));
        this.submitButton = element(by.xpath('//*[@id="MailRuConfirm"]/div/div[2]/form/div[2]/button[1]'));
        // tinymce email body
        this.inputBody = element(by.tagName('body'));
        //error message element
        this.alertDialogOk = element(by.cssContainingText('', 'Ok'));

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

    async clickInbox() {
        await browser.wait(this.isVisible(this.inbox), this.timeout.xxl, "Inbox is not clickable");
        return this.inbox.click();
    }

    async emailListIsVisible() {
        await browser.wait(this.isVisible(this.emailList), this.timeout.xxl, "emailList is not visible");
        return this.emailList.isVisible;
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

    async enterSubject(subject) {
        await browser.wait(this.isVisible(this.inputSubject), this.timeout.xxl, "inputSubject is not visible");
        return this.inputSubject.sendKeys(subject);
    }

    async clickOnSendEmailButton() {
        await browser.wait(this.isClickable(this.sendEmailButton), this.timeout.xxl, "sendEmailButton is not clickable");
        return this.sendEmailButton.click();
    }

    async clickOnSubmitButton() {
        await browser.wait(this.isVisible(this.submitButton), this.timeout.xxl, "submitButton is not clickable");
        return this.submitButton.click();
    }

    async enterBody(body) {
        return this.inputBody.sendKeys(body);
    }   

    //for error message elements

    async clickAlertDialogOk() {
        await browser.wait(this.isVisible(this.alertDialogOk), this.timeout.xxl, "alertDialogOk is not visible");
        return this.alertDialogOk.click();
    }


}
export default new InboxPage();