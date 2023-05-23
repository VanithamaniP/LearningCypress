/// <reference type="cypress" / >
describe('Mocking the http response',()=>
{
    it('Testcase to Mock the http response',()=>
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        (req)=>
        {

            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>
            {
              
               
            })
        }).as('RequestMock')
        cy.get(".btn.btn-primary").click()
        cy.wait('@RequestMock')

    })
})