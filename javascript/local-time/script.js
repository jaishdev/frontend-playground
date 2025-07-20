let localTime = document.querySelector(".localTime")

setInterval(() => {
    let date = new Date()
    localTime.innerHTML = date.toLocaleTimeString()
}, 1000);