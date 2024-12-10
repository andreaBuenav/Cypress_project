@regression
Feature: Manage Navigation Steps
    Background:
        Given I visit the homepage

    @smoke
    Scenario: Navigate to Contact
        When I click the contact button
        And the title is New message
        When I click the close button for contact
        Then I should see the homepage

    @smoke
    Scenario: Navigate to About Us
        When I click the about us button
        And the title is About us
        When I click on the close about us button
        Then I should see the homepage

    @smoke
    Scenario: Navigate to Login
        When I click the login button
        And the title is Log in
        When I click the close button for login
        Then I should see the homepage

    @smoke
    Scenario: Navigate to Sign Up
        When I click on the sign up button
        And the title is Sign up
        When I click the close sign up button
        Then I should see the homepage

    @smoke
    Scenario: Navigate to Cart
        When I click on the Cart button
        And the response code of Cart should be 200
        And the title is Products
        When I click on the Home button
        Then I should see the homepage
        And the response code of Cart should be 200





