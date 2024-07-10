// Higher-order function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// Using the higher-order function
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
