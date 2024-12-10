//Elements of the page
const Title = '#page-wrapper > div > div.col-lg-8 > h2';
const NameInput = '#name'
const CountryInput = '#'
const CityInput = '#'
const CreditCardInput = '#'
const MonthInput = '#'
const YearInput = '#'
const OrderModal = '#orderModal'
const CloseOrder = '#orderModal button.btn.btn-secondary'
const PurchaseOrder = '#orderModal btn btn-primary'




class ShoppingPage{
    navigateToCartPage(){
        cy.visit(Cypress.config().baseUrl("/cart.html"));
    }

    response(expectedStatusCode, url) {
        cy.intercept("GET", url).as("responseCheck");
        cy.wait("@responseCheck")
          .its("response.statusCode")
          .should("eq", expectedStatusCode);
      }

      clickOnDelete(){

      }




}