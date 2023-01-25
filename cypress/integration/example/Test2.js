/// <reference types="Cypress" />
describe('My First Test Suite',function() {
    it('My First Testcase',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#checkBoxOption1').as('checkbox').check().should('be.checked').should('have.value','option1')
        cy.get('@checkbox').uncheck().should('not.be.checked')

        //checking all the checkboxes except checkbox1
        cy.get('[type="checkbox"]').check(['option3','option2']).should('be.checked')

        //selecting the value from the static dropdown
        cy.get('#dropdown-class-example').select('option3')



        //handling dynamic dropdown
      cy.get('#autocomplete').type('Ind')
      cy.get('#ui-id-1 li').each(($el,index,$list) =>
      {
            if($el.text()=='India')
            {
                cy.wrap($el).click()
            }
      })



      //handling visiblity of the element/textbox
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')


      //Selecting the radio button
      cy.get('[value="radio2"]').check()
      cy.get('[value="radio2"]').should('be.checked')
      cy.get('[value="radio3"]').should('not.be.checked')
    })
})