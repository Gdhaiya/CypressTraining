/// <reference types="cypress" />

import { Login } from "../support/pageobjects/login";
import { ProfilePage } from "../support/pageobjects/profile";
import { BookStorePage } from "../support/pageobjects/bookstore";

const loginPage = new Login()
const profile = new ProfilePage()
const bookstore = new BookStorePage()

describe('Validate Profile Page Functionality', function () {

    beforeEach('navigate to the application', function () {
        cy.fixture("login").then(function (data) {
            this.data = data;
        });
        cy.visit('https://demoqa.com/login');
    })

    it('login with valid credentials', function () {
        var bookTitle
        cy.login(this.data.validUserName, this.data.validPassword);
        cy.url().should('include', 'profile')
        profile.getSearchBox().should('be.visible')
        profile.getSearchButton().should('be.visible')
        profile.getTableHeaders()
            .then(($el) => {
                expect($el.text()).include('Image').and.include('Title').and.include('Author').and.include('Publisher').and.include('Action')
            })
        profile.getBookStore().click({ force: true })
        profile.getTableHeaders()
            .then(($el) => {
                expect($el.text()).include('Image').and.include('Title').and.include('Author').and.include('Publisher')
            })

        bookstore.getAllBook().first().click({ force: true })
        bookstore.getBookTitle().then(($el) => {
            bookTitle = $el.text()
        })
        bookstore.getAddCollection().click({ force: true })
        //pop up
        cy.on('window:alert', (str) => {
            expect(str).to.contains('Book added to your collection.');
        })
        cy.on('window:confirm', () => true);
        cy.visit('https://demoqa.com/profile')
        cy.get('.action-buttons a').then(($el) => {
            expect($el.text()).to.be.equal(bookTitle)
        })
        // bookstore.getBackToBookStore().click({ force: true })
        // bookstore.getBook2().click({ force: true })
        // bookstore.getBookTitle().then(($el) => {
        //     bookTitle = $el.text()
        // })
        // bookstore.getAddCollection().click({ force: true })
        // //pop up
        // cy.on('window:alert', (str) => {
        //     expect(str).to.contains('Book added to your collection.');
        // })
        // cy.on('window:confirm', () => true);
        // bookstore.getBackToBookStore().click({ force: true })
        // bookstore.getBook3().click({ force: true })
        // cy.on('window:alert', (str) => {
        //     expect(str).to.contains('Book added to your collection.');
        // })
        // cy.on('window:confirm', () => true);
        // bookstore.getBookTitle().then(($el) => {
        //     bookTitle = $el.text()
        // })
        // //bookstore.getAddCollection().click({ force: true })
        // //pop up
        // // cy.on('window:alert', (str) => {
        // //     expect(str).to.contains('Book added to your collection.');
        // // })
        // // cy.on('window:confirm', () => true);
        bookstore.getBookDelete().click({ force: true })
        cy.get('#closeSmallModal-ok').click({force:true})
        cy.wait(5000)
        .then(()=>{
            cy.on('window:alert', (str1) => {
                expect(str1).to.contains('All Books deleted.');
            })
            cy.on('window:confirm', () => true);
        }) 
        cy.reload()
        .then(()=> cy.get('.action-buttons a').should('not.exist'))        
        
        // profile.getLogOut().click()
        // loginPage.getWelcomeText().should('have.text', 'Welcome,');
    })

})