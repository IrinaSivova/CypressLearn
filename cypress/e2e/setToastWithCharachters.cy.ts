describe('Load Toast With Characters', () => {

    beforeEach(() => {
        // Set the window size before each test
        cy.viewport(1920, 1080); // Full HD resolution
        cy.visit('https://sanitarskyi-admin-panel-f873a4ce5323.herokuapp.com/', {timeout: 100000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
    });

    // .row input[type="checkbox"]

    it('Load Toast With Characters', () => {
        cy.get('[data-name="browser"]').should('be.visible').click();
        cy.xpath('//*[text()="Toastr"]', {timeout: 6000}).click();
        // cy.get('.select-button bottom',{timeout:6000}).contains('top-right').should('be.visible').click();
        // cy.get('#nb-option-27').click();
        cy.xpath('//input[@ng-reflect-model="HI there!"]').type('Custom text');
        cy.xpath('//input[@ng-reflect-model="I\'m cool toaster!"]').type('Custom content');
        cy.xpath('//input[@name="timeout"]').type('500');
        cy.get('.select-button bottom').contains('primary').click();
        cy.get('#nb-option-34').click();
        cy.xpath('.//button[text()="Show toast"]').click();

        // Assertions
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('be.visible');
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('contain.text', 'Custom text');
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('contain.text', 'Custom content');
        cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(0, 0, 0)');


    })

    it.only('Load Toast With Characters', () => {

        cy.get('[data-name="browser"]').should('be.visible').click();
        cy.xpath('//*[text()="Toastr"]', {timeout: 6000}).click();


        cy.contains('Position:').siblings('nb-select').find('button').click();
        cy.get('[ng-reflect-value="bottom-left"]').click();
        cy.xpath('//input[@name="timeout"]').clear().type('50');
        cy.contains('button', 'Show toast').click();
        // cy.get('nb-toastr-container nb-toast').should('contain', 'HI there!')
        // cy.get('nb-toastr-container nb-toast').should('contain', `I'm cool toaster!`)
        // cy.get('nb-toastr-container nb-toast').find('[data-name="email"]').should('be.visible')
        // cy.get('nb-toastr-container nb-toast').should('have.css', 'background-color', 'rgb(98, 0, 238)')

        cy.get('nb-toastr-container nb-toast').then( toastContainer => {
            expect(toastContainer).to.contain('HI there!')
            expect(toastContainer).to.contain(`I'm cool toaster!`)

            cy.wrap(toastContainer).find(`[data-name="email"]`).should('exist');
            cy.wrap(toastContainer).should('have.css', 'background-color', 'rgb(98, 0, 238)')

            // expect(toastContainer).to.contain.html(`[data-name="email"]`)
            // expect(toastContainer).to.have.css('background-color', 'rgb(98, 0, 238)')
        })

        // soft assertions workaround
        // try{
        //
        // } catch {
        //
        // }

    })
})
