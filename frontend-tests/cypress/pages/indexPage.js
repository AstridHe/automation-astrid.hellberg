/// <reference types="cypress" />

const loginPageTitle='Testers Hotel'
const usernameTextField=':nth-child(1) > input'
const passwordTextField=':nth-child(2) > input'
const submitLogin='.btn'
const formLabel='Login'

function checkLoginPageTitle(cy){
    cy.title().should('eq', loginPageTitle)
}

function performValidLogin(cy, username, password, ConfirmContent){
    cy.contains(formLabel)
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(submitLogin).click()
    cy.contains(ConfirmContent)
}

module.exports={
    checkLoginPageTitle, performValidLogin
}
