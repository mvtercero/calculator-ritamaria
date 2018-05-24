var number1 = 2;
var number2 = 3;
var operation = "/";
var result;

function calculate() {
    if (operation == "+") {
        result = add(number1, number2);
    } else if (operation == "-") {
        result = subtract(number1, number2);
    } else if (operation == "*") {
        result = multiply(number1, number2);
    } else if (operation == "/") {
        result = divide(number1, number2);
    }
    console.log(result);
}

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

calculate();
