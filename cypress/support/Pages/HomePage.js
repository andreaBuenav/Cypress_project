const { default: BasePage } = require("./BasePage");

//Elements of the homepage
const Contact = 'li.nav-item a.nav-link:contains("Contact")'
const AboutUs = 'li.nav-item:contains("About us")'
const Cart = '#cartur'
const Login = '#login2'
const SignUp = '#signin2'
const Close = '.btn.btn-secondary'

class HomePage extends BasePage{
   
    navigateToHomePage(){
        cy.visit("/");
    }

    //Obtains the response code
    response(expectedStatusCode, url) {
        cy.intercept('GET', url).as('responseCheck'); 
        cy.wait('@responseCheck').its('response.statusCode').should('eq', expectedStatusCode);
    }

    clickOnContactButton(){
        cy.clickAndOpen_InSameTab(Contact);
    }

    clickOnAboutUsButton(){
        cy.clickAndOpen_InSameTab(AboutUs);
    }

    clickOnCarButton(){
        cy.get(Cart).click();
    }

    clickOnLoginButton(){
        cy.clickAndOpen_InSameTab(Login);
    }

    clickOnSignUpButton(){
        cy.clickAndOpen_InSameTab(SignUp);
    }

    //Get title
    getTitle(expectedTitle){
        cy.title().should('eq', expectedTitle); 
    }

}
export default HomePage;