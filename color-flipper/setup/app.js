const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorText = document.querySelector('.color');
const button = document.getElementById('btn');

// function to change the background color and span text when the button is clicked

button.addEventListener ('click', function () {
    randomColor = random();
    colorText.textContent = colors[randomColor];
    document.body.style.backgroundColor = colors[randomColor];
})

// randomizing color

random = () => {
    return Math.floor(Math.random() * colors.length);
}