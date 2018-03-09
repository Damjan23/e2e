#features/test.feature
Feature: Login to icontract
    As a BO of icontract
    I should be able to use Cucumber and Gherkin format for my automation
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I'm on the "https://app.icontract.co.uk/" homepage
        When i submit a valid login details
        Then I should be logged in