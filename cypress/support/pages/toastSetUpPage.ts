export class ToastSetUpPage {

    positionButton = '.mat-ripple .select-button'
    titleInputField = 'input[name="title"]';
    contentInputField = 'input[name="content"]';
    timeToHideToastInputField = 'input[name="timeout"]';
    toastTypeField = '.mat-ripple .select-button';
    checkbox = 'input[type="checkbox"]';
    positionOptionBottomRight = '[ng-reflect-value="bottom-right"]';
    toastTypeOptionInfo = '[ng-reflect-value="info"]';


getPositionInputField() : Cypress.Chainable {
    return cy.get('nb-select.position-select');
}

getToastTypeInputFiled () {
    return cy.get('.label').contains('Toast type:').parent().find(this.toastTypeField);
    }

getTileInputField() {
    return cy.get(this.titleInputField);
}

getContentInputField() {
    return cy.get(this.contentInputField);
}

getTimeToHideToastInputField () {
    return cy.get(this.timeToHideToastInputField);
}

getCheckboxes() {
    return cy.get('.col-md-6').find(this.checkbox);
}

selectPositionOption () {
   this.getPositionInputField().click().find(this.positionOptionBottomRight).click();

}

enterTitle (title : string) {
    this.getTileInputField().clear().type(title);
}

enterContent (content : string) {
    this.getContentInputField().clear().type(content);
}

enterTimeToHideToast (timeInput : string) {
    this.getTimeToHideToastInputField().clear().type(timeInput);
}

selectToastTypeOption () {
    this.getToastTypeInputFiled().click().find(this.toastTypeOptionInfo).click();
}

}


export default new ToastSetUpPage();