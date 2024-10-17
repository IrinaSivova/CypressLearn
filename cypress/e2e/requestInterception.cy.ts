import searchResponse from '../fixtures/rozetkaSearch.json'

it(`Cypress request interception`, () => {
    cy.intercept('GET', 'https://search.rozetka.com.ua/ua/search/api/v7/autocomplete/?front-type=xl&country=UA&lang=ua&text=*', searchResponse)

    cy.visit('https://rozetka.com.ua/ua/')
    cy.get('input.search-form__input').type('йцу', {delay: 1000})
    cy.get('li.search-suggest__item').first().should('contain', 'sam')
})
