import { WebCaPage } from './app.po';

describe('web-ca App', function() {
  let page: WebCaPage;

  beforeEach(() => {
    page = new WebCaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
