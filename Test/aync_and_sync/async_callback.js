const button = document.querySelector('button')

const alertMe = () => {
    console.log('You clicked me!')
}

function alertMe  () {
    console.log('You clicked me!')
}


button.addEventListener('click', alertMe)