const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.querySelector('.color');
const button = document.getElementById('btn');

// function to change the background color and span text when the button is clicked

button.addEventListener ('click', function() {
    let randomHex = "#";

    for(let i = 0; i<6; i++) {
        randomHex += hex[randomNumber()];
    }

    colorText.textContent = randomHex;
    document.body.style.backgroundColor = randomHex;
});

// function to generate random numbers and/or letters 

randomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}

