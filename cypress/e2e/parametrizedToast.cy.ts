import testData from '../fixtures/toastTestData.json'

const toastDisplayTime: string = '500'

beforeEach('Open page', () => {
    cy.visit('/');

    cy.get('[src="assets/images/dark-theme.jpg"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();

})

testData.forEach( (toastTest: {testData: any, expectedResult: any }) => {
    it(`Toast test for position ${toastTest.testData.position}, and type ${toastTest.testData.type}`, () => {

        cy.get('ngx-toastr', {timeout: 15000}).should('be.visible');

        cy.get('div.col-md-6.col-sm-12  button.select-button').eq(0).click();
        cy.get(`nb-option[ng-reflect-value="${toastTest.testData.position}"]`).click();
        cy.get(`input[name="title"]`).clear()
        cy.get(`input[name="title"]`).type(toastTest.testData.title);
        cy.get(`input[name="content"]`).clear();
        cy.get(`input[name="content"]`).type(toastTest.testData.content);
        cy.get(`input[name="timeout"]`).clear();
        cy.get(`input[name="timeout"]`).type(toastDisplayTime);
        cy.get(`div.col-md-6.col-sm-12  button.select-button`).eq(1).click();
        cy.get(`nb-option[ng-reflect-value="${toastTest.testData.type}"]`).click();
        cy.contains('button', 'Show toast').click();

        cy.get('nb-toast[ng-reflect-toast]').then(toast => {
            cy.wrap(toast).should('contain', toastTest.testData.title)
                .and('contain', toastTest.testData.content)
                .and('have.css', 'background-color')
                .and('eq', toastTest.expectedResult.color);

            // expect(toast).to.have.css('background-color', 'rgb(0, 214, 143)')
            cy.wrap(toast).find(`g[data-name="${toastTest.expectedResult.icon}"]`).should('exist');

            cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', toastTest.expectedResult.position.justifyContent);
            cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'align-items').and('eq', toastTest.expectedResult.position.alignItems);
        });

    })


})
