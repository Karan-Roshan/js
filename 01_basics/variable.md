## Q.  Why we can't use var?
Ans:    1. JavaScript is used on millions of old websites written before ES6     (2015).
        2. Function Scope Behavior: var is function-scoped, not block-scoped.
            function test() {
                var x = 10;
            }
            console.log(x); // Error
        3. Hoisting Use Cases: var is hoisted and initialized as undefined.
            console.log(a); // undefined
            var a = 5;


Q.  Is it possible to declare and initialize a variable in JavaScript without using var, let, or const? 
    If yes, how? Why is it not a good practice?
Ans:    Yes,it is possible in JS.
        When a variable is assigned a value without using var, let, or const, JavaScript automatically creates a global variable.
            Example:
                x = 10;   // variable created without declaration keyword
                console.log(x);
        Here, JavaScript reserves memory, declares, and initializes the variable automatically.

        It is not a good practice because this can lead to unexpected bugs, overwrite existing variables, make debugging difficult, and pollute the global scope.
        It also breaks clean coding standards and is not allowed in strict mode.


Q.    Why do JavaScript programs work even when semicolons are not used?
Ans:    JavaScript has a feature called Automatic Semicolon Insertion (ASI), which allows the program to work even if semicolons are not written.
        However, using semicolons is a good practice to avoid unexpected errors.


Q. What problems do we face when using var in JavaScript?
Ans:    1. No Block Scope: var is function-scoped, not block-scoped. So variables can be accessed outside blocks like if or for.
        2. Allows Redeclaration: You can declare the same variable again, which can overwrite values.
        3. Hoisting Confusion: var is hoisted and initialized as undefined.
        4. Global Scope Pollution: Using var can accidentally create or affect global variables, especially in large apps.
        5. Problems in Loops: var does not work well with loops and closures.


Q. What is the Temporal Dead Zone (TDZ) in JavaScript?
Ans:    The Temporal Dead Zone is the time between the start of a scope and the declaration of a let or const variable, during which the variable cannot be accessed.
        OR
        The Temporal Dead Zone is the period where let and const variables are hoisted but not initialized, so accessing them before declaration causes an error.
            Example:
                console.log(x);     // undefined
                var x = 5;

                console.log(a);     // ReferenceError
                let a = 10;