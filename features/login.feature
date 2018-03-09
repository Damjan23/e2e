#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I'm on the "https://app.icontract.co.uk/" homepage
        When i submit a valid login details
        Then I should be logged in