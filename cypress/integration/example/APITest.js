describe('E2EAutomation',function() 
{
it('Placing Order',function()
{
   cy.request("POST","http://216.10.245.166/Library/Addbook.php",{

    "name":"Learn Appium Automation with Java",
    "isbn":"dbvcs",
    "aisle":"2257",
    "author":"John foe"
    }
     ).then(function(response)
    {
        expect(response.body).to.have.property('Msg','successfully added')
        })
})
})