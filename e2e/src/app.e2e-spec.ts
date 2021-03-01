import { AppPage } from "./app.po";

describe("Application Layout", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should have the correct page title", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("DMW - React");
  });
});
