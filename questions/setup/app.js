//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function () {
        // close any open question section before opening the next
        questions.forEach(function (matcher) {
            if (matcher !== question) {
                matcher.classList.remove('show-text');
            }
        }) 

        // toggle to open and close question sections
       question.classList.toggle('show-text'); 
    })
})