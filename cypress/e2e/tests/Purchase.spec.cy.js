import CartPage from "../pages/CartPage.cy"
import CheckoutPage from "../pages/CheckoutPage.cy"
import InventoryPage from "../pages/InventoryPage.cy"
import LoginPage from "../pages/LoginPage.cy"


describe('Purchase Flow', () => {
    it('should complete a purchase', () => {
        const loginPage = new LoginPage()
        const inventoryPage = new InventoryPage()
        const cartPage = new CartPage()
        const checkoutPage = new CheckoutPage()

        // 1. Autenticarse
        loginPage.visit()
        loginPage.fillUsername('standard_user')
        loginPage.fillPassword('secret_sauce')
        loginPage.submit()

        // Aserción para validar que estamos en la página de inventario
        cy.url().should('include', '/inventory.html')

        // 2. Agregar dos productos al carrito de compras
        inventoryPage.addProductToCart('Sauce Labs Backpack')
        inventoryPage.addProductToCart('Sauce Labs Bike Light')

        // 3. Visualizar el carrito de compras
        inventoryPage.goToCart()

        // Aserción para validar que los dos productos están en el carrito
        cy.get('.cart_item').should('have.length', 2)

        // 4. Completar el formulario de compra
        cartPage.checkout()
        checkoutPage.fillFirstName('John')
        checkoutPage.fillLastName('Doe')
        checkoutPage.fillPostalCode('12345')
        checkoutPage.continue()

        // 5. Finalizar la compra hasta la confirmación
        checkoutPage.finish()
        checkoutPage.confirmOrder()
    })
})
