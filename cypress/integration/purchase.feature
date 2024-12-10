@regression
Feature: Manage Purchase Steps
    Background:
        Given I visit the homepage

    @smoke
    Scenario: Clicking Phones category
        When I click on Phones
        Then I should only see phones