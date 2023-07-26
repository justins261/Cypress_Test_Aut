# Cypress_Test_Aut
Cypress test automation from Test Automation University 

Exports : 

Why are we using a class? Is there a good reason to do so?

If we look at each method here, every method could be static, as it’s not referencing anything in the class itself.

Classes are Unnecessary

If you’re used to Selenium Page Objects, then those page objects usually store the driver in the object, so an object is needed, but in Cypress, we don’t need that as Cypress takes care of all the browser initialization. So why do we need the class at all? In Java and C#, everything's an object, so we must have a class, but idiomatic JavaScript doesn’t use classes when they’re not needed.


Can we get rid of the class and just export the functions? Yes!

Let’s do that.

First, we get rid of the class — we’ll delete the export class… line and its balanced curly braces at the end

Then we take each function and turn it into a function — add a function prefix to each method

Each of these functions needs to be exported, so we export them.


