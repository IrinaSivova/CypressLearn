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

    //Form whithout labels
    containerFormWithoutLabels = '._ngcontent-els-c501'

    //Block form
    containerBlockForm = ''


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

    enterRecipients (recipient : string){
        cy.get(this.containerFormWithoutLabels).contains('Form without labels').parent().find('[placeholder="Recipients"]').clear().type(recipient);

    }

    enterSubject(subject : string){
        cy.get(this.containerFormWithoutLabels).contains('Form without labels').parent().find('[placeholder="Subject"]').clear().type(subject);
    }

    enterMessage (message : string) {
        cy.get(this.containerFormWithoutLabels).contains('Form without labels').parent().find('[placeholder="Message"]').clear().type(message);
    }

    enterFirstNameBlockForm (name : string) {
        cy.contains('Block form').parent().find('[placeholder = "First Name"]').clear().type(name);
    }

    enterLastNameBlockForm (surname : string) {
        cy.contains('Block form').parent().find('[placeholder = "Last Name"]').clear().type(surname);
    }

    enterEmailBlockForm (email : string) {
        cy.contains('Block form').parent().find('[placeholder =  "Email"]').clear().type(email);
    }

    enterWebSiteBlockForm (website : string) {
        cy.contains('Block form').parent().find('[placeholder = "Website"]').clear().type(website);
    }

    enterEmailHorizontalForm (email : string) {
        cy.contains('Horizontal form').parent().find('[placeholder="Email"]').clear().type(email);
    }

    enterPasswordHorizontalForm (password : string) {
        cy.contains('Horizontal form').parent().find('[placeholder="Password"]').clear().type(password);
    }

    checkCheckboxHorizontalForm () {
        cy.contains('Horizontal form').parent().find('[type="checkbox"]').check();
    }
}

export default new FormLayoutPage();

