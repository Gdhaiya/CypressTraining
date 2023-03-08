describe('Validate login Functionality', function () {


    it.skip('login with invalid credentials', function () {
        cy.request("GET", "https://demoqa.com/BookStore/v1/Books")
    })

    it('login with valid credentials', function () {
        cy.request("GET", "https://demoqa.com/BookStore/v1/Books")
    })

    
}) 