//Display-related variables
let num1 = "";
let num2 = "";
let operator = "";
let operatorSymbol = "";
let num1Done = false;

let displayValue = "";

//Display-related functions

function updateDisplay() {
    displayValue = num1 + operatorSymbol + num2;
    display.textContent = displayValue;
}

function checkNumbers() {
    if (num1) {
        num1 = parseFloat(num1).toString();
    }
    if (num2) {
        num2 = parseFloat(num2).toString();
    }
}

function updateNumbers() {
    if (num1Done && operator) {
        num2 += this.textContent;
    } else if (num1Done && ! operator) {
        num1 = this.textContent
        num1Done = false;
    } else {
        num1 += this.textContent;
    }

    checkNumbers();

    updateDisplay();
}


function updateOperator() {
    if (num1 && ! num2) {
        operator = this.id;
        operatorSymbol = this.textContent;
        num1Done = true;
        updateDisplay();
    } else if (num1 && num2 && operator) {
        calculate();
        operator = this.id;
        operatorSymbol = this.textContent;
        num1Done = true;
        updateDisplay();
    }
}

function allClear() {
    num1 = "";
    num2 = "";
    operator = "";
    operatorSymbol = "";
    displayValue = "";
    num1Done = false;
    updateDisplay();
}

function calculate() {
    if (num1 && num2 && operator) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        const result = operate(num1, num2, operator);
        allClear();
        num1 = result.toString();
        num1Done = true;
        updateDisplay();
    }
}

//Calculation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "No. Try harder."
    } else return a / b;
}


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
    digitsButtons[i].addEventListener("click", updateNumbers);
}

timesButton.addEventListener("click", updateOperator);
divideButton.addEventListener("click", updateOperator);
minusButton.addEventListener("click", updateOperator);
plusButton.addEventListener("click", updateOperator);

clearButton.addEventListener("click", allClear);
equalsButton.addEventListener("click", calculate);