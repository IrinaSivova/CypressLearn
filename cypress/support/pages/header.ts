export class Header{

    headerGitHubIcon = '.gh-ico';
    headerGitHubText = 'span.gh-text';

    findGitHubIcon () : Cypress.Chainable{
        return cy.get(this.headerGitHubIcon);
    }

    findGitHubText () : Cypress.Chainable {
        return cy.get(this.headerGitHubText,{timeout:6000}).contains('Star');
    }
}

export default new Header();