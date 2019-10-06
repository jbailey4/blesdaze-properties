Cypress.Commands.overwrite('wait', (originalFn, subject, msOrFnOrAlias, options = {}) => {
    cy.window().then((appWindow) => {
        if (appWindow.mirage) {
            return Promise.resolve()
        } else {
            return originalFn(subject, msOrFnOrAlias, options)
        }    
    })
})
