declare namespace Cypress {
    interface Chainable<Subject = any> {
        logSomeText(options: any): void
    }
}
