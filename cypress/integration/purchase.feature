@regression
Feature: Manage Purchase Steps
    Background:
        Given I visit the homepage

    @smoke
    Scenario: Clicking Phones category
        When I click on Phones
        Then I should only see phones

    @smoke
    Scenario: Clicking Laptops category
        When I click on Laptops
        Then I should only see laptops

    @smoke
    Scenario: Clicking monitors category
        When I click on Monitors
        Then I should only see monitors
