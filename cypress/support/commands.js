// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { Login } from "../support/pageobjects/login";
import 'cypress-iframe';
require('@4tw/cypress-drag-drop')
const loginPage = new Login()   

Cypress.Commands.add('login', (userName, password) => {
    loginPage.getUserNameTextBox().type(userName);
    loginPage.getPasswordTextBox().type(password);
    loginPage.getLoginButton().click();
   })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })