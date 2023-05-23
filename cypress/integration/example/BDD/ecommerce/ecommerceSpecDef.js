import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../pageObjects/HomePage'
import ShopPage from '../../../pageObjects/ShopPage'
import CheckoutPage from '../../../pageObjects/CheckoutPage'
import PurchasePage from '../../../pageObjects/PurchasePage'
const homePage= new HomePage()
const shopPage = new ShopPage()
const checkoutPage = new CheckoutPage()
const purchasePage = new PurchasePage()
let name 
Given('Login to the application',()=>
{
    cy.visit(Cypress.env('URL')+'/angularpractice/')
})

When('Selecting product',function()
{
    homePage.getShopLink().click()
    this.userData.productName.forEach(element => cy.Checkout(element))
    shopPage.getCheckoutButton().click()
})

When('validating the price',()=>
{
    var sum=0
        checkoutPage.prdPrice().each((ele,index,$list)=>
        {
           var amount= ele.text()
           amount =amount.split(" ")
           amount=Number(amount[1].trim())
           sum=Number(sum)+amount
        }).then(function()
        {cy.log(sum)})

        checkoutPage.totalPrice().each(function(totalEle)
        {
           var totalAmount= totalEle.text()
           totalAmount= totalAmount.split(" ")
           totalAmount=  Number(totalAmount[1].trim())
           cy.log(totalAmount)
           expect(totalAmount).to.equal(sum)

        })
})

Then('Selecting the country and verifying the messag',()=>
{
    checkoutPage.finalCheckout().click()
    purchasePage.countryTextbox().type('India')
    purchasePage.autoSuggession().click()
    purchasePage.agreeCheckBox().click({force:true})
    purchasePage.purchaseButton().click()
    purchasePage.alertMessage().then(function(msg)
    {
        if(msg.text().includes('Success')&&expect(msg.text().includes('Success')).to.be.true)
        {
            cy.log("E2E flow completed")
        }

    })
})

When('Entering the user Details',function(dataTable)
{
      name = dataTable.rawTable[1][0];
    homePage.getNameTextBox().type(name)
    homePage.selectGender().select(dataTable.rawTable[1][1])
})

Then('Validating the user Details',function()
{
    homePage.dataBindingTextBox().should('have.value',name)
    homePage.entrepreneurRadioButton().should('be.disabled')
    homePage.getNameTextBox().should('have.attr',"minlength",2)
    homePage.getShopLink().click()
})