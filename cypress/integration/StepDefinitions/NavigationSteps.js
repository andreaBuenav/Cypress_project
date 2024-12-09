/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";

const homepage = new HomePage();

Given('I visit the homepage', () => {
    homepage.navigateToHomePage();
});

When('I click the login button', () => {
    homepage.clickOnLoginButton();
});

And('the title should be {string}', (expectedTitle) => {
    cy.title().should('eq', expectedTitle); 
});

And('I click the close button', () => {
    homepage.closeModal(); 
});

Then('I should see the homepage', () => {
    cy.get('#carouselExampleIndicators').should('be.visible');
});