// assign a variable to the p tag on header
let currentDayEl = document.querySelector('#currentDay');

// use moment js to display the date
currentDayEl.innerHTML = moment().format("dddd MMM Do YYYY");

// assigning variables to individual save buttons
let saveBtnEl1 = document.querySelector("#save-button-1");
let saveBtnEl2 = document.querySelector("#save-button-2");
let saveBtnEl3 = document.querySelector("#save-button-3");
let saveBtnEl4 = document.querySelector("#save-button-4");
let saveBtnEl5 = document.querySelector("#save-button-5");
let saveBtnEl6 = document.querySelector("#save-button-6");
let saveBtnEl7 = document.querySelector("#save-button-7");
let saveBtnEl8 = document.querySelector("#save-button-8");
let saveBtnEl9 = document.querySelector("#save-button-9");

// assigning varianles to individual input boxes
let userInputEl1 = document.querySelector("#user-form-1");
let userInputEl2 = document.querySelector("#user-form-2");
let userInputEl3 = document.querySelector("#user-form-3");
let userInputEl4 = document.querySelector("#user-form-4");
let userInputEl5 = document.querySelector("#user-form-5");
let userInputEl6 = document.querySelector("#user-form-6");
let userInputEl7 = document.querySelector("#user-form-7");
let userInputEl8 = document.querySelector("#user-form-8");
let userInputEl9 = document.querySelector("#user-form-9");

// display stored data in user form 1
let userStoredData1 = localStorage.getItem("userInputEl1");
userInputEl1.textContent = userStoredData1;

// display stored data in user form 2
let userStoredData2 = localStorage.getItem("userInputEl2");
userInputEl2.textContent = userStoredData2;

// display stored data in user form 3
let userStoredData3 = localStorage.getItem("userInputEl3");
userInputEl3.textContent = userStoredData3;

// display stored data in user form 4
let userStoredData4 = localStorage.getItem("userInputEl4");
userInputEl4.textContent = userStoredData4;

// display stored data in user form 5
let userStoredData5 = localStorage.getItem("userInputEl5");
userInputEl5.textContent = userStoredData5;

// display stored data in user form 6
let userStoredData6 = localStorage.getItem("userInputEl6");
userInputEl6.textContent = userStoredData6;

// display stored data in user form 7
let userStoredData7 = localStorage.getItem("userInputEl7");
userInputEl7.textContent = userStoredData7;

// display stored data in user form 8
let userStoredData8 = localStorage.getItem("userInputEl8");
userInputEl8.textContent = userStoredData8;

// display stored data in user form 9
let userStoredData9 = localStorage.getItem("userInputEl9");
userInputEl9.textContent = userStoredData9;



// event listeners for save buttons to be stored individually 
saveBtnEl1.addEventListener("click", function() {
    let userInputEl1 = document.querySelector("#user-form-1").value;

    localStorage.setItem("userInputEl1", userInputEl1);


});

saveBtnEl2.addEventListener("click", function() {
    let userInputEl2 = document.querySelector("#user-form-2").value;

    localStorage.setItem("userInputEl2", userInputEl2);
});

saveBtnEl3.addEventListener("click", function() {
    let userInputEl3 = document.querySelector("#user-form-3").value;

    localStorage.setItem("userInputEl3", userInputEl3);
});

saveBtnEl4.addEventListener("click", function() {
    let userInputEl4 = document.querySelector("#user-form-4").value;

    localStorage.setItem("userInputEl4", userInputEl4);
});

saveBtnEl5.addEventListener("click", function() {
    let userInputEl5 = document.querySelector("#user-form-5").value;

    localStorage.setItem("userInputEl5", userInputEl5);
});

saveBtnEl6.addEventListener("click", function() {
    let userInputEl6= document.querySelector("#user-form-6").value;

    localStorage.setItem("userInputEl6", userInputEl6);
});

saveBtnEl7.addEventListener("click", function() {
    let userInputEl7 = document.querySelector("#user-form-7").value;

    localStorage.setItem("userInputEl7", userInputEl7);
});

saveBtnEl8.addEventListener("click", function() {
    let userInputEl8 = document.querySelector("#user-form-8").value;

    localStorage.setItem("userInputEl8", userInputEl8);
});

saveBtnEl9.addEventListener("click", function() {
    let userInputEl9 = document.querySelector("#user-form-9").value;

    localStorage.setItem("userInputEl9", userInputEl9);
});


function displayColors() {
    // set time variable to military time   
    let time = moment().format("H");
    // looping through the data-times and comparing to
    // the time variable which are both military times
     for(let x = 9; x < 18; x++) {
        let hourEl = $('.form-group').find(`[data-time=${x}]`)
            if (time == x) {
                hourEl.addClass("present"); // if current time do present class
            } else if (time > x) {
                hourEl.addClass("past"); // if past time do past class
            } else {
                hourEl.addClass("future") // if future time do future class
            }
     }
}

displayColors(); // call displayColors function