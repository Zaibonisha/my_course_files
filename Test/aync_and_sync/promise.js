const flag = document.createElement('img');
document.body.appendChild(flag);

console.log('Lets go!');

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {
        flag.src = json[5].flags.png; // Correct property for the flag URL
        // let countries = json
        // console.log(countries)
        console.log('Flag added!');
        console.log('Done! with image ' + json[5].flags.png); // Move this inside the then block
    })
    .catch(err => {
        console.log('error: ' + err.message);
    });

// let response = fetch('https://restcountries.com/v3.1/all')
// console.log(response)

//async function getData() {
//    const response = await fetch('https://restcountries.com/v3.1/all')
//   const data = await response.json()
//    return data
//  }
//  getData().then(data => console.log(data)).catch(err => console.log('errors:' + err.message))