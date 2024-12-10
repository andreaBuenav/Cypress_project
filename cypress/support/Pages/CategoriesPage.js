//Elements
const itemlist ='#itemc'





class CategoriesPage{
    navigateToHomePage() {
        cy.visit(Cypress.config().baseUrl);
      }

      clickOnPhones(){
        cy.get(itemlist).contains('Phones').clickAndOpen_InSameTab();
      }
    
}