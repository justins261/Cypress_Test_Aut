/// <reference types="cypress" />

describe('Filtering', () => {

    beforeEach(() => {

        todoPage.navigate()

        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JavaScript')
        todoPage.addTodo('Use Cypress')

        todoPage.toggleTodo(1)

        // cy.visit('http://todomvc-app-for-testing.surge.sh/');

        // cy.get('.new-todo').type("Clean room{enter}");
        // cy.get('.new-todo').type("Learn JavaScript{enter}");
        // cy.get('.new-todo').type("Use Cypress{enter}");

        // cy.get('.todo-list li:nth-child(2) .toggle').click()

    })


    it('should filter "Active" correctly', () => {
        todoPage.showOnlyActiveTodos()

        todoPage.validateNumberOfTodosShown(2)


        // it('should filter "Active" ToDo s', () => {

        //     cy.contains('Active').click()

        //     cy.get('.todo-list li').should('have.length', 2);

        // })
    })

    it('should filter "Completed" correctly', () => {
        todoPage.showOnlyCompletedTodos()

        todoPage.validateNumberOfTodosShown(1)

        // it('should filter "Completed" ToDo s', () => {

        //     cy.contains('Completed').click()

        //     cy.get('.todo-list li').should('have.length', 1);

        // })

    })

    it('should filter "All" correctly', () => {
        todoPage.showAllTodos()

        todoPage.validateNumberOfTodosShown(3)


        // it('should filter "All" ToDo s', () => {

        //     cy.contains('All').click()

        //     cy.get('.todo-list li').should('have.length', 3);

        // })

    })

})