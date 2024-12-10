@regression
Feature: Manage Swipe Steps

    Background:
        Given I visit the homepage

    @smoke
    Scenario: click on next until samsung phone is visible
        When I slide until I see the image "Samsung1.jpg"
        Then I should see the image "Samsung1.jpg"