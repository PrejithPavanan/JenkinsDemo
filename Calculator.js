describe('Calculator', function () {
  it('Addition', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(element(by.xpath('//h3[contains(text(),"Super Calculator")]')).isPresent()).toBeTruthy();
    browser.sleep(1000);
    element(by.model('first')).sendKeys("9");
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),"+")]')).click();
    browser.sleep(1000);
    element(by.model('second')).sendKeys("5");
    browser.sleep(1000);
    element(by.css('[ng-click="doAddition()"]')).click();
    browser.sleep(1000);
    expect(element(by.cssContainingText('.ng-binding', '14')).getText()).toEqual('14');
  });
  it('Subtraction', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(element(by.xpath('//h3[contains(text(),"Super Calculator")]')).isPresent()).toBeTruthy();
    browser.sleep(1000);
    element(by.model('first')).sendKeys("9");
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),"-")]')).click();
    browser.sleep(1000);
    element(by.model('second')).sendKeys("5");
    browser.sleep(1000);
    element(by.css('[ng-click="doAddition()"]')).click();
    browser.sleep(1000);
    expect(element(by.cssContainingText('.ng-binding', '4')).getText()).toEqual('4');
  });
});