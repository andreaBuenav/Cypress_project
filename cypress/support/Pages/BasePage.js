/// <reference types="cypress" />

import { Assertion } from "chai";

class basePage {
    navigate(path){
      cy.fixture("cypress.json").then((data) => {
        cy.visit(data.baseUrl + path)
      })
    }
   getPageTitle(){
    return cy.title();
   }

 
    
}
export default BasePage;

