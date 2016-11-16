import { NewAngular2Page } from './app.po';

describe('new-angular2 App', function() {
  let page: NewAngular2Page;

  beforeEach(() => {
    page = new NewAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
