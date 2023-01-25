/// <reference types="Cypress" />
describe('My First Test Suite',function() {
    it('My First Testcase',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        
        //clicking the Add to Cart button for the 2nd product by using indexing
        cy.get('.products').as('productclass').find('.product').eq(1).contains('ADD TO CART').click()


        //Clicking the capicum using the direct css locator
        cy.get(':nth-child(3) > .product-action > button').click()

        //clicking the Cashews using the looping, matching with the product name
        cy.get('@productclass').find('.product').each(($el,index,$list)=> {
           const vegText= $el.find('.product-name').text()
           if(vegText.includes('Cashew'))
           {
            cy.wrap($el).find('button').click();
           }
        })

        //Logging the text and making console.log as synchronous
        cy.get('div.brand').then(function(greencart) {
            cy.log(greencart.text())

        }).then(function()
        {
            console.log("my dev console output")
        })

        //Asserting the text

        cy.get('div.brand').should('have.text','GREENKART')
        
    //    const testing= cy.get('div.brand').text()
    //    cy.log(testing) -- will throw error as .text() is not function


    })

  
})