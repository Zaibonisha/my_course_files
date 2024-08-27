// Higher-order function
function calculate(operation, num1, num2, callback) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = NaN;
    }
    callback(result);
}

// Callback function
function logResult(result) {
    console.log('The result is:', result);
}

// Using the higher-order function with a callback
calculate('add', 5, 3, logResult); // Output: The result is: 8
calculate('multiply', 4, 2, logResult); // Output: The result is: 8
calculate('divide', 10, 2, logResult); // Output: The result is: 5
