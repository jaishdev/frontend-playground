# Currying
In this we have a function that takes a argument at a time and returns a function which also expects a new argument. 

OR 

Currying is when a function takes one input at a time and keeps returning another function until all the inputs are given.

## A simple comparable code.

Without currying a simple sum function is like - 

    function sum(a+b+c){
        return a+b+c;
    }

    sum(1,2,3); //function call

but in currying it becomes a chain of function- 

    function sum(a){
        return function (b){
            return function (c){
                return a+b+c;
            }
        }
    }

    sum(1)(2)(3); //function call

## Infinite currying

    function sum(a){
        return function (b){
            if (b) return sum(a+b);
            return a
        }
    }

    sum(1)(2)(3)(4)(); //function call

but the only con to this code is, it can not take 0 as argument and our code will fail so we can use 

    function infiniteSum(a) {
        return function (b) {
            if (arguments.length === 0) return a;
            return infiniteSum(a + b);
        };
    }
    sum(1)(2)(0)(4)(); //function call

The empty () is what tells the function “I’m done now, give me the final answer.”
Without that last (), it just keeps expecting more numbers.//function call