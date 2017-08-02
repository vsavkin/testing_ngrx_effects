import { TestingngrxtricksPage } from './app.po';

describe('testingngrxtricks App', () => {
  let page: TestingngrxtricksPage;

  beforeEach(() => {
    page = new TestingngrxtricksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
