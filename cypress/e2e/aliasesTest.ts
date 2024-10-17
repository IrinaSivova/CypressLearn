
describe ('', () => {
    beforeEach( () => {
        cy.visit('');

        cy.get ('[data-test= "filter-items"]').as ('filterInput');
        cy.get ('[data-test="items"]').as('allItems');
        cy.get ('[data-test="items-unpacked"]').as('unpackedItems');
        cy.get ('[data-test="items-packed"]').as('packedItems');
    });


it ('should have filter items', () => {
    cy.get('@filterInput').type('iPhone');

    cy.get('@allItems').should('not.contain.text', 'Hoodie');
    
});


it ('should move items from one to another', () => {
    cy.get ('@unpackedItems').find('li').first().as('itemLabel');
    cy.get('itemLabel').invoke('text').as('itemName');
    cy.get('@itemLabel').click();

    cy.get('@itemName').then((text) => {
        cy.get('@packedItems').contains('text');

    });

    // cy.get('itemLabel').invoke('text').as('itemName', {type: 'static'});
    // cy.get('@itemLabel').click();
    // cy.get('@packedItems').contains('@itemName');
});



});