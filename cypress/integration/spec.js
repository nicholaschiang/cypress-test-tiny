/// <reference types="cypress" />
describe('page', () => {
  it('fails to properly chain attr assertions', () => {
    cy.visit('https://example.cypress.io')

    cy.get('#utilities').should('have.attr', 'id').then((attr) => {
      console.log('This is a string, not an HTMLElement:', attr)
      expect(attr).not.to.equal('utilities')
      expect(attr).not.to.satisfy((attr) => typeof attr === 'string')
    })
  })
})
