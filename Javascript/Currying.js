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

function curriedIdFnc(id){
    return function (text){
       const elem = document.querySelector("#"+id).innerHTML = text;
       return elem
    }
}
(curriedIdFnc('result')("yoyoyo"))
(curriedIdFnc('re')("i am re"))
(curriedIdFnc('su')("i am su"))