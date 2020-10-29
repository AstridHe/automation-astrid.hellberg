/// <reference types="cypress" />
const nameInput=':nth-child(1) > input'
const emailInput=':nth-child(2) > input'
const phoneInput=':nth-child(3) > input'
const saveBtn='.blue'

function createNewClient(cy, confirmContent){
    cy.get(nameInput).type('Astrid')
    cy.get(emailInput).type('astrid@mail.com')
    cy.get(phoneInput).type('123456')
    cy.get(saveBtn).click()
    cy.contains(confirmContent)
}

module.exports={
    createNewClient
}