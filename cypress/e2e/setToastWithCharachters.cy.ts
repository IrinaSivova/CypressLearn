describe ('Load Toast With Characters', () => {

    beforeEach(() => {
        // Set the window size before each test
        cy.viewport(1920, 1080); // Full HD resolution
        cy.visit ('https://sanitarskyi-admin-panel-f873a4ce5323.herokuapp.com/',{timeout:100000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
      });

    it ('Load Toast With Characters', () => {
        cy.get('[data-name="browser"]').should('be.visible').click();
        cy.xpath('//*[text()="Toastr"]',{timeout:6000}).click();
       // cy.get('.select-button bottom',{timeout:6000}).contains('top-right').should('be.visible').click();
       // cy.get('#nb-option-27').click();
        cy.xpath('//input[@ng-reflect-model="HI there!"]').type('Custom text');
        cy.xpath('//input[@ng-reflect-model="I\'m cool toaster!"]').type('Custom content');
        cy.xpath('//input[@name="timeout"]').type('500');
        cy.get('.select-button bottom').contains('primary').click();
        cy.get('#id="nb-option-34"').click();
        cy.xpath('.//button[text()="Show toast"]').click();

        // Assertions
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('be.visible');
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('contain.text', 'Custom text');
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('contain.text', 'Custom content');
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(0, 0, 0)');
        
        










    })

})