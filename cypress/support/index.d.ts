
declare namespace Cypress {
    interface Chainable<Subject = any> {
        logSomeText(options: any): void
    }
}

// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable<Subject> {
      getIframe(iframeSelector: string): Chainable<JQuery<HTMLElement>>;
    }
  }


  

