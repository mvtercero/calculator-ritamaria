function application() {
    var number1 = 2;
    var number2 = 3;
    var operation = "/";
    var result = 0;
    
    function calculate(operation, number1,number2) {
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
    
    return {
        result : function() {
            return result;
        },
        calculate,
        add,
        subtract,
        multiply,
        divide
    }
}

module.exports = application;



