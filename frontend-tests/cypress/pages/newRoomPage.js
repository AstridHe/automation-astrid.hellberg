/// <reference types="cypress" />

const { checkRoomsBtn } = require("./dashboardPage")

const selectCat='div:nth-child(2) > div:nth-child(1) > select'
const roomNrInput=':nth-child(2) > input'
const floorInput=':nth-child(3) > input'
const checkbox='.checkbox'
const priceInput=':nth-child(5) > input'
const features=':nth-child(6) > select'
const saveBtn='.blue'

function createNewRoom(cy, roomNr, floorNr, price, confirmContent){
cy.get(selectCat).select('twin')
cy.get(roomNrInput).type(roomNr)
cy.get(floorInput).type(floorNr)
cy.get(checkbox).click()
cy.get(priceInput).type(price)
cy.get(features).select(['balcony', 'sea_view']).invoke('val').should('deep.equal', ['balcony', 'sea_view'])
cy.get(saveBtn).click()
cy.contains(confirmContent)
}


module.exports={
   createNewRoom
}