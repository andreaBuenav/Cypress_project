/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pages/HomePage";
const homepage = new HomePage();
//Given
Given("I visit the homepage", () => {
    homepage.navigateToHomePage();
  });

  //When

  When("I slide until I see the image {string}", (imageName) => {
    homepage.slideToImage(imageName);
  });



  //Then

  Then("I should see the image {string}", (imageName) => {
    cy.get(`#carouselExampleIndicators .carousel-inner .carousel-item img[src="${imageName}"]`)
      .should('be.visible');
  });


  Then('I click on Back', () => {
    cy.wait(500);
    homepage.clickOnBack();
});

Then('The response code should be {int}', (expectedStatusCode) => {
    homepage.response(expectedStatusCode);
});
  


  