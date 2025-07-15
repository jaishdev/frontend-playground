# Currying
**Currying** is when a function takes **one input at a time** and keeps **returning another function** until all the inputs are given. 

It is **transformation of functions** that translates a function **from callable as f(a, b, c) into callable as f(a)(b)(c)**.

## A simple comparable code.

Without currying a simple sum function is like - 
```js
//Normal Function
    function sum(a+b+c){
        return a+b+c;
    }

    sum(1,2,3); //function call
```
but in currying it becomes a chain of function- 

```js
//Currying Function
    function sum(a){
        return function (b){
            return function (c){
                return a+b+c;
            }
        }
    }

    sum(1)(2)(3); //function call
```
## Infinite currying

```js
    function sum(a){
        return function (b){
            if (b) return sum(a+b);
            return a
        }
    }

    sum(1)(2)(3)(4)(); //function call
```
The only drawback of this approach is that it cannot handle 0 as an argument, because 0 is a falsy value in JavaScript.
So when the check is if (b), it treats 0 as false and thinks the input is done — even though 0 is a valid number we want to include. and our code will fail so we can use -

```js
    function infiniteSum(a) {
        return function (b) {
            if (arguments.length === 0) return a;
            return infiniteSum(a + b);
        };
    }
    sum(1)(2)(0)(4)(); //function call
```
The empty () is what tells the function “I’m done now, give me the final answer.”
Without that last (), it just keeps expecting more numbers.

## Currying and Partial Applications

They look similar but are not..
currying - Pass one arguments at a time
partial application - Pass some args now and, the rest later.

```js
    const pizza = (base, sauce, topping) => {
        return `base should be ${base} and add ${sauce} with ${topping} as topping`;
        };

    const partialpizza = pizza.bind(null, "crunchy");
    console.log(partialpizza("tomato", "chillis"));

    output - "base should be crunchy and add tomato with chillis as topping"
```

Either you use bind which is built in js fn or do the below

```js
    function add(a) {
        return function (b, c) {
            return a + b + c;
        };
    }       
    console.log(add(1)(2,3)) // o/p - 6
    const x = add(1);
    console.log(x(2, 3)); // o/p - 6
```
Now one of the main doubt you might be having is where do we use this in our code.

lets first see the code then go into explanation 

```js
   //lets do this by using a example of manipulating DOM 

   //In your html file add-
     <div id="result"></div>

    //In js file
    function curriedIdFnc(id){
        return function (text){
            const elem = document.querySelector("#"+id).innerHTML = text;
                return elem;
            }
        }
    curriedIdFnc('result')("I am the curried text");

```

Now if a coder have to add a text in a div by using its id so instead of writing the same lines of code again and again coder could just do 
    
    curriedIdFnc('result')("I am the curried text");

## 🧑‍💻 Currying as a Dev Team Analogy

Imagine a team of three developers working on a project. They’re building a feature that requires 3 inputs, and instead of giving all the arguments at once, each developer adds their piece one by one in a chain.

Here’s how it works:

    🧑‍💻 Dev 1 starts the function by passing the first argument (e.g., userId).

    👨‍💻 Dev 2 receives the partially applied function with the first arg, and adds the second argument (e.g., projectId).

    👩‍💻 Dev 3 continues with the function that now holds two args, and supplies the final argument (e.g., accessLevel).

Once all the arguments are in, the function executes.

```js
    function assignAccess(userId) {
        return function (projectId) {
            return function (accessLevel) {
                return `${userId} has ${accessLevel} access to project ${projectId}`;
                };
            };
        }

// Developer 1
const step1 = assignAccess("abc");

// Developer 2
const step2 = step1("Project123");

// Developer 3
const result = step2("admin");

console.log(result);
// Output: abc has admin access to project Project123

```
👏 Final Thoughts

Currying is super powerful in functional programming and is often used in libraries like Lodash, Ramda, and even React when dealing with HOCs (Higher-Order Components) and handlers.