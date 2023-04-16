const form = document.getElementById('form');
const email = form.elements["email"];

// Variables used to print the messages
const inputStatus = document.querySelector('.error-text');

// email Regex
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validInput() {
    if (validEmail.test(email.value)) {
        alert('Email address submitted!');
        clearErrors();
        form.reset();
    } else if (email.value === '') {
        inputStatus.innerHTML = 'Please enter an email address';
        email.classList.add('error-email-border');
    } else {
        inputStatus.innerHTML = 'Please provide a valid email address';
        email.classList.add('error-email-border');
    }
    return
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validInput()
})

function clearErrors() {
    email.classList.remove('error-text');
    email.classList.remove('error-email-border');
    inputStatus.classList.add('success-text');
    inputStatus.innerHTML = ' ';
}