
export function add(a){
return function (b){
    return function (c) {
        return a+b+c;
    }
}
}
export const sendEmail = to => from => msg =>{
    return `This email is sent to ${to} by ${from}. 
    Your message is "${msg}" `
}

// export const infiniteSum = a => b => {let total = a+b
//  return total
// }

export function infiniteSum(a){
    return function(b){
       if (b) return infiniteSum(a+b)
        return a
    }
}