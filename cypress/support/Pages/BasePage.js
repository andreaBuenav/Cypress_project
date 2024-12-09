/// <reference types="cypress" />

import { Assertion } from "chai";

class BasePage {
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

