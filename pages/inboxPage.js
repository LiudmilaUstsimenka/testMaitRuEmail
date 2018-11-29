browser.ignoreSynchronization = true;

import BasePage from '../pages/basePage';
import { element } from 'protractor';

class InboxPage extends BasePage {
    constructor() {
        super();
        this.blockFolderNavigation = element(by.xpath('//*[@id="b-nav_folders"]'));
        this.blockEmailList = element(by.xpath('//*[@class="b-datalist__body"]'));
    } 
    
    async blockEmailListIsVisible() {
        await browser.wait(this.isVisible(this.blockEmailList), this.timeout.xxl, "blockEmailList is not visible");
        return this.blockEmailList.isDisplayed;
    }
}
export default new InboxPage();