describe ('Load Toast With Characters', () => {

    beforeEach(() => {
        // Set the window size before each test
        cy.viewport(1920, 1080); // Full HD resolution
        cy.visit ('/',{timeout:100000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
      });

    it ('Change Table Data', () => {



    })

})