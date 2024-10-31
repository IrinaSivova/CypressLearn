
declare namespace Cypress {
    interface Chainable<Subject = any> {
        logSomeText(options: any): void
    }
}


declare namespace Cypress {
    interface Chainable<Subject> {
      getIframe(iframeSelector: string): any;
    }
  }


  

