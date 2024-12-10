@regression
Feature: Manage Purchase Steps
Background:
        Given I visit the homepage

        Scenario: Clicking Phones category
        When I click on Phones
        Then The response code should be 200