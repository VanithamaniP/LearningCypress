/// <reference type="cypress" / >
const neatcsv=require("neat-csv")
describe('Generating JWT token',function()
{
    it('hitting Login API',async function()
    {
       var prodName
        cy.hittingLoginAPI().then(function()
        {
        cy.visit('https://rahulshettyacademy.com/client/',{
            onBeforeLoad : (window)=>
            {
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })

        cy.get('h5 b').eq(1).then(function(prdtext)
        {
           prodName= prdtext.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('ind')
        cy.get('section[class*="ta-results"] button').each(($e1,index,$list)=>{
         
            var CountryName=$e1.text()
            cy.log(CountryName)
            if($e1.text()==" India")
            {
                cy.wrap($e1).click()
            }
        })

        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.contains('Download').click()
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_test.csv")
        .then(async function(text)
        {
            const opFile=await neatcsv(text)
            console.log(opFile)
            var actualPrdName = opFile[0]["Product Name"]
            expect(prodName).to.equal(actualPrdName)
        })
    })



    })
})