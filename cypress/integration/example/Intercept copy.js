/// <reference type="cypress" / >
describe("Intercept Learning",function()
{
    it("Changing Header",function()
    {
        cy.visit('https://www.advantageonlineshopping.com/#/category/Tablets/3')
        //let change the status code to 403 from 200
        cy.intercept("GET", "https://www.advantageonlineshopping.com/catalog/api/v1/categories/3/products",
         (req) => {
            const { body } = req
            req.continue((res) => {
              res.body.products = [],
              res.body.categoryName = "Modified"
            })
          }).as('prod')

          cy.wait('@prod').then(function({request,response})
          {
            expect(response.body.categoryName).is.equal("Modified")
            expect(response.body.products).is.empty
          })
          
    })
})