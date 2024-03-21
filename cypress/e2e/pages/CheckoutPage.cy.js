class CheckoutPage {
    fillFirstName(value) {
        cy.get('[data-test=firstName]').type(value)
    }

    fillLastName(value) {
        cy.get('[data-test=lastName]').type(value)
    }

    fillPostalCode(value) {
        cy.get('[data-test=postalCode]').type(value)
    }

    continue() {
        cy.get('.cart_button').click()
    }

    finish() {
        cy.get('.cart_button').click()
    }

    confirmOrder() {
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    }
}

export default CheckoutPage
