describe('Testing DemoBlaze',function() 
{
    it('Login',function()
    {
        cy.visit('https://www.demoblaze.com')
        .get('#signin2').click()
        .get('#sign-username',{timeout:5000}).type('Username1')
        .wait(3000)
        .get('#sign-password',{timeout:5000}).type('12345')
    
        .get('.modal-footer').contains('Sign up').click
        cy.on('window:alert',(str) =>
{
    expect(str).to.equals("This user already exist.")
}
)
    })

 
})