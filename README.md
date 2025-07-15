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
Now one of the main doubt you might be having is where do we use this in real life.

lets first see the code then go into explanation 

```js
    
```