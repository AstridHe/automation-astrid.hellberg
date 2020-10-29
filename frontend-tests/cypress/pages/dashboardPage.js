/// <reference types="cypress" />

const logoutBtn='.user > .btn'
const logoutLabel='Logout'
const roomsBtn=':nth-child(1) > .btn'
const clientsBtn='.blocks > :nth-child(2) > .btn'
const billsBtn=':nth-child(3) > .btn'
const reservationsBtn=':nth-child(4) > .btn'


function logout(cy, ConfirmContent){
    cy.contains(logoutLabel)
    cy.get(logoutBtn).click()
    cy.contains(ConfirmContent)
}
function checkRoomsBtn(cy, confirmContent){
    cy.get(roomsBtn).click()
    cy.contains(confirmContent)
}
function checkClientsBtn(cy, confirmContent){
    cy.get(clientsBtn).click()
    cy.contains(confirmContent)

}
function checkBillsBtn(cy, confirmContent){
    cy.get(billsBtn).click()
    cy.contains(confirmContent)
}
function checkReservationsBtn(cy, confirmContent){
    cy.get(reservationsBtn).click()
    cy.contains(confirmContent)
}

module.exports={
    logout,
    checkRoomsBtn,
    checkClientsBtn,
    checkBillsBtn,
    checkReservationsBtn
}