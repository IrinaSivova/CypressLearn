import menu from "../support/pages/menu";
import toastSetUpPage from "../support/pages/toastSetUpPage";


describe ('Load Toast With Characters', () => {

    beforeEach(() => {
        // Set the window size before each test
        cy.visit ('/',{timeout:200000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
    });

    it('Load Toast With Characters', () => {

        menu.selectMenuModalAndOverlays();
        menu.selectMenuToastr();

        toastSetUpPage.selectPositionOption();
        toastSetUpPage.enterTitle('Test Title');
        toastSetUpPage.enterContent('Test Content');
        toastSetUpPage.selectToastTypeOption();
     

        // Added during the lesson
        //cy.contains('Position:').siblings('nb-select').find('button').click();
        //cy.get('[ng-reflect-value="bottom-left"]').click();
        //cy.xpath('//input[@name="timeout"]').clear().type('50');
        //cy.contains('button', 'Show toast').click();
       
        cy.get('nb-toastr-container nb-toast').then( toastContainer => {
            expect(toastContainer).to.contain('HI there!')
            expect(toastContainer).to.contain(`I'm cool toaster!`)

            cy.wrap(toastContainer).find(`[data-name="email"]`).should('exist');
            cy.wrap(toastContainer).should('have.css', 'background-color', 'rgb(98, 0, 238)')
        });

    });
  
});

