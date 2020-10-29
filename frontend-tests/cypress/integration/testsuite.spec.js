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
import { firstConfContent } from '../targets/targets'
//Test suite
describe('Regression test suite', function(){
    beforeEach( ()=>{
        cy.visit('http://localhost:3000')
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
        dashboardFuncs.checkRoomsBtn(cy, 'Rooms')
        roomsFuncs.goBack(cy, targets.firstConfContent)
        dashboardFuncs.checkClientsBtn(cy, 'Clients')
        clientsFuncs.goBack(cy, targets.firstConfContent)
        dashboardFuncs.checkBillsBtn(cy, 'Bills')
        billsFuncs.goBack(cy, targets.firstConfContent)
        dashboardFuncs.checkReservationsBtn(cy, 'Reservations')
        reservFuncs.goBack(cy, targets.firstConfContent)
       // dashboardFuncs.logout(cy, targets.secondConfContent)

    })

    it('Create New Room', function(){
        //loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
        dashboardFuncs.checkRoomsBtn(cy, targets.label1)
        roomsFuncs.createRoom(cy, targets.label2)
        newRoomFunc.createNewRoom(cy, targets.label1)
        roomsFuncs.goBack(cy, targets.firstConfContent)
        //dashboardFuncs.logout(cy, targets.secondConfContent)
    })

    it('Create New Client', function(){
        //loginFuncs.performValidLogin(cy, targets.username,  targets.password, targets.firstConfContent)
        dashboardFuncs.checkClientsBtn(cy, targets.label3)
        clientsFuncs.createClient(cy, targets.label4)
        newClientFunc.createNewClient(cy, targets.label3)
        clientsFuncs.goBack(cy, firstConfContent)
        //dashboardFuncs.logout(cy, targets.secondConfContent)
    
    })

    it('Delete client', function(){
        //loginFuncs.performValidLogin(cy, targets.username, targets.password, targets.firstConfContent)
        dashboardFuncs.checkClientsBtn(cy, targets.label3)
        clientsFuncs.deleteNewestClient(cy)
        clientsFuncs.goBack(cy, firstConfContent)
        //dashboardFuncs.logout(cy, targets.secondConfContent)
    })

    it('Change bill to paid', function(){
        dashboardFuncs.checkBillsBtn(cy, targets.label6)
        billsFuncs.editBill(cy, targets.label5)
        editBillsFunc.payBill(cy, targets.label6)
        billsFuncs.goBack(cy, firstConfContent)
    })

    it('Create reservation', function(){
        dashboardFuncs.checkReservationsBtn(cy, targets.label7)
        reservFuncs.createRes(cy, 'New Reservation')
        newResFunc.createNewRes(cy, '2020-12-20', '2020-12-25', 'Reservations')
        reservFuncs.goBack(cy, firstConfContent)

    })

    it('Delete reservation', function(){
        dashboardFuncs.checkReservationsBtn(cy, targets.label7)
        reservFuncs.deleteReservation(cy)
        reservFuncs.goBack(cy, firstConfContent)
    })
})