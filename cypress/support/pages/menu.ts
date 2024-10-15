export class MenuSideBar {

    formsItem = '.menu-title'
    formLayoutItem = '.menu-title'
    tablesAndData = '.menu-title'
    smartTable = '.menu-title'
    modalAndOverlays = '.menu-title'
    toastr = '.menu-title'


    selectMenuItem(){
        cy.get(this.formsItem).contains('Forms').click();
    }

    selectSubMenuItem(){
        cy.get(this.formLayoutItem).contains('Form Layouts').click();
    }

    selectMenuTableAndData(){
        cy.get(this.tablesAndData,{timeout:6000}).contains('Tables & Data').click();
    }

    selectMenySmartTable(){
        cy.get(this.smartTable,{timeout:6000}).contains('Smart Table').click();
    }

    selectMenuModalAndOverlays(){
        cy.get(this.modalAndOverlays).contains('Modal & Overlays').click();
    }

    selectMenuToastr(){
        cy.get(this.modalAndOverlays).contains('Toastr').click();
    }
}

export default new MenuSideBar();