/// <reference types="cypress" />

import { Login } from "../support/pageobjects/login";
import { ProfilePage } from "../support/pageobjects/profile";

const loginPage = new Login()
const profile = new ProfilePage()

describe('Validate login Functionality', function () {

  beforeEach('navigate to the application', function () {
    cy.fixture("login").then(function (data) {
      this.data = data;
    });
    cy.visit('https://demoqa.com/login');
    loginPage.getWelcomeText().should('have.text', 'Welcome,');
  })

  it('login with invalid credentials', function () {
    cy.login(this.data.invalidUserName, this.data.invalidPassword);
    loginPage.getErrorMessage().should('be.visible').should('have.text', this.data.errorMessage).should('have.css', 'color', 'rgb(255, 0, 0)');
  })

  it('login with valid credentials', function () {
    cy.login(this.data.validUserName, this.data.validPassword);
    cy.url().should('include', 'profile')
    profile.getUserNameText().should('have.text', this.data.validUserName)
    profile.getButton().contains('Log out').should('be.visible')

  })
})