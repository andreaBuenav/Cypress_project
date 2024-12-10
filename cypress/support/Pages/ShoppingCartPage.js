//faker
const { faker } = require("@faker-js/faker");

//Elements of the page
const Title = "#page-wrapper > div > div.col-lg-8 > h2";
const NameInput = "#name";
const CountryInput = "#country";
const CityInput = "#city";
const CreditCardInput = "#card";
const MonthInput = "#month";
const YearInput = "#year";
const OrderModal = "#orderModal";
const CloseOrder = "#orderModal button.btn.btn-secondary";
const PurchaseOrder = "#orderModal btn btn-primary";
const PlaceOrder = ".btn.btn-success";
const Ok = "button.confirm.btn.btn-lg.btn-primary";

//variables
const name = faker.person.fullName();
const country = faker.location.country();
const city = faker.location.city();
const credit = faker.number.bigInt({ min: 1000000000, max: 9999999999 });
const month = faker.date.month();
const year = 2024;

class ShoppingCartPage {
  navigateToCartPage() {
    cy.visit('cart.html')
  }

  //Obtains the response code
  response(expectedStatusCode, url) {
    cy.intercept("GET", url).as("responseCheck");
    cy.wait("@responseCheck")
      .its("response.statusCode")
      .should("eq", expectedStatusCode);
  }

  clickOnDelete() {}

  PurchaseOrder() {
    cy.get(PlaceOrder).click();
    cy.get(OrderModal).should("be.visible");
    cy.get(NameInput).type(name);
    cy.get(CountryInput).type(country);
    cy.get(CityInput).type(city);
    cy.get(CreditCardInput).type(credit);
    cy.get(MonthInput).type(month);
    cy.get(YearInput).type(year);
    cy.get(PurchaseOrder).click();
    cy.get(Ok).should("be.visible").wait(2000).click();
  }
}
export default ShoppingCartPage;
