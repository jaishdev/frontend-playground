// // let a:
// //  number = 12;
// // a = 6;
// let arr: Array<number> = [1, 2, 3, 4];
// let arr1: number[] = [1, 2, 3, 4];
// const tup = [1, "jai", true] as const;
// // tup.push("1")
// // console.log(tup.length);

// enum userRoles {
//     ADMIN = "this role is for admin only",
//     GUEST = "guest",
//     SUPER_ADMIN = "superadmin",
// }

// // console.log(userRoles.ADMIN);
// // console.log(userRoles.GUEST);

// enum statusCode { }

// enum HTTPMethod {
//     GET = "GET",
//     POST = "POST",
//     PUT = "PUT",
//     DELETE = "DELETE",
// }

// function makeRequest(method: HTTPMethod) {
//     console.log(`Sending ${method} request`);
// }

// // makeRequest(HTTPMethod.GET);

// enum orderStatus {
//     PENDING = "pending",
//     SHIPPED = "shipped",
//     DELIVERED = "delivered",
//     CANCELLED = "cancelled",
// }

// function updateOrderStatus(status: orderStatus):string {
//     switch (status) {
//         case orderStatus.PENDING:
//             console.log("pending");
//             break;
//         case orderStatus.SHIPPED:
//             console.log("shipped");
//             break;
//         case orderStatus.DELIVERED:
//             console.log("delivered");
//             break;
//         case orderStatus.CANCELLED:
//             console.log("cancelled");
//             break;
//         default:
//             console.log("nothing matched");
//             break;
//     }
// }

// // updateOrderStatus(orderStatus.ABC);

// let newnum : Number[];
// newnum =[5,3,4];
// // newnum="hsgdys";

// // console.log(newnum.length)

// // let value: any = "hello";

// // value.foo();         // No error
// // value();             // No error
// // const x: number = value; // No error

// // // TypeScript is like: "Do whatever you want, man... I don't care."

// let value: unknown;
// value = [1,3,5]
// if(typeof value === "function"){
//     value();         // No error
// }
// // console.log(typeof value)
// // if(typeof value === 'object'){
// //        console.log(value.length) ;    // No error
// // }
// // value();             // No error
// // const x: number = value; // No error

// // TypeScript is like: "Do whatever you want, man... I don't care."

// let abcd :unknown;
// function val() :void {
//     abcd = "jaiish"
//     return;
// }
// val();
// // console.log(abcd)

// let und : undefined | string;
// und = "a"
// // console.log(und)

// type Shape = "circle" | "square" | "triangle" | "octa";

// function getArea(shape: Shape): number {
//   switch (shape) {
//     case "circle": return 3.14 * 5 * 5;
//     case "square": return 5 * 5;
//     case "triangle": return 0.5 * 5 * 5;
//     default:
//       const _exhaustiveCheck: never = shape; // ✅ Catch unhandled case
//       throw new Error(`Unhandled shape: ${shape}`);
//   }
// }
// // console.log(getArea("octa"))
// // console.log("hi")


// interface Student extends User{
//     school:string
//     name: string,
//     age:number,
//     gender?:string,
// }
// interface User{
//     username : string;
// }

// // const newStudent = (student:Student):object => {
// //     return student;
// // }

// const newStudent = (student:Student):string => {
//     return `i am ${student.name} from school ${student.school} of age ${student.age} and my gender is ${student.gender} hello this is username ${student.username} from interface User`;
// }
// // console.log(newStudent({username:"blablabla" , school:"lions",name:"jai",age:10}))
// const s = {
//     school: "",
//     name: "",
//     age: 0
// };
// // console.log(newStudent(s))

// type arg = string | null;

// let user:arg = "jaish"; 
// let users:arg = null ; 
// // let c:arg = 33; // error
// // console.log(typeof users)

// interface A {
//   x: number;
// }

// interface A {
//   y: string;
// }

// const obj: A = { x: 1, y: "hi" };
// // console.log(obj);

// class Axis {
//     x = '20px';
//     y= '20px';
// }
// // Axis.x = '90px' 
// // console.log(Axis.x)
// // let Axis1 = new Axis
// // Axis1.x = '70px'
// // console.log(Axis1.x)

// // class Student {
// //   name:string; //this is impt in ts 
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }
// // // //the above code and the below code are same.
// // class Student {
// //   age?:number;
// //   constructor(public name: string ,public surname:string = 'vishwa'){} 
// // }
// //
// // const stuv = new Student("hi","jbchsd");
// // stuv.age = 89
// // console.log(stuv)
// // const stuv1 = new Student("hello");
// // console.log(stuv1)

// class Student {
//     name: string;
//     surname: string;
//     roll:number;
//     ages?: number; // ✅ age is optional
    
//     constructor(name: string, surname: string = 'vishwa' , roll:number = 7) {
//         this.name = name;
//     this.surname = surname;
//     this.roll = roll;
//     // age is optional, so you can assign later
//   }
// }
// const stuv = new Student("hi", undefined , undefined);
// console.log(stuv)

// stuv.ages=6
// console.log(stuv)

// class User{
//     constructor(
//         protected name : string , 
//         public age:number = 24 , 
//         public gender : string = "unknown"){}
//         changeName(){
//             this.name = "jaishree"
//         }
// }
// class Admin extends User{
//     constructor(name :string){
//         super(name);
//     }
// }
// // let admin1 = new Admin("hello")
// // console.log(admin1.username = "fhdvfh")
// // let user1 = new User("jaish",23,"female")
// // console.log(user1)
// // let user2 = new User("jaish",undefined,"female")
// // console.log(user2)
// // console.log(user1.changeName())
// // console.log(user1)

// class Dog{
//     constructor(public _name:string , public run:boolean , public _bark:boolean , public age:number){}
//     get name(){
//         return this._name;
//     }
//     set bark(value:boolean){
//         this._bark = value
//     }
// }

// let dog1 = new Dog("buby" , true , false , 4)
// console.log(dog1)
// console.log(dog1.name)
// console.log(dog1.bark = true)
// console.log(dog1)
