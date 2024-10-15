
import menuSideBar, { MenuSideBar } from "../support/pages/menu";
import smartTable, { SmartTable } from "../support/pages/smartTable";

describe ('Change Table Data Test', () => {

    beforeEach(() => {
        // Set the window size before each test
        cy.viewport(1920, 1080); // Full HD resolution
        cy.visit ('/',{timeout:100000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
      });

    it ('Change Table Data', () => {
      
      menuSideBar.selectMenuTableAndData();
      menuSideBar.selectMenySmartTable();
      smartTable.getThirdRow().within ( () => {
        smartTable.openEditMode();
        smartTable.modifyFirstNameColumn('Test');
        smartTable.saveChanges();
        
      })

    })

})