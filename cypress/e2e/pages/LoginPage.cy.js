class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/')
    }
  
    fillUsername(value) {
  
        cy.get('[data-test=username]').type(value)
    }
  
    fillPassword(value) {
        cy.get('[data-test=password]').type(value)
    }
  
    submit() {
        cy.get('.btn_action').click()
    }
  }
  
  export default LoginPage
  