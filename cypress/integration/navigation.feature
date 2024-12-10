@regression
Feature: Manage Navigation Steps
    Background:
        Given I visit the homepage
    @smoke
    Scenario: Navigate to Login
        When I click the login button
        And the title is Log in
        When I click the close button for login
        Then I should see the homepage

    @smoke
    Scenario: Navigate to Contact
        When I click the contact button
        And the title is New message
        When I click the close button for contact
        Then I should see the homepage
