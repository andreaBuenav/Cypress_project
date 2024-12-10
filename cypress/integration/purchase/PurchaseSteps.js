/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";
import ShoppingCartPage from "../../support/Pages/ShoppingCartPage";
import ItemPage from "../../support/Pages/ItemPage.js";

 const homepage = new HomePage();
 const cartPage = new ShoppingCartPage();
 const itemPage = new ItemPage();

 //Given
 Given("I visit the homepage", () => {
    homepage.navigateToHomePage();
  });

  //When

  When('I click on Phones',()=>{
  homepage.clickOnphones();
  })



  //Then

Then('The response code should be {int}', (expectedStatusCode) => {
    homepage.response(expectedStatusCode);
});

