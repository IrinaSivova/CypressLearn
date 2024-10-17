// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable<Subject> {
      getIframe(iframeSelector: string): Chainable<JQuery<HTMLElement>>;
    }
  }


  