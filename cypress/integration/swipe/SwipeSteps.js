/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";
const homepage = new HomePage();
//Given
Given("I visit the homepage", () => {
    homepage.navigateToHomePage();
  });

  //When

  When("I slide until I see the image {string}", (imageName) => {
    homepage.slideToImage(imageName);
  });

  When('I slide next and go back',()=>{
    homepage.clickOnNext();
  })

  //Then

  Then("I should see the image {string}", (imageName) => {
    cy.get(`#carouselExampleIndicators .carousel-inner .carousel-item img[src="${imageName}"]`)
      .should('be.visible');
  });


  Then('The response code should be {int}', (expectedStatusCode) => {
    homepage.response(expectedStatusCode);
  });
  


  