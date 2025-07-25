let a: number = 12;
a = 6;
let arr: Array<number> = [1, 2, 3, 4];
let arr1: number[] = [1, 2, 3, 4];
const tup = [1, "jai", true] as const;
// tup.push("1")
// console.log(tup.length);

enum userRoles {
    ADMIN = "this role is for admin only",
    GUEST = "guest",
    SUPER_ADMIN = "superadmin",
}

// console.log(userRoles.ADMIN);
// console.log(userRoles.GUEST);

enum statusCode { }

enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

function makeRequest(method: HTTPMethod) {
    console.log(`Sending ${method} request`);
}

// makeRequest(HTTPMethod.GET);

enum orderStatus {
    PENDING = "pending",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
}

function updateOrderStatus(status: orderStatus): string {
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

let newnum : Number[];
newnum =[5,3,4];
// newnum="hsgdys";

// console.log(newnum.length)

// let value: any = "hello";

// value.foo();         // No error
// value();             // No error
// const x: number = value; // No error

// // TypeScript is like: "Do whatever you want, man... I don't care."

let value: unknown;
value = [1,3,5]
if(typeof value === "function"){
    value();         // No error
}
// console.log(typeof value)
// if(typeof value === 'object'){
//        console.log(value.length) ;    // No error
// }
// value();             // No error
// const x: number = value; // No error

// TypeScript is like: "Do whatever you want, man... I don't care."

let abcd :unknown;
function val() :void {
    abcd = "jaiish"
    return;
}
val();
// console.log(abcd)

let und : undefined | string;
und = "a"
// console.log(und)

type Shape = "circle" | "square" | "triangle" | "octa";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle": return 3.14 * 5 * 5;
    case "square": return 5 * 5;
    case "triangle": return 0.5 * 5 * 5;
    default:
      const _exhaustiveCheck: never = shape; // ✅ Catch unhandled case
      throw new Error(`Unhandled shape: ${shape}`);
  }
}
// console.log(getArea("octa"))
// console.log("hi")


interface Student{
    school:string
    name: string,
    age:number,
    gender?:string,
}

// const newStudent = (student:Student):object => {
//     return student;
// }

const newStudent = (student:Student):string => {
    return `i am ${student.name} from school ${student.school} of age ${student.age} and my gender is ${student.gender}`;
}
console.log(newStudent({school:"lions",name:"jai",age:10}))
const s = {
    school: "",
    name: "",
    age: 0
};
console.log(newStudent(s))
