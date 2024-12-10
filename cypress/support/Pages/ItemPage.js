
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

    cartResponse(){
        cy.intercept("GET", "/prod.html?idp_*").as("productPage");
        cy.wait("@productPage")
            .its("response.statusCode")
            .should("eq", 200); 
        cy.url().should('include', '#'); 
    }



}export default ItemPage;