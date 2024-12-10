//Elements of the homepage
const Contact = 'li.nav-item a.nav-link:contains("Contact")';
const AboutUs = 'li.nav-item:contains("About us")';
const Cart = "#cartur";
const Login = "#login2";
const SignUp = "#signin2";

//Carousel


//PopUp pages 
const Modal = '#logInModal'
const ExModal = '#exampleModal'
const videoModal = '#videoModal'
const SignUpModal = '#signInModal'
const CloseAboutUS ='#videoModal button.btn.btn-secondary'
const Closelogin = '#logInModal button.btn-secondary';
const CloseContact = '#exampleModal button.btn.btn-secondary'
const CloseSignUp = '#signInModal button.btn.btn-secondary'

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

  //Click each button
  clickOnContactButton() {
    cy.clickAndOpen_InSameTab(Contact);
    cy.get(ExModal).should('be.visible');

  }

  clickOnAboutUsButton() {
    cy.clickAndOpen_InSameTab(AboutUs);
    cy.get(videoModal).should('be.visible');
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
    cy.get(SignUpModal).should('be.visible');
  }

  //Closing buttons
 
  clickOnCloseButtonContact(){
    cy.get(ExModal).should('be.visible')
    cy.get(CloseContact).should('be.visible').wait(5000).click();
  }
  clickOncloseButtonAboutUs(){
    cy.get(CloseAboutUS).should('be.visible').wait(2000).click();
  }
  clickOnCLoseButtonLogin() {
    cy.get(Closelogin).should('be.visible').wait(5000).click();
  }
  clickOnCloseSignUp(){
    cy.get(CloseSignUp).should('be.visible').wait(2000).click();
  }

  //Get title
  getTitle(expectedTitle) {
    cy.title().should("eq", expectedTitle);
  }
}
export default HomePage;
