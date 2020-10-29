/// <reference types="cypress" />

const optionsFirstRes=':nth-child(1) > .action'
const deleteFistRes='.menu > :nth-child(2)'
const createResBtn='h2 > .btn'
const backBtn='#app > div > div:last-child > a'

function goBack(cy, confirmContent){
    
    cy.get(backBtn).click()
    cy.contains(confirmContent)
}

function createRes(cy, confirmContent){
    cy.get(createResBtn).click()
    cy.contains(confirmContent)
}

function deleteReservation (cy){

    cy.get(optionsFirstRes).click()
    cy.get(deleteFistRes).click()
}

module.exports={
    goBack,
    deleteReservation,
    createRes
}