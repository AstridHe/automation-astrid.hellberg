/// <reference types="cypress" />
const nameInput=':nth-child(1) > input'
const emailInput=':nth-child(2) > input'
const phoneInput=':nth-child(3) > input'
const saveBtn='.blue'

function createNewClient(cy, name, email, phone, confirmContent){
    cy.get(nameInput).type(name)
    cy.get(emailInput).type(email)
    cy.get(phoneInput).type(phone)
    cy.get(saveBtn).click()
    cy.contains(confirmContent)
}

module.exports={
    createNewClient
}