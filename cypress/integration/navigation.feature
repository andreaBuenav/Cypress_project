@smoke
Feature: Manage Navigation Steps
Background:
Given I visit the homepage

 Scenario: Navigate to Login
    Given I visit the homepage
    When I click the login button
    When the title is "Login"
    And I click the close button
    Then I should see the homepage
