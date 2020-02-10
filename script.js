const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match');
    }
}

function checkRequired(input){
    input.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${input.id} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function checkInputLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.id} must be at least ${min} characters `);
    }else if(input.value.length > max){
        showError(input, `${input.id} must be less than ${max} characters `);
    }else{
        showSuccess(input);
    }
}


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    checkRequired([username, email, password, password2]);
    checkInputLength(username, 5, 10);
    checkInputLength(password, 8, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});
  