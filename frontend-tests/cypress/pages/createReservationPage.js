/// <reference types="cypress" />

const startInput=':nth-child(1) > input'
const endInput=':nth-child(2) > input'
const selectClient=':nth-child(3) > select'
const selectRoom=':nth-child(4) > select'
const selectBill=':nth-child(5) > select'
const saveBtn='.blue'

function createNewRes (cy, startDate, endDate, confirmContent){
    cy.get(startInput).type(startDate)
    cy.get(endInput).type(endDate)
    cy.get(selectClient).select('Jonas Hellman (#1)')
    cy.get(selectRoom).select('Floor 1, Room 101')
    cy.get(selectBill).select('ID: 1')
    cy.get(saveBtn).click()
    cy.contains(confirmContent)
}

module.exports={
    createNewRes
}