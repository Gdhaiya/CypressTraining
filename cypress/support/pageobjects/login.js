export class Login {
    //method
    getUserNameTextBox() {
        return cy.get('#userName')
    }

    getPasswordTextBox() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#login')
    }

    getWelcomeText() {
        return cy.get('#userForm h2')
    }

    getErrorMessage() {
        return cy.get('#name')
    }
}