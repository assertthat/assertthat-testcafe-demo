var { Given, When, Then  } = require('cucumber');
var Selector       = require('testcafe').Selector;
var Role           = require('testcafe').Role;

    var testController = null;
    Given('I am open GitHub page', function () {
        return this.waitForTestController()
            .then(function (tc) {
                testController = tc;

                return testController.navigateTo('https://github.com/');
            });
    });

    When('I am typing my search request {string} on GitHub', function (text) {
        var input = Selector('input.form-control.header-search-input.js-site-search-focus').with({ boundTestRun: testController });

        return testController.typeText(input, text);
    });

    Then('I am pressing {string} key on GitHub', function (text) {
        return testController.pressKey(text);
    });

    Then('I should see that the first GitHub\'s result is {string}', function (text) {
        var firstLink = Selector('#js-pjax-container > div > div.col-12.col-md-9.float-left.px-2.pt-3.pt-md-0.codesearch-results > div > ul > li:nth-child(1) > div.col-12.col-md-8.pr-md-3 > h3 > a').with({ boundTestRun: testController });

        return testController.expect(firstLink.innerText).contains(text);
    });