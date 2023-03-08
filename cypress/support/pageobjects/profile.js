export class ProfilePage {
    getUserNameText() {
        return cy.get('#userName-value')
    }

    getButton() {
        return cy.get('#submit')
    }

    getSearchBox() {
        return cy.get('#searchBox')
    }

    getSearchButton() {
        return cy.get('#basic-addon2')
    }

    getTableHeaders() {
        return cy.get('.rt-resizable-header-content')
    }

    getPreviousPagination() {
        return cy.get('.-previous')
    }

    getNextPagination() {
        return cy.get('.-next')
    }

    getPageOption() {
        return cy.get('span>select')
    }

    getBookStore() {
        return cy.get('#gotoStore')
    }

    getDeleteBook() {
        return cy.get('div.text-right.button.di')
    }

    getLogOut() {
        return cy.get('.btn.btn-primary')
    }
}
