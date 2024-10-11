export class MenuSideBar {

    formsItem = '//*[@data-name="edit-2"]'
    formLayoutItem = '//span[@class="menu-title ng-tns-c141-11"]'


    selectMenuItem(){
        cy.xpath(this.formsItem).should('be.visible').click();
    }

    selectSubMenuItem(){
        cy.xpath(this.formLayoutItem).should('be.visible').click();
    }

}