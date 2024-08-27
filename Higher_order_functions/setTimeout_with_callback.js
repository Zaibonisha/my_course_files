// Example of setTimeout with callback
function delayedGreeting(name) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
    }, 2000); // 2000 milliseconds (2 seconds) delay
}

// Using setTimeout with callback
delayedGreeting('Alice');
console.log('This message appears immediately.');

// Output:
// This message appears immediately.
// (after 2 seconds)
// Hello, Alice!
