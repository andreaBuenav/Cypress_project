@regression
Feature: Manage Purchase Steps
    Background:
        Given I visit the homepage

    @smoke
    Scenario: Clicking Phones category
        When I click on Phones
        Then The response code for the click action should be 200