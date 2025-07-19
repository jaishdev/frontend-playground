# LOOPS

_There won't be a lot of code but theory_

so loops we all know what that is we have to **get values from this to that we use loops**.

## Why loops?

Helps to **avoid redundancy**. (There are more but this is the main use.)

lets say we have to **print nums from 1-10** just use loop you are good to go.
There are mainly three types of loop **for loop, while loop, do-while loop**

## for loop
Use for when you know exactly how many times the loop should run.


syntax for **for loop** is -

        for (initialization of variable; condition; increment/decrement) {
            // code to run on each loop iteration
        }

```js
// Simple for loop code for better understanding using for loop.
let num = 10;
let sum = 0;
for (let num = 1; num <= usernum; num++) {
  sum += num;
}
console.log(sum);
```


## While loop

Use while when you might skip the loop.


syntax for **while loop** is:

        while (condition) {
            // code runs only if condition is true
        }

```js
let i = 0;
while (i < 3) {
  console.log(i); // 0, 1, 2
  i++;
}
```


## do-while loop

Use do-while when you need it to run at least once.

syntax for **do-while loop** is:
    
        do {
            // code runs first
        } while (condition);

```js
let password;
do {
  password = prompt("Enter password:");
} while (password !== "admin123");
```

## SOME MATHS TIP FOR ME ~

1. a prime number can never be 1. (so why bother checking that in code?)

2. a number can not have any divisor above its half anf if there is that's the number itself. lets say we have n = 12 if we do n/2 which is 12/2 it gives 6 the divisior can be ( 1, 2, 3, 4, 6, 12 ).

3. and if upto the square root of the number there is no divisior means the number is prime and obviously, do not count 1. lets say num is 25 and the square root of 25 is 5 and clearly 5 is the divisor of 25 its not prime. lets take 13 and its square root maybe around 3 is there any number divisible by 13 till 3 NO so 13 is prime.

4. and 2 is the only prime number so after that checking for prime number on even numbers is dumb. 

