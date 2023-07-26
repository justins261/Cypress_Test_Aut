/// <reference types="cypress" />
import * as todoPage from '../page-objects/todoPage'

describe('visual validation', () => {

    before(() => todoPage.navigate())


    it('Should look good', () => {
        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn Java')

    })

})