import { DoorprizePage } from './app.po';

describe('doorprize App', function() {
  let page: DoorprizePage;

  beforeEach(() => {
    page = new DoorprizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
