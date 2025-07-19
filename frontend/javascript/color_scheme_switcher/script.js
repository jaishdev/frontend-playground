// let red = document.querySelector("#red")
// let blue = document.querySelector("#blue")
// let gray = document.querySelector("#gray")
// let green = document.querySelector("#green")
// let body = document.querySelector("body")

// red.addEventListener("click",(e)=>{
//     body.style.backgroundColor =e.target.id
// });
// blue.addEventListener("click",(e)=>{
//     body.style.backgroundColor =e.target.id
// });
// gray.addEventListener("click",(e)=>{
//     body.style.backgroundColor =e.target.id
// });
// green.addEventListener("click",(e)=>{
//     body.style.backgroundColor =e.target.id

// });


let buttons = document.querySelectorAll("button")
let body = document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.id == "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "gray"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "green"){
            body.style.backgroundColor = e.target.id
        }
    }
    )

});