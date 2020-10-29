/// <reference types="cypress" />


const createClientBtn='h2 > .btn'
const backBtn=':nth-child(3) > .btn'
const lastClient= ':last-child > .action > img'
const lastClientDelBtn=':last-child > .menu > :nth-child(2)'


function createClient(cy, confirmContent){
    cy.get(createClientBtn).click()
    cy.contains(confirmContent)}

function goBack(cy, confirmContent){
    
    cy.get(backBtn).click()
    cy.contains(confirmContent)
}

function deleteNewestClient(cy){
    cy.get(lastClient).click()
    cy.get(lastClientDelBtn).click()
}


module.exports={
    goBack,
    createClient,
    deleteNewestClient
}