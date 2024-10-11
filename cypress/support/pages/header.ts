export class Header{

    headerGitHubIcon = '.gh-ico'
    headerGitHubText = './/*[@class="gh-text"]'

    findGitHubIcon () : Cypress.Chainable{
        return cy.get(this.headerGitHubIcon);
    }

    findGitHubText () : Cypress.Chainable {
        return cy.xpath(this.headerGitHubText,{timeout:6000}).should('be.visible');
    }

}