/// <reference type="cypress" / >
describe("validating the webTable",function()
{
    it("validating the webtable",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el,index,$list) =>
        {
            if($el.text().includes('SoapUI'))
            {
                expect(cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    // price.text().includes('25')
                    expect(price.text()).to.equal('35')
                }))
            }
        })
    })
})