/// <reference type="cypress" / >
describe("Framework", function()
{
    before("this will execute before all the test",function()
    {
       cy.log("Before method")
       cy.fixture("Framework1.json").then(function(userData)
       {
        cy.log("Im inside the fixture method")
        this.userData = userData
       })
    })
    after("This will execute after all the test", function()
    {
        cy.log("After method")
    })
    //Data hardcoding
    // it("Learning fixtures",function()
    // {
    //     cy.visit("https://rahulshettyacademy.com/angularpractice/")
    //     cy.get('[name="name"]:nth-child(2)').type("Alice")
    //     cy.get('#exampleFormControlSelect1').select('Female')
    // })

    //Data's are from Fixtures
    it("Retrieving data from fixtures",function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('[name="name"]:nth-child(2)').type(this.userData.name)
        cy.get('select').select(this.userData.gender)
        //validation
        cy.get('[name="name"]:nth-child(1)').should('have.value',this.userData.name)
        // cy.get('[name="name"]:nth-child(1)').then(function(names)
        // {
        //     const name=names.text()
        //     expect(name).to.equal(this.userData.name)
        // })
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('[name="name"]:nth-child(2)').should('have.attr',"minlength",2)
        //using prop
        cy.get('[name="name"]:nth-child(2)').then(function(bF)
        {
            const len=bF.prop('minlength')
            cy.log(len)
        })
    })
} )
