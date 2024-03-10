// https://on.cypress.io/api

describe('First Form', () => {
  it('Fill all form fields', () => {
    cy.visit('/')
    cy.contains('h1', 'Personal Info')

    cy.get("[data-cy='input-name']")
      .type("My First Post");
  })
})
