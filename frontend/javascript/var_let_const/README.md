# Var - Let - Const

**and some basic stuff for me**

So, they (_var - let - const_) all are used to store values in them and that value can be of any type.(string , number , boolean , array , object)

```js
var num = 10;
console.log(num); // O/p- 10

let string = "Hello there";
console.log(string); // O/p- Hello there

const arr = [1, 2, 3, 4];
console.log(arr); // O/p- [1,2,3,4]
```

One of the questions I had when I was studying about them is **what do we call these var, let, const**. I mean everything has a **name** so what is their's.

These are keywords in javascript more precisely **"JavaScript variable declaration keywords"**.

## Why do we need three of them?

Its a short story , so Js was written in **1995 by Brendan Eich** in just 10 days.

Brendan Eich himself said:
_"I had to do it in 10 days, or Netscape would have lost the browser war."_ - you can read more about it just a search away. And because it was written in so much hurry it had too many idk if "error" is a safe word to use but yes there were some issues.

one of those issues is clearly visible when we use the keyword **var**

so to over come those issues later **js introduced let and const in ES6(2015)**

Now lets see the issues thar var had and what they did with let and const to overcome that.Thank you for the patience you had while reading the above paragraphs 🤓.

## var

Try run the code below

```js
console.log(num);
var num = 10;
```

and the output is **Undefined** right? but **how?** is the question here.
The answer is because of **Hoisting** ~very fancy term i know but its very simple so basically what happens is due to hoisting the declaration goes up to the console.log(num)
and it becomes something like this

```js
var num;
console.log(num);
num = 10;
```

so what happens is because of hoisting our declaration goes up and initialization is done later. Now to know why u need to know the behind the scene how JS works, I totally recommend "CHAI AUR CODE" ~ youtube channel ,his javascript playlist is unbeatable.

## ✅ One-line Definitions:

**var** – Declares a function-scoped variable, hoisted and can be redeclared.

**let** – Declares a block-scoped variable, hoisted but not redeclared, supports reassignment.

**const** – Declares a block-scoped constant, hoisted but not redeclared, no reassignment allowed.

| Feature            | var                            | let                   | const                        |
| ------------------ | ------------------------------ | --------------------- | ---------------------------- |
| Scope              | Function-scoped                | Block-scoped          | Block-scoped                 |
| Hoisting           | Yes (initialized as undefined) | Yes (in TDZ)          | Yes (in TDZ)                 |
| Reassignment       | ✅ Allowed                     | ✅ Allowed            | ❌ Not allowed               |
| Redeclaration      | ✅ Allowed                     | ❌ Not allowed        | ❌ Not allowed               |
| Temporal Dead Zone | ❌ No                          | ✅ Yes                | ✅ Yes                       |
| Best use-case      | Avoid in modern JS             | When value may change | When value should stay fixed |
| returns            | Undefined                      | ❌ ReferenceError     | ❌ ReferenceError            |

# 🧠 What is TDZ (Temporal Dead Zone)?

The Temporal Dead Zone is the time between when a **let** or **const** variable is hoisted and when it's actually declared — during this time, you can't access it.

```js
//use this as an example
{
  // TDZ begins here (hoisting happens)
  console.log(x); // ❌ ReferenceError (still in TDZ)

  let x = 5; // 🟢 TDZ ends here (x is declared)

  console.log(x); // ✅ 5
}
```

**💡 Imagine This:**

    You're in a room.
    You know a chair is going to be placed there (because JS hoists it 👀).
    But if you try to sit on it before it’s placed, you fall — the chair exists in theory, but you can’t touch it yet.
    That awkward moment = Temporal Dead Zone

**🗣️ In Plain Speak:**

JS knows x is gonna exist (hoisting), but it's like:
“Don't you dare touch it until I finish setting it up.”

# Type Coercion - just for the basic understandings.

Type coercion is the automatic or implicit conversion of values from one data type to another — like from a number to a string, or a string to a boolean

### ✅ Implicit Coercion - done by js itself.

```js
    console.log("5" + 1); // '51' => Number 1 is coerced to a string
    console.log("5" - 1); // 4 => String '5' is coerced to a number
    console.log(true + 1); // 2 => true becomes 1
    console.log(null + 1); // 1 => null becomes 0
    console.log(undefined + 1); // NaN => undefined can't be turned into a number
```

### 🛠️ Explicit Coercion - done by coder.

```js
    console.log(String(123)); // '123'
    console.log(Number("456")); // 456
    console.log(Boolean("")); // false
    console.log(Boolean("hi")); // true
```

or using shortcuts

```js
    console.log(123 + ""); // "123"  → Number to String
    console.log(+"456"); // 456    → String to Number
    console.log(!!"hello"); // true   → String to Boolean
```

### and some weird stuff -

```js
    console.log([] + {}); // "[object Object]"
    console.log({} + []); // 0  ← Wild JS parsing behavior
    console.log(0 == false); // true  ← loose equality does coercion
    console.log(0 === false); // false ← strict equality, no coercion
    console.log(false == ""); // true  ← both coerced to 0
```

but in

```js
    null == undefined; // true (but not ===)    
```

In **loose equality**, JS is like:

“They're both kinda nothing... so, sure, let’s say they’re equal.”
