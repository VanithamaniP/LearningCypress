class HomePage
{

getNameTextBox()
{
    return cy.get('[name="name"]:nth-child(2)')
}
selectGender()
{
    return cy.get('select')
}
dataBindingTextBox()
{
    return  cy.get('[name="name"]:nth-child(1)')
}
entrepreneurRadioButton()
{
    return  cy.get('#inlineRadio3')
}
getShopLink()
{
    return cy.contains('Shop')
}
}
export default HomePage