
  // Test case using the custom command
  describe('Handling iframes in Cypress', () => {
    it('Finds element inside iframe', () => {
      // Visit the page containing iframe
      cy.visit('/');
      cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();


  
      // Use the custom command to get the iframe and find an element inside
      cy.getIframe('iframe[src^="https://ghbtns.com"]')
        .find('span.gh-text',{timeout:120000})
        .should('have.text', 'Star');        
    });
  });
  