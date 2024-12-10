@regression
Feature: Manage Purchase Steps

    @smoke
    Scenario: Clicking Phones category
        Given I visit the homepage
        When I click on Phones
        Then I should only see phones

    @smoke
    Scenario: Clicking Laptops category
        Given I visit the homepage
        When I click on Laptops
        Then I should only see laptops

    @smoke
    Scenario: Clicking monitors category
        Given I visit the homepage
        When I click on Monitors
        Then I should only see monitors

    @smoke
    Scenario: purchase a random phone
        Given I visit the homepage
        When I click on Phones
        And I select one phone
        And I add the phone to the cart
        Then A PopUp message should be shown
        And The response code should be 200
