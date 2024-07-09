const button = document.getElementById('actionButton');

button.addEventListener('click', () => {
    // Perform the heavy computation asynchronously
    setTimeout(() => {
        let count = 0;
        for (let i = 0; i < 1000000000; i++) {
            count++;
        }
        console.log(count);

        // After computation, update the DOM
        const text = document.createElement('h1');
        text.textContent = 'This has nothing to do with count.';
        document.getElementById('output').appendChild(text);
    }, 0); // Use a timeout of 0 to ensure the heavy computation runs asynchronously
});
