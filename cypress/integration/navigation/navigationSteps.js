/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import BasePage from "../../support/Pages/BasePage"

const basePage = new BasePage();


Given(`I visit the homepage`, () =>{
    basePage.navigate("index.html#");
})

When(`I click the contact button`, ()=>{
    cy.clickAndOpen_InSameTab('li.nav-item a.nav-link:contains("Contact")');
})

