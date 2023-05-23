class PurchasePage
{
    countryTextbox()
    {
        return cy.get('#country')
    }
    autoSuggession()
    {
        return cy.get('div.suggestions ul li a')
    }
    agreeCheckBox()
    {
        return cy.get('#checkbox2')
    }

    purchaseButton()
    {
        return cy.get('[value="Purchase"]')
    }
    alertMessage()
    {
        return cy.get('[class*="alert-success"]')
    }
}
export default PurchasePage 