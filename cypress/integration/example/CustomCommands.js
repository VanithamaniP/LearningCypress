/// <reference type="cypress" / >
describe('Working on Custom commands',function()
{
    before('before()',function()
    {
        cy.fixture('Framework1.json').then(function(inputData)
        {
            this.inputData=inputData
        })
    })
    it('Testcase',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.contains('Shop').click()
        this.inputData.productName.forEach(element => cy.Checkout(element))
        
    })
})