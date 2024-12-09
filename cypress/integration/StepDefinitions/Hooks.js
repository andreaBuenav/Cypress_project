/// <reference types="cypress" />
import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"


//Executed before every  @smoke test scenario
Before({tags : "@smoke"},()=>{
cy.log("***Smoke test starting***");
})


//Executed before every  @regression test scenario
Before({tags : "@regression"},()=>{
    cy.log("***Regression test starting***");
    })


//After every scenario

After(()=>{
    cy.log("**Scenario finished**");
    cy.end
})