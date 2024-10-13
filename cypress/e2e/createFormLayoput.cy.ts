import menu from "../support/pages/menu"
import formLayoutPage  from "../support/pages/formLayout"
import inlineForm from '../fixtures/inlineForm.json'

describe ('Creare FormLayout', () => {
    beforeEach(() => {
        // Set the window size before each test
        cy.visit('/',{timeout:100000});
        cy.get(':nth-child(2) > nb-card-header').should('be.visible').click();
      });

    it.skip('createFormLayoutTest', () => {

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


    it ('createFormLayoutTest', () => {

        menu.selectMenuItem();
        menu.selectSubMenuItem();

        cy.log('Inline form')
        cy.get('[placeholder="Jane Doe"]').type(inlineForm.name);
        cy.get('.form-inline').find('[placeholder="Email"]').type(inlineForm.email);
        // cy.get('.form-inline [placeholder="Email"]').type('qeewrewr@mail.com');
        cy.get('.form-inline [type="checkbox"]').check({force: true})
        cy.get('.form-inline [type="submit"]', {timeout:6000}).click()

        cy.log('Form without labels')
        // cy.contains('nb-card', 'Form without labels').find('[placeholder="Recipients"]').type('llhkh')
        cy.get('html').contains('nb-card', 'Form without labels', {timeout:6000, matchCase: false}).find('[placeholder="Recipients"]', {timeout:6000}).type('llhkh')
    })
})
