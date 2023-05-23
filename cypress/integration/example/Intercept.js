/// <reference type="cypress" / >
describe("Intercept Learning",function()
{
    it("Changing Header",function()
    {
        cy.visit('https://www.advantageonlineshopping.com/#/category/Tablets/3')
        //let change the status code to 403 from 200
        cy.intercept("GET","https://www.advantageonlineshopping.com/catalog/api/v1/categories/3/products",
        
            {
                statusCode:403
            }
        ).as('headers')
        cy.wait('@headers').then(({request,response})=>
        {
            expect(response.statusCode).to.equal(403)
        })
    })
})