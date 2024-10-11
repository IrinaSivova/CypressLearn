import { MenuSideBar } from "../support/pages/menu"
import { FormLayoutPage } from "../support/pages/formLayout"

describe ('Creare FormLayout', () => {

    const menu = new MenuSideBar()
    const formLayoutPage = new FormLayoutPage()

    beforeEach(() => {
        // Set the window size before each test
        cy.viewport(1920, 1080); // Full HD resolution
        cy.visit ('/',{timeout:100000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
      });

    it ('createFormLayoutTest', () => {
        
        menu.selectMenuItem();
        menu.selectSubMenuItem();
       
        // inline form
        formLayoutPage.enterNameInlineForm('Test User');
        formLayoutPage.enterEmailInlineForm('test@email.com');

        // Using the Grid
        formLayoutPage.enterEmailGridForm('test2@email/com');
        formLayoutPage.enterPasswordGridForm('Qwert123');
        formLayoutPage.selectRadioButtonGridForm();

        // Basic form
        formLayoutPage.enterEmailBasicForm('test3@email.com');
        formLayoutPage.enterPasswordBasicForm('Qwert1234');
        formLayoutPage.selectCheckboxBasicForm();

        // Form without labels




        


       



    })
})
