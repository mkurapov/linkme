import { LinkmePage } from './app.po';

describe('linkme App', () => {
  let page: LinkmePage;

  beforeEach(() => {
    page = new LinkmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
