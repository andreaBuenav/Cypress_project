/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";

const homepage = new HomePage();

Given('I visit the homepage', () => {
   homepage.navigateToHomePage();
   homepage.response(200)
});

When('I click the login button', () => {
    homepage.clickOnLoginButton();
});

When('the title is {string}', (expectedTitle) => {
  homepage.getTitle(expectedTitle);
});

And('I click the close button', () => {
    homepage.closeModal(); 
});

Then('I should see the homepage', () => {
    cy.get('#carouselExampleIndicators').should('be.visible');
});

And('The response code should be of {int}',(expectedStatusCode)=>{
    homepage.response(expectedStatusCode)
})