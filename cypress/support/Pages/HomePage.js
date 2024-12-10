//Elements of the homepage
const Contact = 'li.nav-item a.nav-link:contains("Contact")';
const AboutUs = 'li.nav-item:contains("About us")';
const Cart = "#cartur";
const Login = "#login2";
const SignUp = "#signin2";
const Close = ' button[data-dismiss="modal"]';

class HomePage {
  navigateToHomePage() {
    cy.visit(Cypress.config().baseUrl);
  }

  //Obtains the response code
  response(expectedStatusCode, url) {
    cy.intercept("GET", url).as("responseCheck");
    cy.wait("@responseCheck")
      .its("response.statusCode")
      .should("eq", expectedStatusCode);
  }

  clickOnContactButton() {
    cy.clickAndOpen_InSameTab(Contact);
  }

  clickOnAboutUsButton() {
    cy.clickAndOpen_InSameTab(AboutUs);
  }

  clickOnCarButton() {
    cy.get(Cart).click();
  }

  clickOnLoginButton() {
    cy.clickAndOpen_InSameTab(Login);
  }

  clickOnSignUpButton() {
    cy.clickAndOpen_InSameTab(SignUp);
  }
  clickOnCLoseButton() {
    cy.get('#exampleModal').should('be.visible');
    cy.get('#exampleModal').should('have.class', 'show');
    cy.get(Close).eq(0).click();
  }

  //Get title
  getTitle(expectedTitle) {
    cy.title().should("eq", expectedTitle);
  }
}
export default HomePage;
