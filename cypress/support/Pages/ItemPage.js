
import HomePage from "./HomePage";
//variables
const homepage = new HomePage();
//Elements
const AddToCart = 'a.btn.btn-success.btn-lg';


class ItemPage {

    addToCart(){
        cy.get(AddToCart).click();
        cy.wait(1000);
        cy.get('.modal', { timeout: 10000 }).should('be.visible');
        cy.get('.modal').contains('Aceptar').click();
    
    }



}export default ItemPage;