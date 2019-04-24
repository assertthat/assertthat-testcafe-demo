# assertthat-testcafe-demo
Demonstration of integration TestCafe, Cucumber js and AssertThat BDD plugin

To run: 

```npm test```

Example feature:

```
Feature: Searching for TestCafe on GitHub


    I want to find TestCafe repository on GitHub

    Scenario: Searching for TestCafe on GitHub
        Given I attach video URL "https://www.youtube.com/embed/7Fi_X2RPe30"
        And I am open GitHub page
        When I am typing my search request "TestCafe" on GitHub
        Then I am pressing "enter" key on GitHub
        Then I should see that the first GitHubs result is "DevExpress/testcafe"
```