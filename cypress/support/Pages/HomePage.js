const { default: BasePage } = require("./BasePage");

class HomePage extends BasePage{
    navigate(path){
        path : "index"
        cy.visit(baseUrl + path)
    }

    verifyResponse(expectedStatus){
        this.waitSomeSeconds
        
    }


}