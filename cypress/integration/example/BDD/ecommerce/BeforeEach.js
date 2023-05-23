beforeEach("this will execute before all the test",function()
{
   cy.log("Before method")
   cy.fixture("Framework1.json").then(function(userData)
   {
    this.userData = userData
   })
})