export class SmartTable {

    thirdRow = '.ng-star-inserted';
    editButton = '.nb-edit';
    saveButton = '.nb-checkmark';
    firstNameField = 'ng-star-inserted';



    getThirdRow(): Cypress.Chainable{
        return cy.get(this.thirdRow).contains('3').parent().parent().parent().parent();
    }

    openEditMode(){
        cy.get(this.editButton).click();
    }

    modifyFirstNameColumn (name : string){
        cy.get(this.firstNameField).contains('Larry').clear().type(name);
    }


    saveChanges(){
        cy.get(this.saveButton).click();
    }
}

export default new SmartTable();



