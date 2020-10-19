/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Bening Sukmaningrum')
        cy.get('[placeholder ="Email"][type="text"]').type('sukma.bening42@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('sukma.bening42@gmail.com')
        cy.get('#inputPassword2').type('bening')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('sukma.bening42@gmail.com')
        cy.get('#exampleInputPassword1').type('bening')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Bening Sukmaningrum')
        cy.get('[placeholder="Subject"]').type('Tugas PPL Cypress')
        cy.get('[placeholder="Message"').type('Mengerjakan Project Cypress')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Bening')
        cy.get('#inputLastName').type('Sukma')
        cy.get('#inputEmail').type('sukma.bening42@gmail.com')
        cy.get('#inputWebsite').type('www.wikipedia.org')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('sukma.bening42@gmail.com')
        cy.get('#inputPassword3').type('bening')
        cy.get('.custom-checkbox').last().click()
    })

});