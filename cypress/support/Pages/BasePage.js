/// <reference types="cypress" />

import { Assertion } from "chai";

class BasePage {
    navigate(path){
      cy.fixture("cypress.json").then((data) => {
        cy.visit(data.baseUrl + path)
      })
    }
    //wait methods
    waitSomeSeconds() {
        cy.wait(3 * 1000);
    }

    getResponse(){
        cy.wait(3*1000).getResponse();
      }

 
    
}
export default BasePage;

