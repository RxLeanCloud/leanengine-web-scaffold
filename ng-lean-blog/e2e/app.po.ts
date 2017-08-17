import { browser, by, element } from 'protractor';

export class NgLeanBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-lean-root h1')).getText();
  }
}
