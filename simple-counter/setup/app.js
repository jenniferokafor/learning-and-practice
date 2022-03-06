let value = document.querySelector('#value');
let buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count === 0) {
            value.style.color = "#222";
        }
          value.textContent = count;
    })
})