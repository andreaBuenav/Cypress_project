
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
        cy.intercept("GET", url).as("responseCheck");
        cy.wait("@responseCheck")
        .its("response.statusCode")
        .should("eq", expectedStatusCode);
    }



}export default ItemPage;