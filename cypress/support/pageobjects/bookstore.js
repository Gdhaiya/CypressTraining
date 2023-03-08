export class BookStorePage {

    getAllBook() {
        return cy.get('.rt-tbody a')
    }

    getBookTitle() {
        return cy.get('#title-wrapper #userName-value')
    }

    getAddCollection() {
        return cy.get('.text-right #addNewRecordButton')
    }

    getBackToBookStore() {
        return cy.get('.text-left #addNewRecordButton')
    }

    getBook2() {
        return cy.get('span[id$="Patterns"] a')
    }

    getBook3() {
        return cy.get('span[id$="ASP.NET"] a')
    }

    getProfile() {
        return cy.get('.btn.btn-light.active .text')
    }

    getBookDelete() {
        return cy.get('div.text-right.button.di button')
    }
}