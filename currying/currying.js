// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }

// const sendEmail = (to) => (from) => (msg) => {
//     return `This email is sent to ${to} by ${from}.
//     Your message is "${msg}" `;
// };

// export const infiniteSum = a => b => {let total = a+b
//  return total
// }

// function infiniteSum(a) {
//     return function (b) {
//         if (arguments.length === 0) return a;
//         return infiniteSum(a + b);
//     };
// }

// console.log(infiniteSum(1)(1)(1)(0)(8)())
// const Sum = infiniteSum(1)(2)(3)(0)(1)()
// document.getElementById("result").textContent = `Sum is ${Sum}`;

// partial application
// function add(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }
// console.log(add(1)(2,3))
// const x = add(1);
// console.log(x(2, 3));

// const pizza = (base, sauce, topping) => {
//   return `base should be ${base} and add ${sauce} with ${topping} as topping`;
// };

// const partialpizza = pizza.bind(null, "crunchy");
// console.log(partialpizza("tomato", "chillis"));

// function curry(func) {
//   return function curriedFunc(...args) {
//     if(args.length >= func.length) {
//         return func(...args)
//     } else {
//       return function(...next) {
//         return curriedFunc(...args,...next);
//       }
//     }
//   }
// }

// function curriedIdFnc(id){
//     return function (text){
//        const elem = document.querySelector("#"+id).innerHTML = text;
//        return elem
//     }
// }
// // (curriedIdFnc('result')("yoyoyo"))
// // (curriedIdFnc('re')("i am re"))
// // (curriedIdFnc('su')("i am su"))
// curriedIdFnc('result')("I am the curried text");

// function userArg(a,b,c){
//     return `${a}_${b}_${c}`
// }

// console.log(userArg.length)
// console.log(userArg("a","b","c"))

// function curry(func){
//     return args;
// }

// console.log((curry(userArg(1,2,3))))


// function sayHello(...words) {
//   console.log(words);
// }

// sayHello("hi", "there", "Jaish");
// // logs: ["hi", "there", "Jaish"]

// console.log(sayHello.length)


// function curry(func) {
    //   return function curried(...args) {
        //     console.log("Collected args:", args);
        //     if (args.length >= func.length) {
//       console.log("Calling func with args:", args);
//       return func(...args); // 
//     } else {
    //       return function (...next) {
        //         console.log(...next)
        //         return curried(...args, ...next);
        //       };
        //     }
        //   };
        // }
        
        // const curried = curry(userArg);
        // console.log(curried("one")("two")("three"));
        
function userArg(a, b, c) {
//   console.log("INSIDE userArg", a, b, c);
  return `${a}_${b}_${c}`;
}
        
function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return(func(...args))
        }else{
            return function(...next){
                return curried(...args , ...next)
            }
        }
    }
}

// function curry(func){
//     const curried = (...args) => {
//         if (args.length >= func.length){
//             return func(...args);
//         } else {
//             return (...next) => curried(...args, ...next);
//         }
//     };
//     return curried;
// }


// const a = curry(userArg);
// console.log(a("one","two")("three"))

const sum = (a,b,c,d) => a+b+c+d
const total = curry(sum)
console.log(total(1)(1)(1)(1))
