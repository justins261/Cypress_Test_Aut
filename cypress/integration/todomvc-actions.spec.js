/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page";


describe('To Do s Actions', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Clean room')
        // todoPage.addTodo('Study')
    })


    it('should add a new todo to the list', () => {
        todoPage.validateTodoText(0, 'Clean room')

        todoPage.validateToggleState(0, false)


        // it.only('Should  be able to validate the text in the list in TodoMVC app', () => {
        //     // Line replaced:  cy.get('label').should('have.text', 'Clean room');

        //     todoPage.validateTodoTxt2(1, 'Clean room')
        //     todoPage.validateTodoTxt(0, 'Study')

        //     // cy.get('.toggle').should('not.be.checked');
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            todoPage.toggleTodo(0)
            todoPage.validateTodoCompletedState(0, true)



            // it('Should mark ToDo s as completed', () => {
            //     cy.get('.toggle').click();

            //     cy.get('label').should('have.css', 'text-decoration-line', 'line-through');

        })

        it('should clear completed', () => {
            todoPage.toggleTodo(0)

            todoPage.clearCompleted()

            todoPage.validateNumberOfTodosShown(0)
        })

        // it('Should clear completed ToDo s ', () => {

        //     cy.contains('Clear completed').click();

        //     cy.get('.todo-list').should('not.have.descendants', 'li');

    })


})
