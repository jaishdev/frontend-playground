// // 1. Using for loop

// sum
// let usernum = (Number(prompt("what is your number")))
// if (isNaN(usernum)) {
//     console.log("Input must be a number");
// } else {
//     if(usernum>0){
//     let sum = 1;
//     for (let num = 1; num <= usernum; num++) {
//         sum += num;
//     }
//     console.log(sum);
//     }else{
//         console.log("Number must be a +ve number and more than 0")
//     }
// }

// // 2 .Using formula n* (n+1)/2
// const usernum = 10;
// const sum = usernum * (usernum + 1) / 2;
// console.log(sum); // 55


// // 3 .FACTORIAL
// let usernum = (Number(prompt("what is your number")))
// if (isNaN(usernum)) {
//     console.log("Input must be a number");
// } else {
//     if(usernum>0){
//     let fact = 1;
//     for (let num = 1; num <= usernum; num++) {
//         fact *= num;
//     }
//     console.log(fact);
//     }else{
//         console.log("Number must be a +ve number and more than 0")
//     }
// }

// let userInput = (Number(prompt("what is your number")))
// if (userInput <= 0 || isNaN(userInput)){
//     console.log("Input must be a number and greater than 0")
// }else{
//     for (let num = 1; num <= Math.floor(userInput/2); num++) {
//         if(userInput%num === 0){
//             console.log(num)
//         }
//     }
//     console.log(userInput)
// }

// let userInput = (Number(prompt("what is your number")))
// let userInput = 4
// if (userInput <= 0 || isNaN(userInput)){
//     console.log("Input must be a number and greater than 0")
// }else{
//     let prime = true
//     for (let i = 2; i <= Math.floor(userInput/2) ; i++) {
//         if(userInput % i === 0){
//             prime = false
//             break;
//         }
//     }
//     console.log(prime)
// }

// function isPrime(userInput){
//     if(userInput <= 1) return false;
//     if(userInput == 2) return true;
//     if(userInput%2==0) return false;
//     for (let i = 3; i <= Math.floor(Math.sqrt(userInput)) ; i+=2) {
//         if(userInput%i == 0){
//             return false
//         }
//     }
//     return true;
// }

// let userInput = 14
// if (userInput <= 0 || isNaN(userInput)){
//     console.log("Input must be a number and greater than 0")
// }else{
//     let prime = (isPrime(userInput))
//     console.log(`${userInput} is ${prime ? "" : "not "}a prime number`)
// }


// // Sum of digit of number ('123' = 1+2+3 = 6) 
// let uInput = 1234;
// uInput=Number(uInput);

// if(uInput <= 0 || isNaN(uInput)){
//     console.log("Input must be greater than 0 and a number")
// }else{
//     let sum = 0;
//     while(uInput >0){
//         let n = uInput%10
//         sum += n
//         uInput = (Math.floor(uInput/10));
//     }
//     console.log(sum)
// }

// // Reverse the number (1234 = 4321)
// let uInput = 1234;
// uInput=Number(uInput);

// if(uInput <= 0 || isNaN(uInput)){
//     console.log("Input must be greater than 0 and a number")
// }else{
// //     let rev = Number(uInput.toString().split("").reverse().join(""))
// // console.log(rev)
// let revNum = 0;
//     while(uInput > 0){
//         let rem = uInput%10
//         revNum = revNum * 10 + rem
//         uInput = (Math.floor(uInput/10))
//     }

//     // revNum = Number(revNum)
//     console.log(revNum)
// }


let a = 10;
let b = 20;
[a,b]=[b,a]
console.log(a,b)

