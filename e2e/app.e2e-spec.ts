import { Angular2FormsDemoPage } from './app.po';

describe('angular2-forms-demo App', function() {
  let page: Angular2FormsDemoPage;

  beforeEach(() => {
    page = new Angular2FormsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
