# Cypress_Test_Aut
Cypress test automation from Test Automation University 

Exports: 

Instead of exporting one class, we’re exporting a set of functions

Instead of a “page object”, we’ve created a “page module”

Now let’s use them.


Let’s import the functions we need, instead of the TodoPage class, and use them in our test.

Since we don’t need the object anymore, we can remove the object creation

Now, instead of importing todoPage, we'll import the functions like navigate, addTodo and validateTodoText, etc

I already wrote all the code so that it all works with page modules, so there we go.




import {
  navigate,
  addTodo,
  validateTodoText,
  toggleTodo,
  clearCompleted,
  validateTodoCompletedState,
  validateToggleState,
  validateNumberOfTodosShown,
} from '../page-objects/todo-page'
