
import HomePage from "./HomePage";
//variables
const homepage = new HomePage();
//Elements
const AddToCart = 'a.btn.btn-success.btn-lg';


class ItemPage {

    addToCart(productId){
        cy.get(AddToCart).click();
        cy.wait(1000);
        cy.url().should('eq', `https://www.demoblaze.com/prod.html?idp_=${productId}#`);

    }

    getPopUp(){
        cy.get('button').contains('Aceptar').should('be.visible').click();
    }

    cartResponse(expectedStatusCode, itemId){
        const expectedUrl = `https://www.demoblaze.com/prod.html?idp_=${itemId}#`;
        cy.intercept("GET", expectedUrl).as("responseCheck");
        cy.wait("@responseCheck")
      .its("response.statusCode")
      .should("eq", expectedStatusCode); 
      cy.url().should("eq", expectedUrl);
    }



}export default ItemPage;