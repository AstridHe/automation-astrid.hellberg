/// <reference types="cypress" />

const title='Bills'
const actionBtn=':nth-child(1) > .action'
const edit='.menu > :nth-child(1)'
const backBtn=':nth-child(3) > .btn'


function goBack(cy, confirmContent){
    
    cy.get(backBtn).click()
    cy.contains(confirmContent)
}

function editBill(cy, confirmContent){
    cy.contains(title)
    cy.get(actionBtn).click()
    cy.get(edit).click()
    cy.contains(confirmContent)
}

module.exports={
    goBack,
    editBill
}