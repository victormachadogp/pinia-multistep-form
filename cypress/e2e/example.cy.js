// https://on.cypress.io/api

describe('Testing form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays form validation', () => {
    // clear out first name
    cy.get("[data-cy='input-name']").clear()
    cy.contains('Next Step').click()
    cy.get('[data-cy="error-name"]').should('contain', 'First name is required')
  })

  it('Fill all form fields', () => {

    cy.contains('h1', 'Personal Info')

    cy.log('filling out first name')
    cy.get("[data-cy='input-name']")
      .type("Victor").should('have.value', 'Victor')


    cy.log('filling out last name')
    cy.get("[data-cy='input-last-name']")
      .type("Machado");

    cy.log('filling out email')
    cy.get("[data-cy='input-email']")
      .type("victormachadogp@gmail.com");

    cy.log('filling out phone')
    cy.get("[data-cy='input-phone']")
      .type("55 11 042253235");

    cy.contains("Next Step").click()

    cy.log('Locating second form title')
    cy.contains('h1', 'Feedback & Preferences')

    cy.log('Writing message')
    cy.get("[data-cy='input-message']")
      .type("Some message with something inside");

    cy.log('Choosing between radios')
    cy.get('[type="radio"]').first().check()

    cy.contains("Next Step").click()

    cy.log('Locating third form title')
    cy.contains('h1', 'Share Your Feedback')

    cy.log('Choosing between radios')
    cy.get('[type="radio"]').first().check({ force: true })

    cy.contains("Next Step").click()
  })


})








