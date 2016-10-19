import { CrappPage } from './app.po';

describe('crapp App', function() {
  let page: CrappPage;

  beforeEach(() => {
    page = new CrappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
