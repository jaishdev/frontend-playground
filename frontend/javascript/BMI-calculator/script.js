let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let weight = parseInt(document.querySelector("#weight").value)
    let height = parseInt(document.querySelector("#height").value)
    let calculatedBMI = document.querySelector("#calculated-BMI")
    let bmiGuide = document.querySelector("#bmi-guide")
    
    
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    if(height == "" || height<0 || isNaN(height)){
        calculatedBMI.innerHTML= `please enter a valid height`
    }
    else if(weight == "" || weight<0 || isNaN(weight)){
        calculatedBMI.innerHTML= `please enter a valid weight`
    }
    else{
    calculatedBMI.innerHTML = `Your BMI index is ${bmi}`;
    }
    
    if (bmi < 18.5) {
        bmiGuide.innerHTML = `You are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiGuide.innerHTML = `You are normal`;
    } else if (bmi >= 25 && bmi <= 39.9) {
        bmiGuide.innerHTML = `You are overweight`;
    } else if (bmi >= 40) {
        bmiGuide.innerHTML = `You are obese`;
    } else {
        bmiGuide.innerHTML = `You are bhagwan🙏`;
    }
})