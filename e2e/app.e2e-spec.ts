import { ImdbLearnang2Page } from './app.po';

describe('imdb-learnang2 App', function() {
  let page: ImdbLearnang2Page;

  beforeEach(() => {
    page = new ImdbLearnang2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
