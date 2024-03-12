// https://on.cypress.io/api

describe('First Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Fill all form fields', () => {

    cy.contains('h1', 'Personal Info')

    cy.log('filling out first name')
    cy.get("[data-cy='input-name']")
      .type("Victor").should('have.value', 'Victor')



    // cy.get("[data-cy='input-last-name']")
    //   .type("Machado");

    // cy.get("[data-cy='input-email']")
    //   .type("victormachadogp@gmail.com");

    // cy.get("[data-cy='input-phone']")
    //   .type("55 11 042253235");

    // cy.contains("Next Step").click()
  })

  it('displays form validation', () => {
    // clear out first name
    cy.get("[data-cy='input-name']").clear()
    cy.contains('Next Step').click()
    cy.get('[data-cy="error-name"]').should('contain', 'First name is required')
  })
})

// describe('Second Form', () => {
//   it('Fill all form fields', () => {
//     cy.contains('h1', 'Feedback & Preferences')

//     cy.get("[data-cy='input-message']")
//       .type("Some message with something inside");

//     cy.get('[type="radio"]').first().check()

//     cy.contains("Next Step").click()

//   })
// })

// describe('Third Form', () => {
//   it('Fill all form fields', () => {
//     cy.visit('/feedback-rate')
//     cy.contains('h1', 'Share Your Feedback')

//     cy.get('[type="radio"]').first().check({ force: true })

//     cy.contains("Next Step").click()

//   })
// })








