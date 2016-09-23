import { AngularMaterial2Demo1Page } from './app.po';

describe('angular-material2-demo1 App', function() {
  let page: AngularMaterial2Demo1Page;

  beforeEach(() => {
    page = new AngularMaterial2Demo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
