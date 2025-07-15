function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
const sendEmail = (to) => (from) => (msg) => {
    return `This email is sent to ${to} by ${from}. 
    Your message is "${msg}" `;
};

// export const infiniteSum = a => b => {let total = a+b
//  return total
// }

function infiniteSum(a) {
    return function (b) {
        if (arguments.length === 0) return a;
        return infiniteSum(a + b);
    };
}

// console.log(infiniteSum(1)(1)(1)(0)(8)())
console.log(add(1))