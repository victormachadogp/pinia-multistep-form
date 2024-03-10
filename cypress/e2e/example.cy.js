// https://on.cypress.io/api

describe('First Form', () => {
  it('Fill all form fields', () => {
    cy.visit('/')
    cy.contains('h1', 'Personal Info')

    cy.get("[data-cy='input-name']")
      .type("Victor");

    cy.get("[data-cy='input-last-name']")
      .type("Machado");

    cy.get("[data-cy='input-email']")
      .type("victormachadogp@gmail.com");

    cy.get("[data-cy='input-phone']")
      .type("55 11 042253235");

    cy.contains("Next Step").click()
  })
})
