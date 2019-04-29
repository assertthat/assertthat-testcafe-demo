# assertthat-testcafe-demo
Demonstration of integration TestCafe, Cucumber js and AssertThat BDD plugin

Configure for your project in ```package.json```:

```
  "scripts": {
    "pretest": "./node_modules/.bin/assertthat-bdd.cmd -i PROJECT_ID -f -a ASSERTTHAT_ACCESS_KEY -s ASSERTTHAT_SECRET_KEY",
    "test": "./node_modules/.bin/cucumber-js.cmd -f json:reports/cucumber_report.json",
    "posttest": "./node_modules/.bin/assertthat-bdd.cmd -i PROJECT_ID -r -a ASSERTTHAT_ACCESS_KEY -s ASSERTTHAT_SECRET_KEY"
  }
```
PROJECT_ID - mandatory Jira project Id
ASSERTTHAT_ACCESS_KEY - alternatively can be set as environment variable
ASSERTTHAT_SECRET_KEY - alternatively can be set as environment variable

Refer to the configuration documentation here: [AssertThat+Configuration](https://assertthat.atlassian.net/wiki/spaces/ABTM/pages/725385217/AssertThat+Configuration)

To run: 

```npm test```

Example feature:

```
Feature: Searching for TestCafe on GitHub


    I want to find TestCafe repository on GitHub

    Scenario: Searching for TestCafe on GitHub
        And I am opening GitHub page
        When I am typing my search request "TestCafe" on GitHub
        Then I am pressing "enter" key on GitHub
        Then I should see that the first GitHubs result is "DevExpress/testcafe"
```
