/// <reference types="cypress" />

import * as loginFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'

//Test suite
describe('Regression test suite', function(){
    beforeEach( ()=>{
        cy.visit('http://localhost:3000')})

    //Test case
    it('Perform valid login', function(){
        
        loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
        dashboardFuncs.logout(cy, targets.secondConfContent)
 
    })

    it('Change data in rooms', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include','Testers')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Create Room')
        cy.get(':nth-child(1) > .action > img').click()
        cy.contains('Edit')
        cy.get('.menu > :nth-child(1)').click()
        cy.contains('ID')
        cy.get('.checkbox').click()
        cy.get('.blue').click()

        })


        it('Create Room', function(){

            cy.get(':nth-child(1) > .btn').click()
            cy.contains('New Room')
            cy.get('div:nth-child(2) > div:nth-child(1) > select').select('twin')
            cy.get(':nth-child(2) > input').type('150')   
            cy.get(':nth-child(3) > input').type('1')
            cy.get('.checkbox').click()
            cy.get(':nth-child(5) > input').type('3500')
            cy.get('[value="balcony"]')
            cy.get('[value="ensuite"]')
            cy.get('[value="sea_view"]')
            cy.get('[value="penthouse"]')
            cy.get('.blue').click()
            cy.get(':nth-child(3) > .btn').click()
            
        })

        it('Create new client', function(){
            cy.get('.blocks > :nth-child(2) > .btn').click()
            cy.contains('Clients')
            cy.get('h2 > .btn')
            cy.get(':nth-child(1) > input').type('Henry Olsson')
            cy.get(':nth-child(2) > input').type('henry@testmail.com')
            cy.get(':nth-child(3) > input').type('01234456')
            cy.get('.blue').click()
            cy.get(':nth-child(3) > .btn').click()
        })

        it('Delete reservation', function(){
            cy.get(':nth-child(4) > .btn').click()
            cy.get('img').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.get(':nth-child(4) > .btn').click()
        })

        it('Change bill to paid', function(){
            cy.get(':nth-child(4) > .btn').click()
            cy.get('img').click()
            cy.get('.menu > :nth-child(1)').click()
            cy.get('.checkbox').click()
            cy.get('.blue').click()
            cy.get(':nth-child(3) > .btn').click()

        })
})