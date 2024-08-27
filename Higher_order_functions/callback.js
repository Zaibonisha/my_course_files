// Callback function example
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

// Callback function definition
function sayGoodbye() {
    console.log('Goodbye!');
}

// Using the callback function
greet('Alice', sayGoodbye);
