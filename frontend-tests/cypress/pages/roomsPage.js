/// <reference types="cypress" />

const backBtn=':nth-child(3) > .btn' 
const createRoomBtn='h2 > .btn'

function goBack(cy, confirmContent){
    
    cy.get(backBtn).click()
    cy.contains(confirmContent)
}

function createRoom(cy, confirmContent){
    cy.get(createRoomBtn).click()
    cy.contains(confirmContent)
}
module.exports={
    goBack,
    createRoom
}