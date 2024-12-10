//Elements of the homepage
const Contact = 'li.nav-item a.nav-link:contains("Contact")';
const AboutUs = 'li.nav-item:contains("About us")';
const Cart = "#cartur";
const Login = "#login2";
const SignUp = "#signin2";
const Modal = '#logInModal'
const ExModal = '#exampleModal'
const Closelogin = '#logInModal button.btn-secondary';
const CloseContact = '#exampleModal button.btn-secondary'

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
    cy.get(ExModal).should('be.visible');

  }

  clickOnAboutUsButton() {
    cy.clickAndOpen_InSameTab(AboutUs);
  }

  clickOnCarButton() {
    cy.get(Cart).click();
  }

  clickOnLoginButton() {
    cy.clickAndOpen_InSameTab(Login);
    cy.get(Modal).should('be.visible');
  }

  clickOnSignUpButton() {
    cy.clickAndOpen_InSameTab(SignUp);
  }

  //Closing buttons
  clickOnCLoseButtonLogin() {
    cy.get(Closelogin).should('be.visible').wait(5000).click();
  }
  clickOnCloseButtonContact(){
    cy.get(CloseContact).should('be.visible').wait(5000).click();
  }

  //Get title
  getTitle(expectedTitle) {
    cy.title().should("eq", expectedTitle);
  }
}
export default HomePage;
