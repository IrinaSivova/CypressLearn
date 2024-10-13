import menu, { MenuSideBar } from "../support/pages/menu"
import formLayoutPage, { FormLayoutPage } from "../support/pages/formLayout"

describe ('Creare FormLayout', () => {


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
        formLayoutPage.enterRecipients('Recipient Test');
        formLayoutPage.enterSubject('Test Subject');
        formLayoutPage.enterMessage('Test Message');

        // Block form
        formLayoutPage.enterFirstNameBlockForm('Test1');
        formLayoutPage.enterLastNameBlockForm('Lastname');
        formLayoutPage.enterEmailBlockForm('testemail@email.com');
        formLayoutPage.enterWebSiteBlockForm('google.com');

        // Horizontal form
        formLayoutPage.enterEmailHorizontalForm('test3@email.com');
        formLayoutPage.enterPasswordHorizontalForm('QWERTY');
        formLayoutPage.checkCheckboxHorizontalForm();


    })
})
