
import HomePage from "./HomePage";
//variables
const homepage = new HomePage();
//Elements
const AddToCart = 'a.btn.btn-success.btn-lg';


class ItemPage {

    addToCart(){
        cy.get(AddToCart).click();
        cy.wait(1000);
    }

    getPopUp(){
        cy.get('button').contains('Aceptar').should('be.visible').click();
    }

    cartResponse(expectedStatusCode){
        const expectedUrl = `https://www.demoblaze.com/prod.html?idp_=${itemId}#`;
        cy.intercept("GET", expectedUrl).as("responseCheck");
        cy.get(`a[href="prod.html?idp_=${itemId}"]`)
        cy.wait("@responseCheck")
        .its("response.statusCode")
        .should("eq", expectedStatusCode);
        cy.url().should("eq", expectedUrl);
    }



}export default ItemPage;