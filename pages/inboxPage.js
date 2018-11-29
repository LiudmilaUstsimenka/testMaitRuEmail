browser.ignoreSynchronization = true;

import BasePage from '../pages/basePage';
import { element } from 'protractor';

class InboxPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://e.mail.ru/messages/inbox/?back=1';
        this.blockFolderNavigation = element(by.xpath('//*[@id="b-nav_folders"]'));
        this.blockEmailList = element(by.xpath('//*[@class="b-datalist__body"]'));
    } 
    
    async blockEmailListIsVisible() {
        await browser.wait(this.isVisible(this.blockEmailList), this.timeout.xxl, "blockEmailList is not visible");
        return this.blockEmailList.isVisible;
    }

    async blockFolderNavigationIsVisible() {
        await browser.wait(this.isVisible(this.blockFolderNavigation), this.timeout.xxl, "blockEmailList is not visible");
        return this.blockFolderNavigation.isVisible;
    }

}
export default new InboxPage();