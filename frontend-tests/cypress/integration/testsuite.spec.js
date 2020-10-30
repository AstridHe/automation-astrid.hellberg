/// <reference types="cypress" />

import * as loginFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as billsFuncs from '../pages/billsPage'
import * as reservFuncs from '../pages/reservationsPage'
import * as newRoomFunc from '../pages/newRoomPage'
import * as newClientFunc from '../pages/newClientPage'
import * as editBillsFunc from '../pages/editBillPage'
import * as newResFunc from '../pages/createReservationPage'
import faker from 'faker'


//Test suite
describe('Regression test suite', function(){
    beforeEach( ()=>{
        cy.visit(targets.baseURL)
        loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
    })
    afterEach( ()=>{
        dashboardFuncs.logout(cy, targets.secondConfContent)
    })

    //Test case
    //it('Perform valid login', function(){
        
    //    loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
     //   dashboardFuncs.logout(cy, targets.secondConfContent)
    //}) 

    it('Click through pages', function(){
        
        //loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
        dashboardFuncs.checkRoomsBtn(cy, targets.label1)
        roomsFuncs.goBack(cy, targets.firstConfContent)
        dashboardFuncs.checkClientsBtn(cy, targets.label3)
        clientsFuncs.goBack(cy, targets.firstConfContent)
        dashboardFuncs.checkBillsBtn(cy, targets.label6)
        billsFuncs.goBack(cy, targets.firstConfContent)
        dashboardFuncs.checkReservationsBtn(cy, targets.label7)
        reservFuncs.goBack(cy, targets.firstConfContent)
       // dashboardFuncs.logout(cy, targets.secondConfContent)

    })

    it('Create New Room', function(){
        //loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
        dashboardFuncs.checkRoomsBtn(cy, targets.label1)
        roomsFuncs.createRoom(cy, targets.label2)
        newRoomFunc.createNewRoom(cy, faker.random.number(1100), faker.random.number(10), faker.random.number(), targets.label1)
        roomsFuncs.goBack(cy, targets.firstConfContent)
        //dashboardFuncs.logout(cy, targets.secondConfContent)
    })

    it('Create New Client', function(){
        //loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
        dashboardFuncs.checkClientsBtn(cy, targets.label3)
        clientsFuncs.createClient(cy, targets.label4)
        newClientFunc.createNewClient(cy, faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), targets.label3)
        clientsFuncs.goBack(cy, targets.firstConfContent)
        //dashboardFuncs.logout(cy, targets.secondConfContent)
    
    })

    it('Delete client', function(){
        //loginFuncs.performValidLogin(cy, targets.username, targets.password, targets.firstConfContent)
        dashboardFuncs.checkClientsBtn(cy, targets.label3)
        clientsFuncs.deleteNewestClient(cy)
        clientsFuncs.goBack(cy, targets.firstConfContent)
        //dashboardFuncs.logout(cy, targets.secondConfContent)
    })

    it('Change status of bill', function(){
        dashboardFuncs.checkBillsBtn(cy, targets.label6)
        billsFuncs.editBill(cy, targets.label5)
        editBillsFunc.payBill(cy, targets.label6)
        billsFuncs.goBack(cy, targets.firstConfContent)
    })

    it('Create reservation', function(){

        dashboardFuncs.checkReservationsBtn(cy, targets.label7)
        reservFuncs.createRes(cy, targets.label8)
        newResFunc.createNewRes(cy, faker.date.recent().toISOString(), faker.date.soon().toISOString(), targets.label7)
        reservFuncs.goBack(cy, targets.firstConfContent)

    })

    it('Delete reservation', function(){
        dashboardFuncs.checkReservationsBtn(cy, targets.label7)
        reservFuncs.deleteReservation(cy)
        reservFuncs.goBack(cy, targets.firstConfContent)
    })
})