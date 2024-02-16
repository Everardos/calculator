//Display-related variables and functions
let num1;
let num2;
let operator;

let displayValue = "";

function updateDisplay() {
    displayValue += this.textContent;
    display.textContent = displayValue;
}


//Calculation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function operate(num1, num2, operator) {
    switch (operator) {
        case "plus":
            return add(num1, num2);
        case "minus":
            return subtract(num1, num2);
        case "times":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}


//Element selectors
const digitsButtons = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const timesButton = document.querySelector("#times");
const divideButton = document.querySelector("#divide");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
const decimalButton = document.querySelector("#decimal");

//Event listeners

for (i = 0; i < digitsButtons.length; i++) {
    digitsButtons[i].addEventListener("click", updateDisplay);
}

timesButton.addEventListener("click", setSign);
divideButton.addEventListener("click", setSign);
minusButton.addEventListener("click", setSign);
plusButton.addEventListener("click", setSign);