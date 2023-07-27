/// <reference types="cypress" />

import {
    navigate,
    addTodo,
    toggleTodo,
    showOnlyActiveTodos,
    showOnlyCompletedTodos,
    showAllTodos,
    validateNumberOfTodosShown,
} from '/Users/yostinsegura/Documents/Cypress-Tests-Test Aut University/page-objects/todo-page.js'

describe('Filtering', () => {

    beforeEach(() => {
        navigate()

        addTodo('Clean room')
        addTodo('Learn JavaScript')
        addTodo('Use Cypress')

        toggleTodo(1)

    })


    it('should filter "Active" correctly', () => {
        showOnlyActiveTodos()

        validateNumberOfTodosShown(2)

    })

    it('should filter "Completed" correctly', () => {
        showOnlyCompletedTodos()

        validateNumberOfTodosShown(1)

    })

    it('should filter "All" correctly', () => {
        showAllTodos()

        validateNumberOfTodosShown(3)

    })

})