/// <reference type="cypress" / >
describe('Mocking the http response',()=>
{
    it('Testcase to Mock the http response',()=>
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method : "GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"

        },{
            statusCode:403,
            body: [{
             
                 "book_name": "RobotFramework",
                "isbn": "984353",
                "aisle": "982053"
            
            }]
        }).as('mockResponse')

        cy.get(".btn.btn-primary").click()
        cy.wait("@mockResponse").then(({request,response})=>
        {
            // cy.get('tr').should('have.length',response.body.length+1)
            expect(response.statusCode).to.equal(403)

        })
       
        // cy.get('p').should('have.text',"Oops only 1 Book available")


    })
})