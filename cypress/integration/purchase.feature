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
        Then I add the phone to the cart
       

    @smoke
    Scenario: Complete the purchase of a random phone
        Given I am in the cart page
        When I click on place order
        And I fill the credentials
        Then The sucess message should be present

    @smoke
    Scenario: Add a random phone to cart, and the delete it
        Given I visit the homepage
        When I click on Phones
        And I select one phone
        And I add the phone to the cart
        Then I am in the cart page
        And I click delete
        Then The cart should be empty

