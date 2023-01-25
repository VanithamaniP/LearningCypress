/// <reference type="cypress" / >
describe('Testssuite for handling alert', function()
{
    it('Testcase for Handling the alert',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //verifying the text in the alert
        cy.on('window:alert',(str)=>
        {
            expect(str).eq("Hello , share this practice page and share your knowledge")
        })

        //Verifying the text in the confirmation alert
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equals("Hello , Are you sure you want to confirm?")
        })
    })
})