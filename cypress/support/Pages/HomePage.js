const { default: BasePage } = require("./BasePage");

class HomePage extends BasePage{
   
    navigateToHomePage(){
        super.navigate("");
    }

    clickOnContactButton(){
        cy.clickAndOpen_InSameTab('li.nav-item a.nav-link:contains("Contact")');
    }

    clickOnAboutUsButton(){
        cy.clickAndOpen_InSameTab('li.nav-item a.nav-link:contains("Contact")');
    }

    clickOnCarButton(){
        cy.get("#cartur").click();
        return new ShoppingCartPage();
    }

    clickOnLoginButton(){
        cy.clickAndOpen_InSameTab("#login2");
        cy.get(".btn.btn-secondary").click();
    }

    clickOnSignUpButton(){
        cy.clickAndOpen_InSameTab("#signin2");
    }

}
export default HomePage;