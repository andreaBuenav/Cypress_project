import ShoppingCartPage from "./ShoppingCartPage";

//Elements of the homepage
const Home = 'li.nav-item a.nav-link:contains("Home")';
const Contact = 'li.nav-item a.nav-link:contains("Contact")';
const AboutUs = 'li.nav-item:contains("About us")';
const Cart = "#cartur";
const Login = "#login2";
const SignUp = "#signin2";
const CartPage = new ShoppingCartPage();

//Carousel
const Next = "span.carousel-control-next-icon";
const Back = "span.carousel-control-prev-icon";
const Carousel = "#carouselExampleIndicators";

//PopUp pages
const Modal = "#logInModal";
const ExModal = "#exampleModal";
const videoModal = "#videoModal";
const SignUpModal = "#signInModal";
const CloseAboutUS = "#videoModal button.btn.btn-secondary";
const Closelogin = "#logInModal button.btn-secondary";
const CloseContact = "#exampleModal button.btn.btn-secondary";
const CloseSignUp = "#signInModal button.btn.btn-secondary";

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

  //Navigation methods:
  //Click each button
  clickOnContactButton() {
    cy.clickAndOpen_InSameTab(Contact);
    cy.get(ExModal).should("be.visible");
  }

  clickOnAboutUsButton() {
    cy.clickAndOpen_InSameTab(AboutUs);
    cy.get(videoModal).should("be.visible");
  }

  clickOnCarButton() {
    cy.get(Cart).click();
  }

  clickOnLoginButton() {
    cy.clickAndOpen_InSameTab(Login);
    cy.get(Modal).should("be.visible");
  }

  clickOnSignUpButton() {
    cy.clickAndOpen_InSameTab(SignUp);
    cy.get(SignUpModal).should("be.visible");
  }

  clickOnCarButton() {
    cy.intercept("GET", "/cart.html").as("responseCheck");
    cy.get(Cart).click();
    cy.wait("@responseCheck").its("response.statusCode").should("eq", 200);
  }

  clickOnHomeButton() {
    cy.get(Home).click();
  }

  //Closing buttons

  clickOnCloseButtonContact() {
    cy.get(ExModal).should("be.visible");
    cy.get(CloseContact).should("be.visible").wait(1000).click();
  }

  clickOncloseButtonAboutUs() {
    cy.get(CloseAboutUS).should("be.visible").wait(1000).click();
  }

  clickOnCLoseButtonLogin() {
    cy.get(Closelogin).should("be.visible").wait(1000).click();
  }

  clickOnCloseSignUp() {
    cy.get(CloseSignUp).should("be.visible").wait(1000).click();
  }

  //Get title
  getTitle(expectedTitle) {
    cy.title().should("eq", expectedTitle);
  }

  //Carousel methods
  clickOnNext() {
    cy.get(Next).clickAndOpen_InSameTab();
    cy.wait(1000);
  }

  clickOnBack() {
    cy.get(Back).clickAndOpen_InSameTab();
  }


  slideNextAndBack(){
    cy.get("body").should("be.visible"); 
    cy.get(Carousel).should("be.visible"); 
    cy.get(Next).click();
    cy.wait(1000); 
    cy.get(Back).click();
        cy.wait(1000)

  }

  slideToImage(imageSrc) {
    cy.get("body").should("be.visible");
    cy.get(Carousel).should("be.visible");
    let maxSlides = 3;

    const tryToFindImage = (attempt) => {
        if (attempt >= maxSlides) {
            throw new Error(`La imagen ${imageSrc} no fue encontrada después de ${maxSlides} intentos.`);
        }
        cy.get(`#carouselExampleIndicators .carousel-inner .carousel-item img[src="${imageSrc}"]`)
            .then((img) => {
                if (img.is(":visible")) {
                    cy.wrap(img).should("be.visible"); 
                } else {
                    cy.get(Next).click();
                    cy.wait(1000); 
                    tryToFindImage(attempt + 1);
                }
            });
    }

    tryToFindImage(0); // Inicia el intento con 0
}





}
export default HomePage;
