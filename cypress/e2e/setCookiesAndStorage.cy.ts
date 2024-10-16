
it(`Set Cookies`, () => {
    cy.visit('/')
    cy.setCookie('testCookie', 'qweqwe')
})


it.only(`Set Storages`, () => {
    cy.visit('/')

    window.localStorage.setItem('localStorage-testItem', 'qwe123')
    window.sessionStorage.setItem('sessionStorage-testItem', 'qwe123')
})
