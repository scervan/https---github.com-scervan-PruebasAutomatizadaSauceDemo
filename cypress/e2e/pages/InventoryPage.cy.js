class InventoryPage {
    addProductToCart(productName) {
        cy.contains('.inventory_item_name', productName).parent().find('.btn_inventory').click()
    }
  
    goToCart() {
        cy.get('.shopping_cart_link').click()
    }
  }
  
  export default InventoryPage
  