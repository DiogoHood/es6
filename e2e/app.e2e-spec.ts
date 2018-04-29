import { Ecmascript2015FastCoursePage } from './app.po';

describe('ecmascript2015-fast-course App', function() {
  let page: Ecmascript2015FastCoursePage;

  beforeEach(() => {
    page = new Ecmascript2015FastCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
