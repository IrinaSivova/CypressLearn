import {myHelper} from "../support/helpers/myHelper";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    myHelper()
  })
})
