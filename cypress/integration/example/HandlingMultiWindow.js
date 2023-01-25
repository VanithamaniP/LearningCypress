/// <reference type="cypress" / >
describe("Handling MultiWindow",function()
{
    it("Grapping the attribute value",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el)
        {
            const Url=el.prop('href')
            cy.log(Url)
            cy.visit(Url)
        })

    })
})
