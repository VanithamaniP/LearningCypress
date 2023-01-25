describe('E2EAutomation',function() 
{
it('Placing Order',function()
{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    .get('.search-keyword').type('ca')
    .get('.products').find('.product')
    .each(($el,index,$list)=>
    {
        if($el.find('.product-name').text().includes('Cashews'))
        {
            cy.wrap($el).find('button').click();
        }

    })
    cy.get('.cart-icon img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
})
})