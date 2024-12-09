/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../support/Pages/HomePage"

const homepage = new HomePage();
Given(`I visit the homepage`, () =>{
basePage.navigate("");

})

When(`I click the contact button`, ()=>{
    cy.clickAndOpen_InSameTab('li.nav-item a.nav-link:contains("Contact")');
})

