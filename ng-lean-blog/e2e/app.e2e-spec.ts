import { NgLeanBlogPage } from './app.po';

describe('ng-lean-blog App', () => {
  let page: NgLeanBlogPage;

  beforeEach(() => {
    page = new NgLeanBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ng-lean!');
  });
});
