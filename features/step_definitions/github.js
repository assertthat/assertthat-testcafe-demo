var { Given, When, Then, And  } = require('cucumber');
var Selector       = require('testcafe').Selector;
var Role           = require('testcafe').Role;

    var testController = null;
    Given('I am opening GitHub page',{timeout: 60 * 1000}, function () {
        return this.waitForTestController()
            .then(function (tc) {
                testController = tc;

                return testController.navigateTo('https://github.com/');
            });
    });

    When('I am typing my search request {string} on GitHub', function (text) {
        var input = Selector("input[name='q']").with({ boundTestRun: testController });

        return testController.typeText(input, text);
    });

    Then('I am pressing {string} key on GitHub', function (text) {
        return testController.pressKey(text);
    });

    When('I attach video URL {string}', function (text) {
        var html = '<iframe src="'+text+'" width="560" height="315" style="margin: auto; display: block;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'
                   '</figure>';
        this.attach(Buffer.from(html).toString('base64'), 'text/html');
    });

    Then('I should see that the first GitHubs result is {string}', function (text) {
        var firstLink = Selector('.codesearch-results h3 a', { index:0 }).with({ boundTestRun: testController });

        return testController.expect(firstLink.innerText).contains(text);
    });
