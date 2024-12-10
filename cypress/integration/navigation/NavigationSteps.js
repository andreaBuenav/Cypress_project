/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";

const homepage = new HomePage();

//Given
Given("I visit the homepage", () => {
  homepage.navigateToHomePage();
});

//All When

When("I click the login button", () => {
  homepage.clickOnLoginButton();
});

When("I click the contact button", () => {
  homepage.clickOnContactButton();
});

When("I click the close button for login", () => {
    homepage.clickOnCLoseButtonLogin();
  });

  When('I click the close button for contact',()=>{
    homepage.clickOnCloseButtonContact();
  })



//All And
And('the title is Log in', () => {
    cy.get("#logInModalLabel").should("be.visible");
  });

And('the title is New message',()=>{
    cy.get('#exampleModalLabel').should('be.visible');
})

And('The response code should be of {int}', (expectedStatusCode) => {
  homepage.response(expectedStatusCode);
});

//All Then
Then("I should see the homepage", () => {
    cy.get("#carouselExampleIndicators").should("be.visible");
  });

  
