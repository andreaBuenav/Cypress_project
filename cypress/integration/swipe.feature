@regression
Feature: Manage Swipe Steps

    Background:
        Given I visit the homepage

    @smoke
    Scenario: click on next until laptop  is visible
        When I slide until I see the image "iphone1.jpg"
        Then I should see the image "iphone1.jpg"

    @smoke
    Scenario: click on next until nexus is visible
        When I slide until I see the image "nexus1.jpg"
        Then I should see the image "nexus1.jpg"

    @smoke
    Scenario: click on next and then click on Back
        When I slide until I see the image "Samsung1.jpg"
        Then I should see the image "Samsung1.jpg"
        And I go Back
        Then The response code should be 200
