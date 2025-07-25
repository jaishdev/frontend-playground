"use strict";
let a = 12;
a = 6;
let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, 4];
const tup = [1, "jai", true];
// tup.push("1")
// console.log(tup.length);
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "this role is for admin only";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "superadmin";
})(userRoles || (userRoles = {}));
// console.log(userRoles.ADMIN);
// console.log(userRoles.GUEST);
var statusCode;
(function (statusCode) {
})(statusCode || (statusCode = {}));
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["PUT"] = "PUT";
    HTTPMethod["DELETE"] = "DELETE";
})(HTTPMethod || (HTTPMethod = {}));
function makeRequest(method) {
    console.log(`Sending ${method} request`);
}
// makeRequest(HTTPMethod.GET);
var orderStatus;
(function (orderStatus) {
    orderStatus["PENDING"] = "pending";
    orderStatus["SHIPPED"] = "shipped";
    orderStatus["DELIVERED"] = "delivered";
    orderStatus["CANCELLED"] = "cancelled";
})(orderStatus || (orderStatus = {}));
function updateOrderStatus(status) {
    switch (status) {
        case orderStatus.PENDING:
            console.log("pending");
            break;
        case orderStatus.SHIPPED:
            console.log("shipped");
            break;
        case orderStatus.DELIVERED:
            console.log("delivered");
            break;
        case orderStatus.CANCELLED:
            console.log("cancelled");
            break;
        default:
            console.log("nothing matched");
            break;
    }
}
// updateOrderStatus(orderStatus.ABC);
let newnum;
newnum = [5, 3, 4];
// newnum="hsgdys";
// console.log(newnum.length)
// let value: any = "hello";
// value.foo();         // No error
// value();             // No error
// const x: number = value; // No error
// // TypeScript is like: "Do whatever you want, man... I don't care."
let value;
value = [1, 3, 5];
if (typeof value === "function") {
    value(); // No error
}
// console.log(typeof value)
// if(typeof value === 'object'){
//        console.log(value.length) ;    // No error
// }
// value();             // No error
// const x: number = value; // No error
// TypeScript is like: "Do whatever you want, man... I don't care."
let abcd;
function val() {
    abcd = "jaiish";
    return;
}
val();
// console.log(abcd)
let und;
und = "a";
function getArea(shape) {
    switch (shape) {
        case "circle": return 3.14 * 5 * 5;
        case "square": return 5 * 5;
        case "triangle": return 0.5 * 5 * 5;
        default:
            const _exhaustiveCheck = shape; // ✅ Catch unhandled case
            throw new Error(`Unhandled shape: ${shape}`);
    }
}
// const newStudent = (student:Student):object => {
//     return student;
// }
const newStudent = (student) => {
    return `i am ${student.name} from school ${student.school} of age ${student.age} and my gender is ${student.gender} hello this is username ${student.username} from interface User`;
};
// console.log(newStudent({username:"blablabla" , school:"lions",name:"jai",age:10}))
const s = {
    school: "",
    name: "",
    age: 0
};
let user = "jaish";
let users = null;
let c = 33; // error
const obj = { x: 1, y: "hi" };
// console.log(obj);
class Axis {
    constructor() {
        this.x = '20px';
        this.y = '20px';
    }
}
// Axis.x = '90px' 
// console.log(Axis.x)
// let Axis1 = new Axis
// Axis1.x = '70px'
// console.log(Axis1.x)
// class Student {
//   name:string; //this is impt in ts 
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// // //the above code and the below code are same.
// class Student {
//   age?:number;
//   constructor(public name: string ,public surname:string = 'vishwa'){} 
// }
//
// const stuv = new Student("hi","jbchsd");
// stuv.age = 89
// console.log(stuv)
// const stuv1 = new Student("hello");
// console.log(stuv1)
class Student {
    constructor(name, surname = 'vishwa', roll = 7) {
        this.name = name;
        this.surname = surname;
        this.roll = roll;
        // age is optional, so you can assign later
    }
}
const stuv = new Student("hi", undefined, undefined);
console.log(stuv);
stuv.ages = 6;
console.log(stuv);
