import menu from "../support/pages/menu";
import toastSetUpPage from "../support/pages/toastSetUpPage";


describe ('Load Toast With Characters', () => {

    beforeEach(() => {
        // Set the window size before each test
        cy.viewport(1920, 1080); // Full HD resolution
        cy.visit ('/',{timeout:200000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
      });

    it ('Load Toast With Characters', () => {

        menu.selectMenuModalAndOverlays();
        menu.selectMenuToastr();

        toastSetUpPage.selectPositionOption();
        toastSetUpPage.enterTitle('Test Title');
        toastSetUpPage.enterContent('Test Content');
        toastSetUpPage.selectToastTypeOption();
     
    

        // Assertions
        // cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('be.visible');
        // cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('contain.text', 'Custom text');
        // cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted').should('contain.text', 'Custom content');
        // cy.get('.ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-info destroy-by-click has-icon custom-icon ng-star-inserted')
        //     .should('have.css', 'background-color')
        //     .and('eq', 'rgb(0, 0, 0)');
        
        
    });

});
