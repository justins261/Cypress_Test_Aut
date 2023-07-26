/// <reference types="cypress" />
import {
    navigate,
    addTodo,
    toggleTodo,
    showOnlyActiveTodos,
    showOnlyCompletedTodos,
    showAllTodos,
    validateNumberOfTodosShown,
} from '../page-objects/todo-page'

describe('visual validation', () => {

    before(() => todoPage.navigate())


    it('Should look good', () => {
        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn Java')

    })

})