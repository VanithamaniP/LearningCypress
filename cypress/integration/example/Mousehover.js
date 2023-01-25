/// <reference type="cypress" / >
describe("Mouse Hover",function()
{
    it("With show() from jquery",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include',"top")
    })

    it("With the force click()", function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Top').click({force:true})
        cy.url().should('include',"top")
    })
})