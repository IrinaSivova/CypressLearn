export class FormLayoutPage {

    inputFieldName = '//form[@class="form-inline ng-untouched ng-pristine ng-valid"]//input[@class="input-full-width size-medium status-basic shape-rectangle nb-transition"][1]'
    inputFieldEmail = '//form[@class="form-inline ng-untouched ng-pristine ng-valid"]//input[@class="input-full-width size-medium status-basic shape-rectangle nb-transition"][2]'

    // Grid form
    inputEmailGrid = '//input[@id="inputEmail1"]'
    inputFieldPaswordGrid = '//input[@id="inputPassword2"]'
    radioOptionGrid = '//*[text()="Option 1"]'

    //Basic Form
    inputFieldEmailBasicForm = '//input[@id="exampleInputEmail1"]'
    inputFieldPasswordBasicForm = '//input[@id="exampleInputPassword1"]'
    checkboxBasicForm = '//*[text()="Check me out"]'


    enterEmailInlineForm(email:string){
        cy.xpath(this.inputFieldEmail).type(email)
    }

    enterNameInlineForm(name:string){
        cy.xpath(this.inputFieldName).type(name)
    }

    enterEmailGridForm(email:string){
        cy.xpath(this.inputEmailGrid).type(email)
    }

    enterPasswordGridForm(password:string){
        cy.xpath(this.inputFieldPaswordGrid).type(password)
    }

    selectRadioButtonGridForm(){
        cy.xpath(this.radioOptionGrid).click()
    }

    enterEmailBasicForm(email:string){
        cy.xpath(this.inputFieldEmailBasicForm).type(email)
    }

    enterPasswordBasicForm(password:string){
        cy.xpath(this.inputFieldPasswordBasicForm).type(password)
    }

    selectCheckboxBasicForm(){
        cy.xpath(this.checkboxBasicForm).click()
    }
}
export default new FormLayoutPage();
