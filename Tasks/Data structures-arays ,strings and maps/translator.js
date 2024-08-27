// Create a map with 10 key-value pairs
const translator = new Map([
    ['hello', 'hola'],
    ['goodbye', 'adiós'],
    ['please', 'por favor'],
    ['thank you', 'gracias'],
    ['yes', 'sí'],
    ['no', 'no'],
    ['sorry', 'lo siento'],
    ['excuse me', 'perdón'],
    ['good morning', 'buenos días'],
    ['good night', 'buenas noches']
]);

function translateWord() {
    // Get the word from the user
    const wordToTranslate = prompt('Enter the word you would like to translate:').toLowerCase();

    // Check if the word exists in the translator map
    if (translator.has(wordToTranslate)) {
        // Output the translated word
        alert('The translation is: ' + translator.get(wordToTranslate));
    } else {
        // Inform the user that the word is not in the map
        alert('Sorry, the word is not in the translator.');
    }
}

// Call the translateWord function
translateWord();
