let currentDayEl = document.querySelector('#currentDay');

currentDayEl.innerHTML = moment().format("dddd MMM Do YYYY");

let userInputEl = document.querySelector(".user-to-do");

let timeOfDay = document.querySelector(".time-of-day");

displayColors()

function displayColors() {
    if (timeOfDay < moment().format("hA")) {
        userInputEl.attr("background-color", "black")
    } 
}    