function application() {
    var number1 = 0;
    var number2 = 0;
    var operation;
    var result = 0;
    var number1Box = document.querySelector(".number1-box");
    var number2Box = document.querySelector(".number2-box");
    number1Box.addEventListener("change", getValueNumbers);
    number2Box.addEventListener("change", getValueNumbers);
    var buttonEqual = document.querySelector(".equal-button");
    var buttonAdd = document.querySelector(".add-button");
    var buttonSubtract = document.querySelector(".subtract-button");
    var buttonMultiply = document.querySelector(".multiply-button");
    var buttonDivide = document.querySelector(".divide-button");

    buttonEqual.addEventListener("click", calculate);
    buttonAdd.addEventListener("click", function () {
        defineOperation("+");
    });
    buttonSubtract.addEventListener("click", function () {
        defineOperation("-");
    });
    buttonMultiply.addEventListener("click", function () {
        defineOperation("*");
    });
    buttonDivide.addEventListener("click", function () {
        defineOperation("/");
    });

    function getValueNumbers() {
        number1 = Number(number1Box.value);
        number2 = Number(number2Box.value);
    }

    function defineOperation(simbol) {
        operation = simbol;
    }


    function add(number1, number2) {
        result = number1 + number2;
    }

    function subtract(number1, number2) {
        result = number1 - number2;
    }

    function multiply(number1, number2) {
        result = number1 * number2;
    }

    function divide(number1, number2) {
        result = number1 / number2;
    }


    function calculate() {
        switch (operation) {
            case "+":
                add(number1, number2);
                console.log(result);
                break;
            case "-":
                subtract(number1, number2);
                console.log(result);
                break;
            case "*":
                multiply(number1, number2);
                console.log(result);
                break;
            case "/":
                divide(number1, number2);
                console.log(result);
                break;
        }
    }

    return {
        result: function () {
            return result;
        },
        operation: function () {
            return operation;
        },
        calculate,
        add,
        subtract,
        multiply,
        divide
    }
}