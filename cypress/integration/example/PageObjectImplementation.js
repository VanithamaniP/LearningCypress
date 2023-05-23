/// <reference type="cypress" / >
import HomePage from '../pageObjects/HomePage'
import ShopPage from '../pageObjects/ShopPage'
import CheckoutPage from '../pageObjects/CheckoutPage'
import PurchasePage from '../pageObjects/PurchasePage'

describe("Framework", function()
{
    before("this will execute before all the test",function()
    {
       cy.log("Before method")
       cy.fixture("Framework1.json").then(function(userData)
       {
        cy.log("Im inside the fixture method")
        this.userData = userData
       })
    })

    //Data's are from Fixtures
    it("Retrieving data from fixtures",function()
    {
      const homePage= new HomePage()
      const shopPage = new ShopPage()
      const checkoutPage = new CheckoutPage()
      const purchasePage = new PurchasePage()
        cy.visit(Cypress.env('URL')+'/angularpractice/')
        homePage.getNameTextBox().type(this.userData.name)
        homePage.selectGender().select(this.userData.gender)
        //validation
       homePage.dataBindingTextBox().should('have.value',this.userData.name)
        homePage.entrepreneurRadioButton().should('be.disabled')
        homePage.getNameTextBox().should('have.attr',"minlength",2)
        homePage.getShopLink().click()
        this.userData.productName.forEach(element => cy.Checkout(element))
        shopPage.getCheckoutButton().click()
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
} )
