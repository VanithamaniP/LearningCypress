/// <reference type="cypress" / >
describe("Handling the Childwindow",function()
{
    it("Test to handle Child window",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','www.rahulshettyacademy')
        cy.go('back')
        cy.url().should('include','rahulshettyacademy')

    })
})