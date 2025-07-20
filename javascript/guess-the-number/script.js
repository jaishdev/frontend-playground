let form = document.querySelector(".form");
let randomNum = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 10
let guessArr = [];
console.log(randomNum);


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let prevGuesses = (document.querySelector(".prevGuesses"));
    let remainingGuessesField = document.querySelector(".remainingGuesses");
    let guessField = Number(document.querySelector(".guessField").value);
    let lowOrhigh = document.querySelector(".lowOrhigh");
    let submit = document.querySelector(".sbt");
    
    if (guessField <= 0 || guessField > 100 || isNaN(guessField) || guessField == "") {
        lowOrhigh.innerHTML = "Enter a valid number";
        return;
    }
    if (guessField > randomNum) {
        lowOrhigh.innerHTML = "Too high! try again";
    }
    if (guessField < randomNum) {
        lowOrhigh.innerHTML = "Too low! try again";
    }
    if (guessField == randomNum) {
        lowOrhigh.innerHTML = "You won";
        return;
    }

    guessArr.push(guessField)
    prevGuesses.innerHTML = guessArr
    
   
});