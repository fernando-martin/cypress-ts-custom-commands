// load the type definition for new command we are adding "cy.dataCy"
// note: this definition also will load regular Cypress definition
// because index.d.ts references global "cypress" types
/// <reference path="../support/index.d.ts" />
// after that the custom commands like "cy.dataCy"
// should be recognized

describe('finds', () => {
  it('element using data-cy custom command', () => {
    cy.visit('index.html')
    // use custom command we have defined above
    cy.dataCy('greeting').should('be.visible')
    cy.dataCy1('greeting').should('be.visible')
  })
})
