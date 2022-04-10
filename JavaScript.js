const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = " ";
    }
    else {
        textError.textContent = "Name is Incorrect";
    }
});

const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error');
password.addEventListener('input', function () {
    let passRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?!(?:.*[!@#$%^&*]){2})[a-zA-Z0-9!@#$%^&*]{8,}$');
    if (passRegex.test(password.value))
        passwordError.textContent = " ";
    else
        passwordError.textContent = "Password is Incorrect";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[0-9a-zA-Z]+([.\\-+]?[a-zA-Z0-9]+)?\\@[0-9a-zA-Z]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,})*$');
    if (emailRegex.test(email.value))
        emailError.textContent = " ";
    else
        emailError.textContent = "Email is Incorrect";
});

const number = document.querySelector('#number');
const numberError = document.querySelector('.number-error');
number.addEventListener('input', function () {
    let numberRegex = RegExp('^([\\+]?91)?[6-9]{1}[0-9]{9}$')
    if (numberRegex.test(number.value))
        numberError.textContent = " ";
    else
        numberError.textContent = "Number is Incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});