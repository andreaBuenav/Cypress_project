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

  Given('I am in the cart page',()=>{
      cartPage.navigateToCartPage();
  })

  //When

  When('I click on Phones',()=>{
  homepage.clickOnphones();
  cy.wait(2000);
  })

  When('I click on Laptops',()=>{
    homepage.clickOnLaptops();
    cy.wait(2000);
    }) 
    
    When('I click on Monitors',()=>{
        homepage.clickOnMonitors();
        cy.wait(2000);

        })

        When('I click on place order',()=>{
cartPage.purchaseOrder();
        })



  //Then
Then('I should only see phones', () => {
    homepage.verifyResponsePhones();
});

Then('I should only see laptops', ()=>{
homepage.verifyResponseLaptops();
})

Then('I should only see monitors', ()=>{
    homepage.verifyResponseMonitors();

})
Then('I add the phone to the cart',()=>{
    itemPage.addToCart();
})
Then('The sucess message should be present',()=>{
    cartPage.verifyPurchase();
})


//And

And('I select one phone',()=>{
    homepage.selectRandomPhone();
})
And('I fill the credentials', ()=>{
    cartPage.fillCredentials();
})


