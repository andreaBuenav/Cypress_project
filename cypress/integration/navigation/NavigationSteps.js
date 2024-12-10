/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";
import ShoppingCartPage from "../../support/Pages/ShoppingCartPage";

const homepage = new HomePage();
const cartPage = new ShoppingCartPage();
//Given
Given("I visit the homepage", () => {
  homepage.navigateToHomePage();
});

//All When

When("I click the contact button", () => {
  homepage.clickOnContactButton();
});

When("I click the about us button", () => {
  homepage.clickOnAboutUsButton();
});

When("I click the login button", () => {
  homepage.clickOnLoginButton();
});

When('I click on the sign up button',()=>{
    homepage.clickOnSignUpButton();
})

When("I click the close button for login", () => {
  homepage.clickOnCLoseButtonLogin();
});

When("I click the close button for contact", () => {
  homepage.clickOnCloseButtonContact();
});
When("I click on the close about us button", () => {
  homepage.clickOncloseButtonAboutUs();
});
When('I click the close sign up button',()=>{
    homepage.clickOnCloseSignUp();
})

When('I click on the Cart button', ()=>{
  homepage.clickOnCarButton();
})
When('I click on the Home button',()=>{
  homepage.clickOnHomeButton();
})

//All And
And('the title is New message', () => {
  cy.get("#exampleModalLabel").should("be.visible");
});

And('the title is Log in', () => {
  cy.get("#logInModalLabel").should("be.visible");
});

And('the title is About us', () => {
  cy.get("#videoModalLabel").should("be.visible");
});
And('the title is Sign up',()=>{
    cy.get('#signInModalLabel').should('be.visible');
})

And('The response code should be {int}', (expectedStatusCode) => {
  homepage.response(expectedStatusCode);
});

//All Then
Then('I should see the homepage', () => {
  cy.get("#carouselExampleIndicators").should("be.visible");
});

And('The response code of Cart should be {int}', (expectedStatusCode)=>{
  const cartUrl = '/cart.html'; 
  cartPage.response(expectedStatusCode, cartUrl);

})

