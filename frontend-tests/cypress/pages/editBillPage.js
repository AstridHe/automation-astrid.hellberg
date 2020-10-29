/// <reference types="cypress" />


const checkbox='.checkbox'
const saveBtn='.blue'
const backBtn='[href="/bills"]'

function payBill(cy, confirmContent){
    cy.get(checkbox).click()
    cy.get(saveBtn).click()
    cy.contains(confirmContent)

}


module.exports={
    payBill
}